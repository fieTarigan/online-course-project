const { User } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();


class AuthController {

  static async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: {
          email
        },
      });

      if (user) {
        const hashPassword = await bcrypt.compare(password, user.password);

        if (hashPassword) {
          const secretKey = process.env.SECRET_KEY;
          const token = jwt.sign(
            {
              id: user.id,
              email: user.email
            },
            secretKey
          );

          res.status(200).json({
            message: 'Login successful', token
          });
        } else {
          res.status(401).json({
            message: 'Invalid password'
          });
        }
      } else {
        res.status(401).json({
          message: 'Email not found'
        })
      }
    } catch (error) {
      res.status(500).json(error)
    }
  }

}

module.exports = AuthController;