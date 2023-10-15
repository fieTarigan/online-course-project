require('dotenv').config();
const { User } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const secretKey = process.env.SECRET_KEY;

class AuthController {
  static async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });

      if (user) {
        const hashPassword = await bcrypt.compare(password, user.password);

        if (hashPassword) {

          if (!secretKey) {
            return res.status(500).json({ message: 'Internal server error: Secret key is missing.' });
          }

          const token = jwt.sign(
            {
              id: user.id,
              email: user.email,
              userType: user.usertype
            },
            secretKey
          );

          res.status(200).json({
            message: 'Login successful',
            token,
            userType: user.usertype
          });
        } else {
          res.status(401).json({ message: 'Invalid password' });
        }
      } else {
        res.status(401).json({ message: 'Email not found' });
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

  static getId(req, res) {
    try {
      console.log('masuk', req.query);
      const token = req.query.token;

      if (token === null || token === 'false') {
        res.status(401).json({ message: 'You must login first.' });
      }

      const decoded = jwt.verify(token, secretKey);
      console.log('decoded:', decoded);

      res.status(200).json(decoded);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async editProfile(req, res) {
    try {
      const id = +req.params.id;

      const { fullname, image } = req.body;

      const user = await User.update({ fullname, image }, {
        where: { id }
      });

      if (user[0] === 1) {
        res.status(201).json({ message: 'Profile updated' });
      } else {
        res.status(404).json({ message: 'Update failed' });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async editPassword(req, res) {
    try {
      const id = +req.params.id;

      const { oldpassword, newpassword } = req.body;

      const user = await User.findOne({
        where: { id }
      });

      const checkPass = await bcrypt.compare(oldpassword, user.password);
      console.log('check:', checkPass);
      if (checkPass) {
        const updatedUser = await User.update({
          password: bcrypt.hashSync(newpassword, 5)
        }, {
          where: { id }
        });

        if (updatedUser[0] === 1) {
          res.status(201).json({ message: 'Password updated' });
        } else {
          res.status(404).json({ message: 'Update password failed' });
        }
      } else {
        res.status(404).json({ message: 'Old password is false' });
      }


    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = AuthController;