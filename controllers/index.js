import { Router } from 'express';
import loginRouter from './login-controller.js';

const centralRouter = Router();

centralRouter.use(loginRouter);
export default centralRouter;
