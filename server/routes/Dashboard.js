const dashboardRouter = require('express').Router();
const { DashboardController } = require('../controllers');

dashboardRouter.get('/', DashboardController.index);
// dashboardRouter.get('/:id', DashboardController.index);

module.exports = dashboardRouter;