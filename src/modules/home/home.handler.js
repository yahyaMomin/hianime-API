import { axiosInstance } from '@/services/axiosInstance';
import { validationError } from '@/utils/errors';
import homeExtract from './home.extract';

import connectRedis from '@/utils/connectRedis';

export default async function homeHandler() {
  const { exist, redis } = await connectRedis();

  if (!exist) {
    const result = await axiosInstance('/home');
    if (!result.success) {
      throw new validationError(result.message);
    }
    const response = homeExtract(result.data);
    return response;
  } else {
    const homePageData = await redis.get('home');
    if (homePageData) {
      return homePageData;
    }
    const result = await axiosInstance('/home');
    if (!result.success) {
      throw new validationError(result.message);
    }
    const response = homeExtract(result.data);
    await redis.set('home', JSON.stringify(response), {
      ex: 60 * 60 * 24,
    });
    return response;
  }
}
