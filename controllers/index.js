import { Router } from 'express';
import attendanceRouter from './attendance-controller.js';
import loginRouter from './login-controller.js';

const centralRouter = Router();
centralRouter.use(loginRouter);
centralRouter.use(attendanceRouter);
export default centralRouter;
