import exploreExtract from '../explore.extract';
import { axiosInstance } from '@/services/axiosInstance';
import createEndpoint from '@/utils/createEndpoint';
import { NotFoundError, validationError } from '@/utils/errors';

export default async function searchHandler(c) {
  const { page, keyword } = c.req.valid('query');

  console.log(keyword);

  const endpoint = createEndpoint(`search?keyword=${keyword}`, page);

  console.log(endpoint);

  const result = await axiosInstance(endpoint);

  if (!result.success) {
    throw new validationError('make sure given endpoint is correct');
  }
  const response = exploreExtract(result.data);

  if (response.response.length < 1) throw new NotFoundError();
  return response;
}
