import { genres, azList, exploreRoutes, filterOptions } from '@/config/meta';

export default async function metaHandler() {
  return {
    genres,
    azList,
    exploreRoutes,
    filterOptions: { ...filterOptions, genres },
  };
}
