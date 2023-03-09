import { Router } from 'express';

const logoutRouter = Router();

logoutRouter.route('/logout').all(async (req, res, next) => {
  if (req.session && req.session.user) {
    next();
  } else {
    res.redirect('/login');
  }
}).get(async (req, res) => {
  console.log('logout');
  req.session.destroy();
  res.redirect('/');
});

export default logoutRouter;
