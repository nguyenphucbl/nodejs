import CourseModel from '../models/Course.js';

class SiteController {
  // NOTE [GET] /
  async index(req, res, next) {
    try {
      const courses = await CourseModel.find({}).lean();

      res.render('home', { courses });
    } catch (err) {
      next(err);
    }
  }
  // NOTE [GET] /search
  search(req, res) {
    res.render('search');
  }
}

export default new SiteController();
