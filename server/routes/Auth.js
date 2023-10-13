const express = require('express');
const authRouter = express.Router();
const { AuthController } = require('../controllers');

authRouter.post('/login', AuthController.login);
authRouter.post('/register', AuthController.registerInput);
authRouter.get('/getid', AuthController.getId);
authRouter.put('/updateprof/:id', AuthController.editProfile);
authRouter.put('/updatepwd/:id', AuthController.editPassword);

module.exports = authRouter;