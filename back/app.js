const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const fileUpload = require('express-fileupload');

const usuariosRouter = require('./routes/usuariosRouter');
const parceirosRouter = require('./routes/parceirosRouter');
const loginRouter = require('./routes/loginRouter');
const produtosRouter = require('./routes/produtosRouter');
const Usuario = require('./classes/Usuario');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {

  //let allowedOrigins = ["https://easeshopp.com.br", "https://easeshopp.com.br:82"];
  let allowedOrigins = ["http://localhost:3000", "http://localhost:3002"];

  let origin = req.headers.origin;
  if(allowedOrigins.indexOf(origin) > -1) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
  res.header("Allow", "GET,HEAD,PUT,PATCH,POST,DELETE");

  //pegar usuarios automaticamente
  Usuario.postMultiAuto();

  next();
});

app.use(fileUpload({
  useTempFiles: true,
  tempFileDir : '../back/public/tmp/'
}));

app.use('/usuarios', usuariosRouter);
app.use('/parceiros', parceirosRouter);
app.use('/login', loginRouter);
app.use('/produtos', produtosRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
