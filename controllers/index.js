import { Router } from 'express';
import attendanceRouter from './attendance-controller.js';
import contactRouter from './contact-controller.js';
import loginRouter from './login-controller.js';
import viewAttendanceRouter from './view-attendance-controller.js';

const centralRouter = Router();
centralRouter.use(loginRouter);
centralRouter.use(attendanceRouter);
centralRouter.use(viewAttendanceRouter);
centralRouter.use(contactRouter);
export default centralRouter;
