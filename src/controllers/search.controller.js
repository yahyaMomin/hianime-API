import { extractListPage } from '../extractor/extractListpage';
import { axiosInstance } from '../services/axiosInstance';
import { NotFoundError, validationError } from '../utils/errors';

const searchController = async (c) => {
  const keyword = c.req.query('keyword') || null;
  const page = c.req.query('page') || 1;

  if (!keyword) throw new validationError('query is required');

  const noSpaceKeyword = keyword.trim().toLowerCase().replace(/\s+/g, '+');

  const endpoint = `/search?keyword=${noSpaceKeyword}&page=${page}`;
  const result = await axiosInstance(endpoint);

  if (!result.success) {
    throw new validationError('make sure given endpoint is correct');
  }

  const response = extractListPage(result.data);

  if (response.response.length < 1) {
    throw new NotFoundError('page not found');
  }

  return response;
};

export default searchController;
