import { NotFoundError } from '../utils/errors';

const protect = async (c, next) => {
  try {
    const ip = c.req.header('CF-Connecting-IP') ?? c.req.header('X-Forwarded-For') ?? null;
    console.log(ip);
    if (!ip) throw new NotFoundError('404 Page Not Found');
    await next();
  } catch (error) {
    console.log(error.message);

    throw new NotFoundError('404 Page Not Found');
  }
};

export default protect;
