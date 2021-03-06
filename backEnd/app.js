var createError = require('http-errors');
var express = require('express');
var path = require('path');
var connector = require('./database/mysql_connector');
var bodyParser = require('body-parser');
const cors = require('cors');

//var logger = require('morgan');

/* var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users'); */
var historyRouter = require('./routes/history');

var app = express();

app.use(cors());



// view engine setup
/* app.set('views', path.join(__dirname, 'views')); */
/* app.set('view engine', 'jade'); */

//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extends: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

/* app.use('/', indexRouter);
app.use('/users', usersRouter); */
app.use('/history', historyRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: err })
});

connector.initMysql();
module.exports = app;
