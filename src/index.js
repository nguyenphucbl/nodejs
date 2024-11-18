import express from 'express';
import { engine } from 'express-handlebars';
import methodOverride from 'method-override';
import morgan from 'morgan';
import * as db from './config/db/index.js';
import route from './routes/index.js';
import { sortMiddleware } from './app/middlewares/SortMiddleware.js';
const app = express();
const port = 3000;
app.use(methodOverride('_method'));
app.use(express.static('src/public'));
// NOTE connect to DB
db.connect();
// NOTE template engine
app.engine(
  '.hbs',
  engine({
    extname: '.hbs',
    helpers: {
      increment: value => value + 1,
      sortable: (field, sort) => {
        const sortType = field === sort.column ? sort.type : 'default';
        const icons = {
          default: 'fa-sort',
          asc: 'fa-sort-up',
          desc: 'fa-sort-down',
        };
        const types = {
          default: 'asc',
          asc: 'desc',
          desc: 'asc',
        };
        const type = types[sortType];
        const icon = icons[sortType];
        return `<a href="?_sort&column=${field}&type=${type}"><i class="fa-solid ${icon}"></i></a>`;
      },
    },
  }),
);
app.set('view engine', '.hbs');
app.set('views', 'src/resources/views');

// NOTE middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('combined'));

app.use(sortMiddleware);
// NOTE route init
route(app);

app.listen(port, () => {
  console.log(` app listening on port ${port}`);
});
