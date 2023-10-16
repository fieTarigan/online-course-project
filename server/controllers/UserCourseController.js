const { UserCourse } = require('../models');

class UserCourseController {
  static async inputUserCourse(req, res) {
    try {
      const { studentid, courseid, finishdate } = req.body;

      let result = await UserCourse.create({
        studentid: Number(studentid),
        courseid: Number(courseid),
      });

      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async completeUserCourse(req, res) {
    try {
      const { studentid, courseid } = req.body;

      const existingEnrollment = await UserCourse.findOne({
        where: { studentid: Number(studentid), courseid: Number(courseid) }
      });

      if (!existingEnrollment) {
        res.status(404).json({ error: 'Course not found' });
      } else if (existingEnrollment.finishdate) {
        res.status(400).json({ error: 'Course already completed' });
      } else {
        const result = await UserCourse.update(
          { finishdate: new Date() },
          {
            where: { studentid: Number(studentid), courseid: Number(courseid) }
          });
        res.status(200).json(result);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = UserCourseController;