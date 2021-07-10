const express = require('express');
const userRoutes = require('./user.route');
const examRoutes = require('./exam.route');
const invigilatorRoutes = require('./invigilator.route');
const courseRoutes = require('./course.route');


const router = express.Router();

router.use('/user', userRoutes);
router.use('/exam', examRoutes);
router.use('/invigilator', invigilatorRoutes);
router.use('/course', courseRoutes);

module.exports = router;
