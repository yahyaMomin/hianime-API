import { redis } from 'bun';
import { axiosInstance } from '../services/axiosInstance';
import { validationError } from '../utils/errors';
import { extractHomepage } from '../extractor/extractHomepage';

const homepageController = async (c) => {
  const data = await redis.get('home');
  if (data != null) {
    return JSON.parse(data);
  }

  const result = await axiosInstance('/home');

  if (!result.success) {
    throw new validationError(result.message);
  }

  const response = extractHomepage(result.data);

  await redis.set('home', JSON.stringify(response));
  await redis.expire('home', 5);
  return response;
};

export default homepageController;
