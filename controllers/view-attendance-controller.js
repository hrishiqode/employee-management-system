import bodyParser from 'body-parser';
import { Router } from 'express';
import db from '../models/index.cjs';

const viewAttendanceRouter = Router();

viewAttendanceRouter.route('/attendance/:page')
  .all(async (req, res, next) => {
    if (req.session && req.session.user) {
      next();
    } else {
      res.redirect('/login');
    }
  })
  .get(async (req, res, next) => {
    console.log('yelop');
    if (req.params.page <= 0) {
      req.params.page = 1;
    }
    const attendancesArray = await db.attendances.findAll(
      {
        limit: 5,
        order: [['date', 'DESC']],
        offset: (req.params.page - 1) * 5,
      },
    );
    res.render('employee-attendance', { attendances: attendancesArray, page: parseInt(req.params.page) });
  });

export default viewAttendanceRouter;
