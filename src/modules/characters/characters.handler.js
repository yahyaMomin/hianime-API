import axios from 'axios';
import { NotFoundError } from '@/utils/errors';
import config from '@/config/config';
import charactersExtract from './characters.extract';

export default async function charactersHandler(c) {
  const { id } = c.req.valid('param');
  const { page } = c.req.valid('query');

  const idNum = id.split('-').pop();
  const endpoint = `/ajax/character/list/${idNum}?page=${page}`;
  try {
    const Referer = `${config.baseurl}/home`;
    const { data } = await axios.get(config.baseurl + endpoint, {
      headers: {
        ...config.headers,
        Referer,
      },
    });

    const response = charactersExtract(data.html);

    return response;
  } catch {
    throw new NotFoundError('characters not found');
  }
}
