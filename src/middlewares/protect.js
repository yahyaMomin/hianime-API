import { NotFoundError } from '../utils/errors';

const protect = async (c, next) => {
  try {
    console.log(c.req.header());
    const ip = c.req.header('X-Forwarded-For') ?? null;
    console.log(ip);
    await next();
  } catch (error) {
    console.log(error.message);

    throw new NotFoundError('404 Page Not Found');
  }
};

export default protect;
