import express from 'express';
import morgan from 'morgan';
import { engine } from 'express-handlebars';
import route from './routes/index.js';
const app = express();
const port = 3000;
app.use(express.static('src/public'));

// NOTE template engine
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', 'src/resources/views');

// NOTE middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('combined'));

// NOTE route init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
