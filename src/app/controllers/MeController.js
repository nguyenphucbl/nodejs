import CourseModel from '../models/Course.js';

class MeController {
  //NOTE [GET] /me/stored/courses
  storedCourses(req, res, next) {
    // res.render('me/storedCourses');
    CourseModel.find({})
      .lean()
      .then(courses => res.render('me/storedCourses', { courses }))
      .catch(next);
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
