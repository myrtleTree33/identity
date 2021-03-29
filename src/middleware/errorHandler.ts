// Catch 404 and forward to error handler
export const apply404Handler = () => (req, res, next) => {
  const err: Error = new Error('Not Found');
  // @ts-ignore
  err['httpCode'] = '404';
  // @ts-ignore
  err['code'] = '404';
  next(err);
};

// Error handler
export const applyErrorHandler = () => (
  err: any,
  req: any,
  res: any,
  next: any,
) => {
  // eslint-disable-line no-unused-vars
  const { code, message } = err;
  res.status(err.httpCode || 500).json({ code, message });
};
