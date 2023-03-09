import { Router } from 'express';
import LoginAuthentication from '../../services/login-authentication.js';
import db from '../../models/index.cjs';

const hrViewUserListRouter = Router();
hrViewUserListRouter.route('/users')
  .get(async (req, res, next) => {
    const users = await db.users.findAll({
      where: {
        userId: req.session.user.id,
      },
      attributes: ['id', 'firstName', 'lastName'],
    });
    res.render('hr-view-users', {
      firstName: req.session.user.firstName,
      lastname: req.session.user.lastName,
      id: req.session.user.id,
      userArray: users,
    });
  });
export default hrViewUserListRouter;
