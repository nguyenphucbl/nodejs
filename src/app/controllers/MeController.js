import CourseModel from '../models/Course.js';

class MeController {
  //NOTE [GET] /me/stored/courses
  storedCourses(req, res, next) {
    let courseQuery = CourseModel.find({}).lean();

    if (req.query.hasOwnProperty('_sort')) {
      courseQuery = courseQuery.sort({
        [req.query.column]: req.query.type,
      });
    }
    Promise.all([
      courseQuery,
      CourseModel.countDocumentsDeleted({ deletedAt: { $ne: null } }),
    ]).then(([courses, deletedCount]) => {
      res.render('me/storedCourses', { courses, deletedCount });
    });
  }
  //NOTE [GET] /me/stored/news
  storedNews(req, res) {
    res.render('me/storedNews');
  }
  //NOTE [GET] /me/trash/courses
  trashCourses(req, res, next) {
    CourseModel.findDeleted({ deletedAt: { $ne: null } })
      .lean()
      .then(courses => res.render('me/trashCourses', { courses }))
      .catch(next);
  }
}

export default new MeController();
