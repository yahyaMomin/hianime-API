import detailExtract from './detail.extract';
import { axiosInstance } from '@/services/axiosInstance';
import connectRedis from '@/utils/connectRedis';
import { validationError } from '@/utils/errors';

export default async function detailHandler(c) {
  const { id } = c.req.valid('param');

  const { exist, redis } = await connectRedis();
  if (!exist) {
    const result = await axiosInstance(`/${id}`);
    if (!result.success) {
      throw new validationError(result.message, 'maybe id is incorrect : ' + id);
    }
    const response = detailExtract(result.data);
    return response;
  } else {
    const detail = await redis.get(id);
    if (detail) {
      return detail;
    }

    const result = await axiosInstance(`/${id}`);
    if (!result.success) {
      throw new validationError(result.message, 'maybe id is incorrect : ' + id);
    }
    const response = detailExtract(result.data);

    await redis.set(id, JSON.stringify(response), {
      ex: 60 * 60 * 24,
    });
    return response;
  }
}
