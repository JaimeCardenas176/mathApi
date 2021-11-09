const express = require('express');
const router = express.Router();

const mathAPIRoutes = require('./mathAPI.routes');

// Petición base.
router.get('/', (req, res, next) => {
   return res.send('Hello World!');
});

// Routing
router.use('/mathApi/v1', mathAPIRoutes);

module.exports = router;