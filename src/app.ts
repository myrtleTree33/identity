import express from 'express';
import { apply404Handler, applyErrorHandler } from './middleware/errorHandler';

import baseRoutes from './routes/baseRoutes';

const runApp = (): any => {
  const app = express();

  // Middleware
  app.use(express.json());
  app.use(applyErrorHandler());
  app.use(apply404Handler());

  // Routes
  app.use('/', baseRoutes);
  // app.use('/user', userRoutes);
  // app.use('/outlet', outletRoutes);

  return app;
};

export default runApp;
