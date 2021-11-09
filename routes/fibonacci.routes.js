var express = require('express');
var router = express.Router();

const fibonacciService = require('../services/fibonacci');

/* GET users listing. */
router.get(`/sequential/:number`, fibonacciService.fibonacciS);
router.get(`/recursion/:number`, fibonacciService.fibonacciR);
router.get(`/dynamic/:number`, fibonacciService.fibonacciDP);

module.exports = router;