import { axiosInstance } from '@/services/axiosInstance';
import { validationError } from '@/utils/errors';
import topTenExtract from './topTen.extract';

export default async function topTenHandler() {
  const result = await axiosInstance('/home');
  if (!result.success) {
    throw new validationError(result.message);
  }
  const response = topTenExtract(result.data);
  return response;
}
