import { Router } from 'express';
import LoginAuthentication from '../services/login-authentication.js';
import attendanceRouter from './attendance-controller.js';
import contactRouter from './contact-controller.js';
import dashboardRouter from './dashboard-controller.js';
import deactivateRouter from './deactivate-controller.js';
import hrRouter from './hr-controllers/index.js';
import loginRouter from './login-controller.js';
import logoutRouter from './logout-controller.js';
import viewAttendanceRouter from './view-attendance-controller.js';

const employeeRouter = Router();
employeeRouter.use(LoginAuthentication.employeeCheck);
employeeRouter.use(attendanceRouter);
employeeRouter.use(viewAttendanceRouter);
employeeRouter.use(contactRouter);
employeeRouter.use(dashboardRouter);
employeeRouter.use(deactivateRouter);
const protectedRouter = Router();
protectedRouter.use(LoginAuthentication.authCheck);
protectedRouter.use('/hr', hrRouter);
protectedRouter.use('/employee', employeeRouter);
const publicRouter = Router();
publicRouter.use(loginRouter);
publicRouter.use(logoutRouter);

const centralRouter = Router();
centralRouter.use(publicRouter);
centralRouter.use(protectedRouter);

export default centralRouter;
