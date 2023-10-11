const { User } = require('../models');

class auth {
  static async registerInput (req, res) {
    try {
      console.log('request body:', req.body);
      const { fullname, image, email, password, usertype } = req.body;
      console.log('image:', image);

      let result = await User.create({
        fullname, image, email, password, usertype
      });

      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = auth;