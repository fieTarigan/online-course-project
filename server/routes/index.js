const routes = require('express').Router();
const dashboard = require('../controllers/dashboard');
const auth = require('../controllers/auth');

routes.get('/dashboard', dashboard.index);
routes.post('/register', auth.registerInput);

module.exports = routes;