import { Router } from 'express';
import LoginAuthentication from '../../services/login-authentication.js';
import hrAddEmployeeRouter from './hr-add-employee-controller.js';
import hrContactRouter from './hr-contact-controller.js';
import hrDashboardRouter from './hr-dashboard-controller.js';

const hrRouter = Router();
hrRouter.use(LoginAuthentication.hrCheck);
hrRouter.use(hrDashboardRouter);
hrRouter.use(hrAddEmployeeRouter);
hrRouter.use(hrContactRouter);
export default hrRouter;
