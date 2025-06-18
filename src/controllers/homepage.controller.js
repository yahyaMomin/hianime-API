import { axiosInstance } from '../services/axiosInstance';
import { validationError } from '../utils/errors';
import { extractHomepage } from '../extractor/extractHomepage';

const homepageController = async () => {
  const result = await axiosInstance('/home');

  if (!result.success) {
    throw new validationError(result.message);
  }
  const response = extractHomepage(result.data);
  return response;
};

export default homepageController;
