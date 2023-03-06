import bodyParser from 'body-parser';
import { Router } from 'express';
import db from '../../models/index.cjs';

const hrAttendanceRouter = Router();

hrAttendanceRouter.route('/signin')
  .get(async (req, res, next) => {
    const userId = req.session.user.id;
    let attendance = await db.attendances.findOne({
      where: {
        date: new Date(),
        userId,
      },
    });
    if (attendance === null) {
      attendance = await db.attendances.create({
        userId,
        date: new Date(),
        loginTime: new Date().toTimeString().substring(0, 8),
      });
    } else if (attendance.loginTime === null) {
      attendance.loginTime = new Date().toTimeString().substring(0, 8);
    }
    res.render('hr-dashboard', {
      id: req.session.user.id,
      firstName: req.session.user.firstName,
      lastName: req.session.user.lastName,
      dateOfBirth: req.session.user.lastName,
      email: req.session.user.email,
      signIn: attendance.loginTime,
      signOut: attendance.logoutTime ? attendance.logoutTime : 'not logged out',
    });
  });
hrAttendanceRouter.route('/signout')
  .get(async (req, res, next) => {
    const userId = req.session.user.id;
    let attendance = await db.attendances.findOne({
      where: {
        date: new Date(),
        userId,
      },
    });
    if (attendance === null) {
      attendance = await db.attendances.create({
        userId,
        date: new Date(),
        loginTime: new Date().toTimeString().substring(0, 8),
        logoutTime: new Date().toTimeString().substring(0, 8),
      });
    } else {
      attendance.loginTime = (attendance.loginTime ? attendance.loginTime : new Date().toTimeString().substring(0, 8));
      attendance.logoutTime = (attendance.logoutTime ? attendance.logoutTime : new Date().toTimeString().substring(0, 8));
      await attendance.save();
    }
    console.log(attendance);
    res.render('hr-dashboard', {
      id: req.session.user.id,
      firstName: req.session.user.firstName,
      lastName: req.session.user.lastName,
      dateOfBirth: req.session.user.lastName,
      email: req.session.user.email,
      signIn: (attendance.loginTime ? attendance.loginTime : 'not logged in'),
      signOut: (attendance.logoutTime ? attendance.logoutTime : 'not logged out'),
    });
  });
export default hrAttendanceRouter;
