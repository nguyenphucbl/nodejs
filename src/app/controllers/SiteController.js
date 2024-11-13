class SiteController {
  // NOTE [GET] /
  index(req, res) {
    res.render('home');
  }
  // NOTE [GET] /search
  search(req, res) {
    res.render('search');
  }
}

export default new SiteController();
