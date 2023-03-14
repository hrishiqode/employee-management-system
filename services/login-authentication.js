import db from '../models/index.cjs';

export default class LoginAuthentication {
  static async employeeCheck(req, res, next) {
    console.log(req.session.user.role.name);
    console.log('no');
    if (req.session.user.role.name === 'employee') {
      next();
    } else {
      res.redirect('/hr');
    }
  }

  static authCheck(req, res, next) {
    if (req.session && req.session.user) {
      next();
    } else {
      console.log('not logged in');
      res.redirect('/login');
    }
  }

  static async hrCheck(req, res, next) {
    console.log('yup');
    if (req.session.user.role.name === 'hr') {
      next();
    } else {
      res.redirect('/employee');
    }
  }
}
