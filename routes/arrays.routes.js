var express = require('express');
var router = express.Router();

const arraysServices = require('../services/arrays');

/* GET users listing. */
router.get(`/binary-search`, arraysServices.maxValueInHillArray);

module.exports = router;