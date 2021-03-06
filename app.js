var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressHbs =require('express-handlebars')
var mongoose = require('mongoose');
var session =require('express-session')
var index = require('./routes/index');
var users = require('./routes/users');
var passport = require('passport');
var flash = require('connect-flash');
var validator = require('express-validator');


var app = express();
mongoose.connect(process.env.MONGODB_URI || 'mongodb://test:1234@localhost:27017/game');
require('./config/passport');
// view engine setup
app.engine('.hbs', expressHbs({
    extname: '.hbs',
    defaultLayout: 'layout',
    partialsDir: path.join(__dirname, 'views/partials'),
    layoutsDir: path.join(__dirname, 'views/Layouts')
  }));
app.set('view engine', '.hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(validator());
app.use(cookieParser());
app.use(flash());
app.use(session({
  secret: 'secrettexthere',
  saveUninitialized: true,
  resave: true,
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'gamehub')));
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req,res,next){
     res.locals.login = req.isAuthenticated();
  console.log(req.isAuthenticated())
     next();
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', index);
app.use('/users', users);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
