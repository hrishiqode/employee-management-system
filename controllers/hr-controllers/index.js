import { Router } from 'express';
import LoginAuthentication from '../../services/login-authentication.js';
import hrAddEmployeeRouter from './hr-add-employee-controller.js';
import hrDashboardRouter from './hr-dashboard-controller.js';
import hrViewUserListRouter from './hr-view-user-list.js';

const hrRouter = Router();
hrRouter.use(LoginAuthentication.hrCheck);
hrRouter.use(hrDashboardRouter);
hrRouter.use(hrAddEmployeeRouter);
hrRouter.use(hrViewUserListRouter);
export default hrRouter;
