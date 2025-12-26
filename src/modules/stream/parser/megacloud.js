import CryptoJS from 'crypto-js';
import config from '@/config/config.js';
import extractToken from './token';

const { baseurl } = config;

/* =======================
   CONSTANTS
======================= */
const MAX_RETRIES = 2;
const TIMEOUT = 15000;
const KEY_CACHE_DURATION = 60 * 60 * 1000; // 1 hour

const KEY_URL =
  'https://raw.githubusercontent.com/ryanwtf88/megacloud-keys/refs/heads/master/key.txt';

const FALLBACK_PROVIDERS = [
  { name: 'megaplay', domain: 'megaplay.buzz' },
  { name: 'vidwish', domain: 'vidwish.live' },
];

/* =======================
   FETCH HELPERS (BUN)
======================= */
const fetchJSON = async (url, { headers = {}, timeout = TIMEOUT } = {}) => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  try {
    const res = await fetch(url, {
      headers,
      signal: controller.signal,
    });

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

    return await res.json();
  } finally {
    clearTimeout(id);
  }
};

const fetchText = async (url, { headers = {}, timeout = TIMEOUT } = {}) => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  try {
    const res = await fetch(url, {
      headers,
      signal: controller.signal,
    });

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

    return await res.text();
  } finally {
    clearTimeout(id);
  }
};

/* =======================
   KEY CACHE
======================= */
let cachedKey = null;
let keyLastFetched = 0;

/* =======================
   PUBLIC API
======================= */
export default async function megacloud({ selectedServer, id }, retry = 0) {
  const epID = extractEpisodeId(id);

  try {
    const [sourcesResponse, key] = await Promise.all([
      fetchAjaxSources(selectedServer.id),
      getDecryptionKey(),
    ]);

    const { baseUrl, sourceId } = parseAjaxLink(sourcesResponse.link);

    let decrypted;
    let rawData;
    let usedFallback = false;

    try {
      ({ sources: decrypted, rawData } = await decryptPrimarySource(baseUrl, sourceId, key));
    } catch {
      ({ sources: decrypted, rawData } = await getFallbackSource(
        epID,
        selectedServer.type,
        selectedServer.name
      ));
      usedFallback = true;
    }

    validateSources(decrypted);

    return buildResult({
      id,
      server: selectedServer,
      file: decrypted[0].file,
      rawData,
      usedFallback,
    });
  } catch (err) {
    console.error(err.message);
    if (retry < MAX_RETRIES) {
      await backoff(retry);
      return megacloud({ selectedServer, id }, retry + 1);
    }
    return null;
  }
}

/* =======================
   CORE HELPERS
======================= */

const fetchAjaxSources = async (serverId) => {
  const data = await fetchJSON(`${baseurl}/ajax/v2/episode/sources?id=${serverId}`);

  if (!data?.link) throw new Error('Missing ajax link');
  return data;
};

const parseAjaxLink = (link) => {
  const sourceId = /\/([^/?]+)\?/.exec(link)?.[1];
  const baseUrl = link.match(/^(https?:\/\/[^/]+(?:\/[^/]+){3})/)?.[1];

  if (!sourceId || !baseUrl) {
    throw new Error('Invalid ajax link format');
  }

  return { sourceId, baseUrl };
};

const decryptPrimarySource = async (baseUrl, sourceId, key) => {
  const token = await extractToken(`${baseUrl}/${sourceId}?k=1&autoPlay=0&oa=0&asi=1`);
  if (!token) throw new Error('Token extraction failed');

  const data = await fetchJSON(`${baseUrl}/getSources?id=${sourceId}&_k=${token}`, {
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      Referer: `${baseUrl}/${sourceId}`,
    },
  });

  const encrypted = data?.sources;
  if (!encrypted) throw new Error('Missing encrypted sources');

  const sources = typeof encrypted === 'string' ? decryptAES(encrypted, key) : encrypted;

  return { sources, rawData: data };
};

const decryptAES = (encrypted, key) => {
  const tryDecrypt = (k) => CryptoJS.AES.decrypt(encrypted, k).toString(CryptoJS.enc.Utf8);

  const decrypted = tryDecrypt(key) || tryDecrypt(CryptoJS.enc.Hex.parse(key));

  if (!decrypted) throw new Error('AES decryption failed');
  return JSON.parse(decrypted);
};

/* =======================
   FALLBACK
======================= */

const getFallbackSource = async (epID, type, serverName) => {
  const providers = prioritizeFallback(serverName);

  for (const provider of providers) {
    try {
      const html = await fetchFallbackHTML(provider, epID, type);
      const realId = extractDataId(html);
      if (!realId) continue;

      const { data } = await fetchFallbackSources(provider, realId);
      if (data?.sources?.file) {
        return {
          sources: [{ file: data.sources.file }],
          rawData: data,
        };
      }
    } catch {
      continue;
    }
  }

  throw new Error('All fallbacks failed');
};

const prioritizeFallback = (serverName) => {
  const primary =
    serverName.toLowerCase() === 'hd-1' ? FALLBACK_PROVIDERS[0] : FALLBACK_PROVIDERS[1];

  return [primary, ...FALLBACK_PROVIDERS.filter((p) => p !== primary)];
};

const fetchFallbackHTML = async (provider, epID, type) =>
  fetchText(`https://${provider.domain}/stream/s-2/${epID}/${type}`, {
    headers: {
      Referer: `https://${provider.domain}/`,
      'User-Agent': config.headers['User-Agent'],
    },
  });

const fetchFallbackSources = async (provider, id) => {
  const data = await fetchJSON(`https://${provider.domain}/stream/getSources?id=${id}`, {
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      Referer: `https://${provider.domain}/`,
    },
  });

  return { data };
};

const extractDataId = (html) => html.match(/data-id=["'](\d+)["']/)?.[1];

/* =======================
   KEY MANAGEMENT
======================= */

const getDecryptionKey = async () => {
  const now = Date.now();

  if (cachedKey && now - keyLastFetched < KEY_CACHE_DURATION) {
    return cachedKey;
  }

  try {
    const data = await fetchText(KEY_URL);
    cachedKey = data.trim();
    keyLastFetched = now;
    return cachedKey;
  } catch (err) {
    console.error(err.message);
    if (cachedKey) return cachedKey;
    throw new Error('Key fetch failed');
  }
};

/* =======================
   UTIL
======================= */

const extractEpisodeId = (id) => id.split('ep=').pop();

const validateSources = (sources) => {
  if (!sources?.[0]?.file) {
    throw new Error('Invalid decrypted sources');
  }
};

const buildResult = ({ id, server, file, rawData, usedFallback }) => ({
  id,
  type: server.type,
  link: {
    file,
    type: 'hls',
  },
  tracks: rawData?.tracks ?? [],
  intro: rawData?.intro ?? null,
  outro: rawData?.outro ?? null,
  server: server.name,
  usedFallback,
});

const backoff = (retry) => new Promise((res) => setTimeout(res, 2000 * (retry + 1)));
