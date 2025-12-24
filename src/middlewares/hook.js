import { fail } from '@/utils/response';

export default function zodValidationHook(result, c) {
  if (!result.success) {
    return fail(c, result.error.flatten().fieldErrors, 400);
  }
}
