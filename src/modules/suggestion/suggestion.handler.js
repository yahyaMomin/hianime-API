import { validationError } from '@/utils/errors';
import config from '@/config/config';
import suggestionExtract from './suggestion.extract';

export default async function suggestionHandler(c) {
  const { keyword } = c.req.valid('query');

  const endpoint = `/ajax/search/suggest?keyword=${keyword}`;
  const Referer = `${config.baseurl}/home`;
  const res = await fetch(config.baseurl + endpoint, {
    headers: {
      Referer,
      ...config.headers,
    },
  });

  const data = await res.json();
  if (!data.status) throw new validationError('suggestion not found');

  const response = suggestionExtract(data.html);

  return response;
}
