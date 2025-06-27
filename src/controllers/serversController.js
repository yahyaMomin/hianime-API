import axios from 'axios';
import { validationError } from '../utils/errors';
import config from '../config/config';
import { extractServers } from '../extractor/extractServers';

export const getServers = async (id) => {
  const episode = id.split('ep=').at(-1);
  const ajaxUrl = `/ajax/v2/episode/servers?episodeId=${episode}`;
  // "/ajax/v2/episode/servers?episodeId=${id}"
  const Referer = `/watch/${id.replace('::', '?')}`;

  try {
    const { data } = await axios.get(config.baseurl + ajaxUrl, {
      headers: {
        Referer: config.baseurl + Referer,
        ...config.headers,
      },
    });

    const response = extractServers(data.html);
    return response;
  } catch (err) {
    console.log(err.message);
    throw new validationError('make sure given endpoint is correct', {
      validIdEx: 'watch/steinsgate-3?ep=213',
    });
  }
};
const serversController = async (c) => {
  const id = c.req.query('id');

  if (!id) throw new validationError('id is required');

  const response = await getServers(id);

  return response;
};

export default serversController;
