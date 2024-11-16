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
  // NOTE [GET] /courses/:id/edit
  async edit(req, res, next) {
    const course = await CourseModel.findById(req.params.id).lean();
    res.render('courses/edit', { course });
  }
  //NOTE [PUT] /courses/:id
  update(req, res, next) {
    CourseModel.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect('/me/stored/courses'))
      .catch(next);
  }
  // NOTE [DELETE] /courses/:id
  destroy(req, res, next) {
    CourseModel.deleteOne({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }
}

export default new CourseController();
