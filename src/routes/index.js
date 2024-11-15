import newsRouter from './news.js';
import siteRouter from './site.js';
import courseRouter from './courses.js';
import routeCart from './cart.js';
import meRoute from './me.js';
function route(app) {
  app.use('/me', meRoute);
  app.use('/news', newsRouter);
  app.use('/courses', courseRouter);
  app.use('/cart', routeCart);
  app.use('/', siteRouter);
}

export default route;
