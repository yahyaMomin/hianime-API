import axios from 'axios';
import CryptoJS from 'crypto-js';
import config from '../../config/config.js';
import extractToken from '../helper/token.helper.js';

const { baseurl } = config;

export async function megacloud({ selectedServer, id }) {
  //  selectedServer = {
  //     index: 4,
  //     type: "dub",
  //     id: "668523",
  //     name: "HD-1",
  //   }
  // id  = steinsgate-3::ep=213

  const epID = id.split('ep=').pop();
  const fallback_1 = 'megaplay.buzz';
  const fallback_2 = 'vidwish.live';

  try {
    const [{ data: sourcesData }, { data: key }] = await Promise.all([
      axios.get(`${baseurl}/ajax/v2/episode/sources?id=${selectedServer.id}`),
      axios.get('https://raw.githubusercontent.com/itzzzme/megacloud-keys/refs/heads/main/key.txt'),
    ]);

    const ajaxLink = sourcesData?.link;
    if (!ajaxLink) throw new Error('Missing link in sourcesData');

    const sourceIdMatch = /\/([^/?]+)\?/.exec(ajaxLink);
    const sourceId = sourceIdMatch?.[1];
    if (!sourceId) throw new Error('Unable to extract sourceId from link');

    const baseUrlMatch = ajaxLink.match(/^(https?:\/\/[^/]+(?:\/[^/]+){3})/);
    if (!baseUrlMatch) throw new Error('Could not extract base URL from ajaxLink');
    const baseUrl = baseUrlMatch[1];

    let decryptedSources = null;
    let rawSourceData = {};

    try {
      // throw new Error('skip for now');
      const token = await extractToken(`${baseUrl}/${sourceId}?k=1&autoPlay=0&oa=0&asi=1`);
      const { data } = await axios.get(`${baseUrl}/getSources?id=${sourceId}&_k=${token}`);
      rawSourceData = data;
      const encrypted = rawSourceData?.sources;
      if (!encrypted) throw new Error('Encrypted source missing');

      const decrypted = CryptoJS.AES.decrypt(encrypted, key.trim()).toString(CryptoJS.enc.Utf8);
      if (!decrypted) throw new Error('Failed to decrypt source');
      decryptedSources = JSON.parse(decrypted);
    } catch {
      try {
        const fallback = selectedServer.name.toLowerCase() === 'hd-1' ? fallback_1 : fallback_2;

        const { data: html } = await axios.get(
          `https://${fallback}/stream/s-2/${epID}/${selectedServer.type}`,
          {
            headers: {
              Referer: `https://${fallback_1}/`,
            },
          }
        );

        const dataIdMatch = html.match(/data-id=["'](\d+)["']/);
        const realId = dataIdMatch?.[1];
        if (!realId) throw new Error('Could not extract data-id for fallback');

        const { data: fallback_data } = await axios.get(
          `https://${fallback}/stream/getSources?id=${realId}`,
          {
            headers: {
              'X-Requested-With': 'XMLHttpRequest',
            },
          }
        );

        decryptedSources = [{ file: fallback_data.sources.file }];
        if (!rawSourceData.tracks || rawSourceData.tracks.length === 0) {
          rawSourceData.tracks = fallback_data.tracks ?? [];
        }
        if (!rawSourceData.intro) {
          rawSourceData.intro = fallback_data.intro ?? null;
        }
        if (!rawSourceData.outro) {
          rawSourceData.outro = fallback_data.outro ?? null;
        }
      } catch (fallbackError) {
        throw new Error('Fallback failed: ' + fallbackError.message);
      }
    }

    return {
      id,
      type: selectedServer.type,
      link: {
        file: decryptedSources?.[0]?.file ?? '',
        type: 'hls',
      },
      tracks: rawSourceData.tracks ?? [],
      intro: rawSourceData.intro ?? null,
      outro: rawSourceData.outro ?? null,
      server: selectedServer.name,
    };
  } catch (error) {
    console.error(`Error during decryptSources_v1(${id}):`, error.message);
    return null;
  }
}
