import { Router } from 'express';
import LoginAuthentication from '../../services/login-authentication.js';
import hrAddEmployeeRouter from './hr-add-employee-controller.js';
import hrAttendanceRouter from './hr-attedance-controller.js';
import hrContactRouter from './hr-contact-controller.js';
import hrDashboardRouter from './hr-dashboard-controller.js';
import hrViewUserListRouter from './hr-view-user-list.js';

import hrViewAttendanceRouter from './hr-view-attendance-controller.js';

const hrRouter = Router();
hrRouter.use(LoginAuthentication.hrCheck);
hrRouter.use(hrDashboardRouter);
hrRouter.use(hrAddEmployeeRouter);
hrRouter.use(hrViewUserListRouter);
hrRouter.use(hrContactRouter);
hrRouter.use(hrAttendanceRouter);
hrRouter.use(hrViewAttendanceRouter);
export default hrRouter;
