const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const arrays = require('./routes/arrays');

const PREFIX = '/mathApi/v1/';

const app = express();


app.use(cookieParser())

app.use(`${PREFIX}`, arrays);
app.use(`${PREFIX}`, fibonacci);
app.use(`${PREFIX}`, operations);


module.exports = app;
