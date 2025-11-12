import { axiosInstance } from '../services/axiosInstance';
import { validationError } from '../utils/errors';
import { extractHomepage } from '../extractor/extractHomepage';

import { Redis } from '@upstash/redis';

const homepageController = async () => {
  const isRedisEnv = Boolean(
    process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
  );
  if (isRedisEnv) {
    const redis = Redis.fromEnv();
    const homePageData = await redis.get('home');

    if (homePageData) {
      return homePageData;
    }

    const result = await axiosInstance('/home');

    if (!result.success) {
      throw new validationError(result.message);
    }
    const response = extractHomepage(result.data);
    await redis.set('home', JSON.stringify(response), {
      ex: 60 * 60 * 24,
    });
    return response;
  } else {
    const result = await axiosInstance('/home');
    if (!result.success) {
      throw new validationError(result.message);
    }
    const response = extractHomepage(result.data);
    return response;
  }
};

export default homepageController;
