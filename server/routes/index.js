const router = require('express').Router();
const authRouter = require('./Auth');
const dashboardRouter = require('./Dashboard');

router.use('/users', authRouter);
router.use('/dashboard', dashboardRouter);


module.exports = router;
