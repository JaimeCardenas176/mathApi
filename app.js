const express = require('express');
const cookieParser = require('cookie-parser');

//const { logErrors, wrapErrors, errorHandler} = require('./utils/middlewares/errorHandler');
//const notFoundHandler = require('./utils/middlewares/notFoundHandler');
const mathApiRouter = require('./routes');

const app = express();

app.use(cookieParser())
app.use(express.json());


//app.use(notFoundHandler);
app.use(mathApiRouter);

//los middlewares de error tienen que ir tab al final (las rutas tambien son middlewares)
//app.use(logErrors);
//app.use(wrapErrors);
//app.use(errorHandler);

module.exports = app;
