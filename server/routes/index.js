const route = require('express').Router();

route.get('/', (req, res) => {
  res.json({
    message: "Hello world"
  })
})



module.exports = route;