import { axiosInstance } from '@/services/axiosInstance';
import { NotFoundError, validationError } from '@/utils/errors';
import characterInfoExtract from '../characterInfo.extract';

export default async function voiceActorHandler(c) {
  const { id } = c.req.valid('param');

  const result = await axiosInstance(`/${id.replace(':', '/')}`);
  if (!result.success) {
    throw new validationError('make sure given endpoint is correct');
  }

  const response = characterInfoExtract(result.data);

  if (response.length < 1) throw new NotFoundError();
  return response;
}
