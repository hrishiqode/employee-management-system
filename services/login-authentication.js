import db from '../models/index.cjs';

export default class LoginAuthentication {
  static async loginCheck(req, res, next) {
    if (req.session && req.session.user) {
      const attendance = await db.attendances.findOne({
        where: {
          userId: req.session.user.id,
          date: new Date(),
        },
      });
      let loginTime;
      let logoutTime;
      if (attendance != null) {
        const { loginTime } = attendance;
        const { logoutTime } = attendance;
      }
      if (!loginTime) { loginTime = 'not signed in'; }
      if (!logoutTime) { logoutTime = 'not signed out'; }
      res.render('employee-dashboard', {
        id: req.session.user.id,
        firstName: req.session.user.firstName,
        lastName: req.session.user.lastName,
        dateOfBirth: req.session.user.lastName,
        email: req.session.user.email,
        signIn: loginTime,
        signOut: logoutTime,
      });
    } else { res.redirect('/login'); }
  }
}
