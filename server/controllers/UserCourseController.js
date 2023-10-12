const { UserCourse } = require('../models');

class UserCourseController {
  static async inputUserCourse (req, res) {
    try {
      const { studentid, courseid } = req.body;

      let result = await UserCourse.create({
        studentid: Number(studentid), courseid: Number(courseid)
      });

      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = UserCourseController;