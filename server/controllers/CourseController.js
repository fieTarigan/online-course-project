const { Course } = require('../models');

class CourseController {
  static async inputCourse (req, res) {
    try {
      const { name, desc, image, teacherid } = req.body;

      let result = await Course.create({
        name, desc, image, teacherid: Number(teacherid)
      });

      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = CourseController;