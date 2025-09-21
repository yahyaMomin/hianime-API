import extractNextEpisodeSchadule from '../extractor/extractNextEpisodeSchadule';
import { axiosInstance } from '../services/axiosInstance';
import { validationError } from '../utils/errors';

const nextEpisodeSchaduleController = async (c) => {
  const id = c.req.param('id');

  if (!id) throw new validationError('id is required');

  const data = await axiosInstance('/watch/' + id);

  if (!data.success) throw new validationError('make sure id is correct');

  const response = extractNextEpisodeSchadule(data.data);

  return response;
};

export default nextEpisodeSchaduleController;
