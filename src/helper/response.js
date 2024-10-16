const setResponse = (c, status, data) => {
   c.status(status);
   return c.json({ status: true, data });
};

const setError = (c, status, message) => {
   c.status(status);
   return c.json({ status: false, message });
};

export { setResponse, setError };
