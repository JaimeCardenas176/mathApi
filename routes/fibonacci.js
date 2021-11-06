var express = require('express');
var router = express.Router();

const PREFIX = 'fibonacci/'
const fibonacciService = require('../services/fibonacci');

/* GET users listing. */
router.get(`${PREFIX}secuential/:number`, fibonacciService.fibonacciS);
router.get(`${PREFIX}recursion/:number`, fibonacciService.fibonacciR);
router.get(`${PREFIX}dynamic/:number`, fibonacciService.fibonacciDP);

module.exports = router;