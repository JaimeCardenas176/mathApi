const express = require('express');
const cookieParser = require('cookie-parser');

const arrays = require('./routes/arrays');
const fibonacci = require('./routes/fibonacci');
const operations = require('./routes/operations');
const PREFIX = '/mathApi/v1/';

const { logErrors, wrapErrors, errorHandler} = require('./utils/middlewares/errorHandler');
const notFoundHandler = require('./utils/middlewares/notFoundHandler');

const app = express();

app.use(cookieParser())
app.use(express.json());

app.use(`${PREFIX}`, arrays);
app.use(`${PREFIX}`, fibonacci);
app.use(`${PREFIX}`, operations);

app.use(notFoundHandler);

//los middlewares de error tienen que ir tab al final (las rutas tambien son middlewares)
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

module.exports = app;
