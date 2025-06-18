import AniplayExtractor from '../parsers/aniplay.parser';
// import decryptMegacloud from '../parsers/decryptor/megacloud.decryptor';
import { decryptSources_v1 } from '../parsers/decryptor/megacloud_v1';

export const extractStream = async ({ syncData, selectedServer, id, epNum }) => {
  if (selectedServer.name === 'HD-4') {
    const extractor = new AniplayExtractor();
    const streamingLink = await extractor.fetchEpisode(syncData.anilist_id, epNum);
    return { streamingLink: streamingLink.sources, servers: selectedServer.name };
  }

  const streamingLink = await decryptSources_v1(
    selectedServer.id,
    selectedServer.name,
    selectedServer.type,
    id
  );
  // const streamingLink = await decryptMegacloud(
  //   selectedServer.id,
  //   selectedServer.name,
  //   selectedServer.type,
  //   id
  // );
  return { streamingLink, servers: selectedServer.name };

  // const { link } = res.data;
  // const urlObj = new URL(link);

  // // const streamingLink = await decryptMegacloud(requestedServer[0].data_id, name, type);
  // // return { streamingLink, servers };

  // const url = 'https://megacloud.tv/embed-2/ajax/e-1/getSources?id=';

  // const id = urlObj.pathname.split('/').at(-1);

  // const { data } = await axios.get(url + id, {
  //   headers: {
  //     Referer: urlObj.href,
  //     'Accept-Encoding': 'gzip, deflate',
  //     'User-Agent':
  //       'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:131.0) Gecko/20100101 Firefox/131.0',
  //     'X-Requested-With': 'XMLHttpRequest',
  //   },
  // });

  // const response = await extract(data);

  // return response;
};
