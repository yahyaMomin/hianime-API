import nextEpScheduleExtract from './nextEpSchedule.extract';
import { axiosInstance } from '@/services/axiosInstance';
import { validationError } from '@/utils/errors';

export default async function nextEpScheduleHandler(c) {
  const { id } = c.req.valid('param');

  console.log(id);
  const data = await axiosInstance('/watch/' + id);

  if (!data.success) throw new validationError('make sure id is correct');

  const response = nextEpScheduleExtract(data.data);

  return response;
}
