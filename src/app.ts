import express from 'express';
import { apply404Handler, applyErrorHandler } from './middleware/errorHandler';

import baseRoutes from './routes/baseRoutes';

const runApp = (db: any): any => {
  const app = express();

  // Middleware
  app.use(express.json());

  // Routes
  app.use('/', baseRoutes);

  // Error handlers
  app.use(applyErrorHandler());
  app.use(apply404Handler());

  return app;
};

export default runApp;
