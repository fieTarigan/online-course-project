const dashboardRouter = require('express').Router();
const { DashboardController } = require('../controllers');

dashboardRouter.get('/', DashboardController.index);

module.exports = dashboardRouter;