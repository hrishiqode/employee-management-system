import bodyParser from 'body-parser';
import { Router } from 'express';
import db from '../../models/index.cjs';

const hrViewAttendanceRouter = Router();

hrViewAttendanceRouter.route('/attendance/:page')
  .get(async (req, res, next) => {
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
    console.log(req.session.user.firstName);
    res.render('hr-attendance', {
      attendances: attendancesArray,
      page: parseInt(req.params.page),
      firstName: req.session.user.firstName,
      lastName: req.session.user.lastName,
    });
  });

export default hrViewAttendanceRouter;
