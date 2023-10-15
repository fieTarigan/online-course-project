const { UserCourse } = require('../models');

class UserCourseController {
  static async inputUserCourse(req, res) {
    try {
      const { studentid, courseid } = req.body;

      // Cek apakah pengguna sudah terdaftar pada kursus
      const existingUserCourse = await UserCourse.findOne({
        where: {
          studentid: +studentid,
          courseid: +courseid
        }
      });

      if (existingUserCourse) {
        return res.status(400).json({ error: "Pengguna sudah terdaftar pada kursus ini." });
      }

      // Mendaftarkan pengguna ke kursus
      const result = await UserCourse.create({
        studentid: Number(studentid),
        courseid: Number(courseid)
      });

      res.status(201).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  }

}

module.exports = UserCourseController;