import bodyParser from 'body-parser';
import { Router } from 'express';
import db from '../models/index.cjs';
import LoginAuthentication from '../services/login-authentication.js';

const loginRouter = Router();

loginRouter.route('/login')
  .all((req, res, next) => {
    if (req.session && req.session.user) {
      res.redirect('/');
    } else { next(); }
  })
  .get(async (req, res, next) => {
    res.render('login-form', { usernameError: '', passwordError: '' });
  })
  .all(bodyParser.json())
  .all(bodyParser.urlencoded())
  .post(async (req, res, next) => {
    // console.log;
    const resultedUser = await db.users.findOne({
      where: {
        username: req.body.username,
      },
    });
    if (resultedUser === null) { res.render('login-form', { usernameError: 'no such user', passwordError: '' }); } else if (resultedUser.password !== req.body.password) { res.render('login-form', { usernameError: '', passwordError: 'wrong password' }); } else {
      req.session.authenticated = true;
      req.session.user = resultedUser;
      console.log(resultedUser);
      res.redirect('/');
    }
  });
loginRouter.route('/')
  .all(LoginAuthentication.loginCheck);
export default loginRouter;
