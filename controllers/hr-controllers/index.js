import { Router } from 'express';
import LoginAuthentication from '../../services/login-authentication.js';
import hrDashboardRouter from './hr-dashboard-controller.js';

const hrRouter = Router();
hrRouter.use(LoginAuthentication.hrCheck);
hrRouter.use(hrDashboardRouter);
export default hrRouter;
