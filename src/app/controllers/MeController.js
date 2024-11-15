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
}

export default new MeController();
