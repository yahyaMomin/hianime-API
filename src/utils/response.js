export const success = (c, data, statusCode = 200) => {
  return c.json({ success: true, data }, { status: statusCode });
};

export const fail = (c, message = 'internal server error', statusCode = 500, details = null) => {
  return c.json({ success: false, message, details }, { status: statusCode });
};
