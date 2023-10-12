const { User, UserCourse, Course } = require('../models');

class DashboardController {
  static async index (req, res) {
    try {
      const token = localStorage.getItem('token_login');

      if (! token) {
        res.status(401).json({
          message: 'You must login first.'
        });
      }

      const user = await User.findByPk(token.id);

      // // Kode ini untuk tes di postman
      // const { id } = req.params;
      // console.log('id: ', id);
      // const user = await User.findByPk(id);
      // console.log('user: ', user.toJSON());

      if (user.usertype === 'student') {
        const courses = await UserCourse.findAll({
          where: {
            studentid: user.id
          },
          include: Course
        });

        res.status(200).json(courses);
      } else if (user.usertype === 'teacher') {
        const courses = await Course.findAll({
          where: {
            teacherid: user.id
          },
          include: [{
            model: User,
            through: UserCourse
          }]
        });

        res.status(200).json(courses);
      } else if (user.usertype === 'admin') {
        const users = await User.findAll();
        const courses = await Course.findAll();
        const { count, rows } = await UserCourse.findAndCountAll();
        
        res.status(200).json({
          'Users': users,
          'Courses': courses,
          'nUsersByCourse': count,
          'rowUserByCourse': rows
        });
      }

    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = DashboardController;