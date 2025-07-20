// import decryptMegacloud from '../parsers/decryptor/megacloud.decryptor';
import { megacloud } from '../parsers/decryptor/megacloud';

export const extractStream = async ({ selectedServer, id }) => {
  if (selectedServer.name === 'HD-4') {
    const url = `https://megaplay.buzz/stream/s-2/${id.split('ep=').pop()}/${selectedServer.type}`;
    return { streamingLink: url, servers: selectedServer.name };
  }

  const streamingLink = await megacloud({ selectedServer, id });
  // const streamingLink = await decryptMegacloud(
  //   selectedServer.id,
  //   selectedServer.name,
  //   selectedServer.type,
  //   id
  // );
  return streamingLink;

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
