var express = require('express');
var router = express.Router();

const PREFIX = 'arrays/'
const arraysServices = require('../services/arrays');

/* GET users listing. */
router.get(`${PREFIX}binary-search`, arraysServices.maxValueInHillArray);

module.exports = router;
