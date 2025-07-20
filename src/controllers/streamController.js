import { validationError } from '../utils/errors';
import { getServers } from './serversController';
import { extractStream } from '../extractor/extractStream';

const streamController = async (c) => {
  let { id, server = 'HD-1', type = 'sub' } = c.req.query();

  if (!id) throw new validationError('id is required');

  server = server.toUpperCase();
  // let syncData = null;
  // const Referer = config.baseurl + id;
  // try {
  //   const { data } = await axios.get(config.baseurl + id, {
  //     headers: {
  //       Referer: Referer,
  //       ...config.headers,
  //     },
  //   });
  //   syncData = extractSyncData(data);
  // } catch (err) {
  //   console.log(err.message);
  //   throw new validationError('no syncData found');
  // }

  const episode = id.includes('ep=');
  if (!episode) throw new validationError('episode  is not valid');

  const servers = await getServers(id);

  const selectedServer = servers[type].find((el) => el.name === server);
  if (!selectedServer) throw new validationError('invalid or server not found', { server });

  const response = await extractStream({ selectedServer, id });
  return response;
};

export default streamController;
