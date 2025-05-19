import axios from 'axios';
import { validationError } from '../utils/errors';
import config from '../config/config';
import { getServers } from './serversController';
import { extractStream } from '../extractor/extractStream';
import extractSyncData from '../extractor/extractSyncData';

const streamController = async (c) => {
  const { id, server = 'hd-1', type = 'sub' } = c.req.query();

  let syncData = null;
  const Referer = config.baseurl + id;
  try {
    const { data } = await axios.get(config.baseurl + id, {
      headers: {
        Referer: Referer,
        ...config.headers,
      },
    });
    syncData = extractSyncData(data);
  } catch (err) {
    console.log(err.message);
    throw new validationError('no syncData found');
  }

  if (!id) throw new validationError('id is required');

  const episode = id.includes('ep=');
  if (!episode) throw new validationError('episode  is not valid');

  const servers = await getServers(id);

  const selectedServer = servers[type].find((el) => el.name.toLowerCase() === server);
  if (!selectedServer) throw new validationError('invalid or server not found', { server });

  const params = {
    syncData,
    selectedServer,
    id,
    epNum: servers.episode,
  };

  // const ajaxUrl = `/ajax/v2/episode/sources?id=${selectedServer.id}`;
  // https://hianimez.to/ajax/v2/episode/sources?id=574667

  // try {
  //   const { data } = await axios.get(config.baseurl + ajaxUrl, {
  //     headers: {
  //       Referer: Referer,
  //       ...config.headers,
  //     },
  //   });

  const response = await extractStream(params);
  return response;
};

export default streamController;
