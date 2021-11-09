var express = require('express');
var router = express.Router();

const operationService = require('../services/operations');

/* GET users listing. */
router.get(`/gcd/:number1/:number2`, operationService.greatestDivisor);

module.exports = router;