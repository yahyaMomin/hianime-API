import * as cheerio from 'cheerio';
import config from '@/config/config.js';

const { baseurl } = config;

/* =======================
   CONSTANTS
======================= */
const MAX_RETRIES = 3;
const TIMEOUT = 10_000;
const MIN_TOKEN_LENGTH = 10;

/* =======================
   PUBLIC API
======================= */
export default async function extractToken(url, retry = 0) {
  try {
    const html = await fetchHTML(url);
    const $ = cheerio.load(html);

    return (
      extractFromMeta($) ||
      extractFromDataAttr($) ||
      extractFromNonce($) ||
      extractFromWindowStrings(html) ||
      extractFromWindowObjects(html) ||
      extractFromComments($) ||
      throwNoToken()
    );
  } catch (err) {
    console.error(err.message);
    if (retry < MAX_RETRIES - 1) {
      await backoff(retry);
      return extractToken(url, retry + 1);
    }
    return null;
  }
}

/* =======================
   FETCH
======================= */

const fetchHTML = async (url) => {
  const controller = new AbortController();

  const id = setTimeout(() => controller.abort(), TIMEOUT);
  try {
    const res = await fetch(url, {
      headers: {
        Referer: `${baseurl}/`,
        'User-Agent': config.headers['User-Agent'],
        Accept: 'text/html',
      },
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
   EXTRACTION METHODS
   (priority order)
======================= */

const extractFromMeta = ($) => validate($('meta[name="_gg_fb"]').attr('content'));

const extractFromDataAttr = ($) => validate($('[data-dpi]').attr('data-dpi'));

const extractFromNonce = ($) =>
  validate(
    $('script[nonce]')
      .map((_, el) => $(el).attr('nonce'))
      .get()
      .find(Boolean)
  );

const extractFromWindowStrings = (html) => {
  const regex = /window\.\w+\s*=\s*["']([a-zA-Z0-9_-]{10,})["']/g;

  for (const match of html.matchAll(regex)) {
    const token = validate(match[1]);
    if (token) return token;
  }
};

const extractFromWindowObjects = (html) => {
  const regex = /window\.\w+\s*=\s*(\{[\s\S]*?\});/g;

  for (const match of html.matchAll(regex)) {
    try {
      const obj = new Function(`return ${match[1]}`)();
      if (!obj || typeof obj !== 'object') continue;

      const joined = Object.values(obj)
        .filter((v) => typeof v === 'string')
        .join('');

      const token = validate(joined, 20);
      if (token) return token;
    } catch {
      continue;
    }
  }
};

const extractFromComments = ($) => {
  let token = null;

  $('*')
    .contents()
    .each((_, node) => {
      if (node.type !== 'comment') return;

      const match = node.data.trim().match(/(?:_is_th|token|key):([a-zA-Z0-9_-]{10,})/);

      if (match) {
        token = match[1];
        return false;
      }
    });

  return validate(token);
};

/* =======================
   UTIL
======================= */

const validate = (value, min = MIN_TOKEN_LENGTH) =>
  typeof value === 'string' && value.length >= min ? value : null;

const throwNoToken = () => {
  throw new Error('No token found');
};

const backoff = (retry) => new Promise((res) => setTimeout(res, 1000 * (retry + 1)));
