const router = require('express').Router();
const authRouter = require('./Auth');
const dashboardRouter = require('./Dashboard');
const courseRouter = require('./Course');

router.use('/users', authRouter);
router.use('/dashboard', dashboardRouter);
router.use('/courses', courseRouter);


module.exports = router;