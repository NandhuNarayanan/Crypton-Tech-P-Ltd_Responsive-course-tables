const express = require('express');
const router = express.Router()

const courseController = require('../controller/courseController.js');


router.get('/',courseController.getCourse)


module.exports = router
