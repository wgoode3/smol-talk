const express = require('express');
const path = require('path');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// logging... not sure if needed
app.use(require('morgan')('dev'));
// cookies... not sure if needed
app.use(require('cookie-parser')());

// load up the db here
require("./config/sequelize.config");

// default routes go here!
app.use('/', require('./routes/index'));

// handle various errors here
require("./config/errors.config")(app);

module.exports = app;
