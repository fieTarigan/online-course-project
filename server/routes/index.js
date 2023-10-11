const routes = require('express').Router();
const authRoutes = require('./Auth');

// route.get('/', (req, res) => {
//   res.json({
//     message: "Hello world"
//   })
// })

routes.use('/users', authRoutes);

module.exports = routes;