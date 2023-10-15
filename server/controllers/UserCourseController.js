const { UserCourse } = require('../models');

class UserCourseController {
  static async inputUserCourse (req, res) {
    try {
      const { studentid, courseid, finishdate } = req.body;

      let result = await UserCourse.create({
        studentid: Number(studentid),
        courseid: Number(courseid),
        finishdate: new Date(finishdate)
      });

      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = UserCourseController;