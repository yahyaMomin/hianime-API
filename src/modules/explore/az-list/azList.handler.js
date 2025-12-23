import exploreExtract from '../explore.extract';
import { axiosInstance } from '@/services/axiosInstance';
import createEndpoint from '@/utils/createEndpoint';
import { NotFoundError, validationError } from '@/utils/errors';

export default async function azListHandler(c) {
  const { letter } = c.req.valid('param');
  const { page } = c.req.valid('query');

  const endpoint = createEndpoint(`az-list/${letter}`, page);

  console.log(endpoint);

  const result = await axiosInstance(endpoint);

  if (!result.success) {
    throw new validationError('make sure given endpoint is correct');
  }
  const response = exploreExtract(result.data);

  if (response.response.length < 1) throw new NotFoundError();
  return response;
}
