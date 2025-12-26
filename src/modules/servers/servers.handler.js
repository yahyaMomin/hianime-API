import config from '@/config/config';
import serversExtract from './servers.extract';
import { NotFoundError } from '@/utils/errors';

export default async function (c) {
  const { id } = c.req.valid('param');

  const response = await getServers(id);

  return response;
}

export async function getServers(id) {
  const episode = id.split('ep=').at(-1);
  const ajaxUrl = `/ajax/v2/episode/servers?episodeId=${episode}`;
  // "/ajax/v2/episode/servers?episodeId=${id}"
  const Referer = `/watch/${id.replace('::', '?')}`;

  try {
    const res = await fetch(config.baseurl + ajaxUrl, {
      headers: {
        Referer: config.baseurl + Referer,
        ...config.headers,
      },
    });
    const data = await res.json();
    const response = serversExtract(data.html);
    return response;
  } catch (err) {
    console.log(err.message);
    throw new NotFoundError('servers not found');
  }
}
