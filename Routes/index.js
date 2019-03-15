var express = require('express');
var router = express.Router();

// importing the application routes
var memberRoutes = require('./memberRoutes')
var testingRoutes = require('./testingRoutes')
var wordRoutes = require('./wordRoutes')

//invoking all the application routes
router.use('/account', memberRoutes);
router.use('/test', testingRoutes);
router.use('/word', wordRoutes);

// exporting the application routes
module.exports = router;