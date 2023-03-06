import { Router } from 'express';
import LoginAuthentication from '../../services/login-authentication.js';
import db from '../../models/index.cjs';

const hrViewUserListRouter = Router();
hrViewUserListRouter.route('/users')
  .get(async (req, res, next) => {
    const employee = await db.users.findAll({
      where: {
        userId: req.session.user.id,
      },
    });
  });
export default hrViewUserListRouter;
