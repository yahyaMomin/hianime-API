import { extractListPage } from '../extractor/extractListpage';
import { axiosInstance } from '../services/axiosInstance';
import { NotFoundError, validationError } from '../utils/errors';

const listpageController = async (c) => {
  const validateQueries = [
    'top-airing',
    'most-popular',
    'most-favorite',
    'completed',
    'recently-added',
    'recently-updated',
    'top-upcoming',
    'genre',
    'az-list',
    'subbed-anime',
    'dubbed-anime',
    'movie',
    'tv',
    'ova',
    'ona',
    'special',
    'events',
    'producer',
  ];
  const query = c.req.param('query').toLowerCase() || null;

  if (!validateQueries.includes(query))
    throw new validationError('invalid query', { validateQueries });

  let category = c.req.param('category') || null;

  const page = c.req.query('page') || 1;

  if ((query === 'genre' || query === 'producer') && !category) {
    throw new validationError(`category is require for query ${query}`);
  }
  if (query !== 'genre' && query !== 'az-list' && query !== 'producer' && category) {
    category = null;
  }

  let nromalizeCategory = category && category.replaceAll(' ', '-').toLowerCase();
  if (nromalizeCategory === 'martial-arts') nromalizeCategory = 'marial-arts';
  const endpoint = category
    ? `/${query}/${nromalizeCategory}?page=${page}`
    : `/${query}?page=${page}`;

  console.log(endpoint);

  const result = await axiosInstance(endpoint);

  if (!result.success) {
    throw new validationError('make sure given endpoint is correct');
  }
  const response = extractListPage(result.data);

  if (response.response.length < 1) throw new NotFoundError();
  return response;
};

export default listpageController;
