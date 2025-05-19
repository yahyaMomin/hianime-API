import { extractDetailpage } from '../extractor/extractDetailpage';
import { axiosInstance } from '../services/axiosInstance';
import { validationError } from '../utils/errors';

const detailpageController = async (c) => {
  const id = c.req.param('id');
  const result = await axiosInstance(`/${id}`);
  if (!result.success) {
    throw new validationError(result.message, 'maybe id is incorrect : ' + id);
  }
  const response = extractDetailpage(result.data);

  return response;
};

export default detailpageController;
