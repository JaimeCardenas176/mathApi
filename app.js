const express = require('express');
const cookieParser = require('cookie-parser');

const arrays = require('./routes/arrays');
const fibonacci = require('./routes/fibonacci');
const operations = require('./routes/operations');
const PREFIX = '/mathApi/v1/';

const app = express();


app.use(cookieParser())

app.use(`${PREFIX}`, arrays);
app.use(`${PREFIX}`, fibonacci);
app.use(`${PREFIX}`, operations);


module.exports = app;
