import { Redis } from '@upstash/redis';

const clearCache = async () => {
  const isRedisEnv = Boolean(
    process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
  );
  if (!isRedisEnv) return;

  const redis = Redis.fromEnv();

  const keys = await redis.keys('*');
  if (!keys || keys.length === 0) return;
  await Promise.all(keys.map((k) => redis.del(k)));

  return;
};

export default clearCache;
