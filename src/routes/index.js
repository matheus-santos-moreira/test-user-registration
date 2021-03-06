import { Router } from 'express';

import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

routes.use('/', sessionsRouter);
routes.use('/users', usersRouter);

export default routes;
