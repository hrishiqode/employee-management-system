import bodyParser from 'body-parser';
import { Router } from 'express';
import db from '../models/index.cjs';

const loginRouter = Router();

loginRouter.route('/login')
  .all(async (req, res, next) => {
    if (req.session && req.session.user) { res.send(req.session.user); }
    next();
  })
  .get(async (req, res, next) => {
    res.render('login-form', { usernameError: '', passwordError: '' });
  })
  .all(bodyParser.json())
  .all(bodyParser.urlencoded())
  .post(async (req, res, next) => {
    // console.log;
    const resultedUser = await db.user.findOne({
      where: {
        username: req.body.username,
      },
    });
    if (resultedUser === null) { res.render('login-form', { usernameError: 'no such user', passwordError: '' }); } else if (resultedUser.password !== req.body.password) { res.render('login-form', { usernameError: '', passwordError: 'wrong password' }); } else {
      req.session.authenticated = true;
      req.session.user = resultedUser;
      res.send(resultedUser);
    }
  });
export default loginRouter;
