var express = require('express');
var router = express.Router();

const PREFIX = 'operations/'
const operationService = require('../services/operations');

/* GET users listing. */
router.get(`${PREFIX}gcd`, operationService.greatestDivisor);

module.exports = router;