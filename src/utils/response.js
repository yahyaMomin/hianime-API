export const success = (c, data, statusCode = 200) => {
  return c.json({ success: true, data }, statusCode);
};

export const fail = (c, message = 'inernal server error', statusCode = 500, details = null) => {
  return c.json({ success: false, message, details }, statusCode);
};
