import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
  res.json({ message: 'Outlet routes backend' });
});

export default routes;
