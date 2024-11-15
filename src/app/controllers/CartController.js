class CartController {
  show(req, res, next) {
    res.send('Cart detail');
  }
}

export default new CartController();
