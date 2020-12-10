/* eslint-disable import/no-unresolved */
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const db = require('./config/connection');
const path = require('path');

const ApiRouteUser = require('./app/routes/user.route');

db.connect();
const app = express();
const port = process.env.PORT || 8080;
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
// parse requets of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// set up route
app.engine('hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs'
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource', 'views'));

app.listen(port, () => {
  // eslint-disable-next-line prefer-template
  console.log('Our server is running on port:' + port);
});

app.get('/', (req, res) => {
  res.render('index'); // load the index.ejs file
});