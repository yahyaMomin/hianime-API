import axios from 'axios';
import { validationError } from '@/utils/errors';
import config from '@/config/config';
import suggestionExtract from './suggestion.extract';

export default async function suggestionHandler(c) {
  const { keyword } = c.req.valid('query');

  const endpoint = `/ajax/search/suggest?keyword=${keyword}`;
  const Referer = `${config.baseurl}/home`;
  const { data } = await axios.get(config.baseurl + endpoint, {
    headers: {
      Referer,
      ...config.headers,
    },
  });

  if (!data.status) throw new validationError('suggestion not found');

  const response = suggestionExtract(data.html);

  return response;
}
