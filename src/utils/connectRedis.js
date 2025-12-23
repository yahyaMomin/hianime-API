import { Redis } from '@upstash/redis';

export default async function connectRedis() {
  const isRedisEnv = Boolean(
    process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
  );

  if (!isRedisEnv)
    return {
      exist: false,
      redis: null,
    };
  const redis = Redis.fromEnv();

  return {
    exist: true,
    redis,
  };
}
