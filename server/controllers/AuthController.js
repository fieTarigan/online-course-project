require('dotenv').config();
const { User } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

class AuthController {
  static async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: {
          email
        }
      });

      if (user) {
        const hashPassword = await bcrypt.compare(password, user.password);

        if (hashPassword) {
          const secretKey = process.env.SECRET_KEY;

          if (!secretKey) {
            return res.status(500).json({ message: 'Internal server error: Secret key is missing.' });
          }

          const token = jwt.sign(
            {
              id: user.id,
              email: user.email
            },
            secretKey
          );

          res.status(200).json({
            message: 'Login successful',
            token
          });
        } else {
          res.status(401).json({
            message: 'Invalid password'
          });
        }
      } else {
        res.status(401).json({
          message: 'Email not found'
        });
      }
    } catch (error) {
      console.error('Login Error:', error);
      res.status(500).json({ message: 'An internal server error occurred.' });
    }
  }


  static async registerInput(req, res) {
    try {
      // console.log('request body:', req.body);
      const { fullname, image, email, password, usertype } = req.body;
      // console.log('image:', image);

      let result = await User.create({
        fullname, image, email, password, usertype
      });

      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = AuthController;