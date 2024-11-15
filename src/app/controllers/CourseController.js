import CourseModel from '../models/Course.js';

class CourseController {
  // NOTE [GET] /courses/:slug
  show(req, res, next) {
    CourseModel.findOne({ slug: req.params.slug })
      .lean()
      .then(course => {
        res.render('courses/courseDetail', { course });
      })
      .catch(next);
  }
  // NOTE [GET] /courses/create
  create(req, res) {
    res.render('courses/create');
  }
  // NOTE [POST] /courses/store
  store(req, res) {
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;

    const course = new CourseModel(req.body);
    course
      .save()
      .then(() => res.redirect('/'))
      .catch(error => {});
  }
}

export default new CourseController();
