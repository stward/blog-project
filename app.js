var express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    postRoutes = require('./routes/posts'),
    passport = require('passport'),
    session = require('express-session'),
    morgan = require('morgan'),
    flash = require('connect-flash'),
    uriUtil = require('mongodb-uri'),
    index = require('./routes/index');

var options = {
  server:  { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
};

var mongodbUri = process.env.MONGODB_URI || "mongodb://localhost/myBlog";
var mongooseUri = uriUtil.formatMongoose(mongodbUri);

mongoose.connect(mongooseUri, options);

// mongoose.connect("mongodb://localhost/myBlog");

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'))
app.use(session({secret: 'asdf'})) // session secret
app.use (passport.initialize())
app.use (passport.session())
app.use(flash())

require('./config/passport')(passport)
require('./routes/userAuth')(app, passport)

app.use('/', index);
app.use('/api/posts', postRoutes);

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
