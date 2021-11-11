const express = require('express');
const router = express.Router();

const arraysRouter = require("./arrays.routes");
const fibonacciRouter = require("./fibonacci.routes");
const operationsRouter = require("./operations.routes");

// Petición base.
router.get('/', (req, res, next) => {
   return res.send('Hello Maths!');
});

// Routing
router.use('/arrays', arraysRouter);
router.use('/fibonacci', fibonacciRouter);
router.use('/operations', operationsRouter);

module.exports = router;