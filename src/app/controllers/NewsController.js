class NewsController {
  // NOTE [GET] /news
  index(req, res) {
    res.render('news');
  }
  // NOTE [GET] /news/:slug
  show(req, res) {
    res.send('NEWS DETAIL');
  }
}

export default new NewsController();
