import { axiosInstance } from '../services/axiosInstance';
import { validationError } from '../utils/errors';
import { extractHomepage } from '../extractor/extractHomepage';

import { Redis } from '@upstash/redis';

const homepageController = async () => {
  const result = await axiosInstance('/home');

  const redis = Redis.fromEnv();

  const homePageData = await redis.get('home');

  if (homePageData) {
    console.log('CACHE HIT');
    return homePageData;
  }
  console.log('CACHE MISS');

  if (!result.success) {
    throw new validationError(result.message);
  }
  const response = extractHomepage(result.data);
  await redis.set('home', JSON.stringify(response), {
    ex: 86400,
  });
  return response;
};

export default homepageController;
