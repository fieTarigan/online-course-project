const { User, UserCourse, Course } = require('../models');
// const { Op } = require('sequelize');
const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;

class DashboardController {
  static async index (req, res) {
    try {
      const token = req.query.token;
      
      if ( token === null || token === 'false') {
        res.status(401).json({ message: 'You must login first.' });
      }

      const decoded = jwt.verify(token, secretKey);

      const user = await User.findByPk(decoded.id, {
        attributes: {
          exclude: ['password']
        }
      });
      // console.log(user);

      if (user.usertype === 'student') {
        const teachers = await User.findAll({
          where: {usertype: 'teacher'},
          attributes: {
            exclude: ['password']
          }
        });

        let nCourseActive = 0, nCourseFinished = 0;
        let usercourses = await UserCourse.findAll({
          where: { studentid: user.id },
          include: Course
        });
        
        let coursesid = usercourses.map((usercourse) => {
          usercourse.Course = JSON.parse(JSON.stringify(usercourse.Course));

          usercourse.finishdate ? nCourseFinished++ : nCourseActive++ ;

          const teacherid = usercourse.Course.teacherid;
          const teacher = teachers.filter((t) => t.id === teacherid);

          // console.log('iterasi: ', teacher[0].fullname);

          usercourse.Course.teachername = teacher[0].fullname;
          usercourse.Course['teacherbio'] = teacher[0].bio;
          usercourse.Course['teacherimage'] = teacher[0].image;
          usercourse.Course['teacheremail'] = teacher[0].email;

          return usercourse.Course;
        })

        let teachersid = usercourses.map((usercourse) => usercourse.Course.teacherid);

        res.status(200).json({
          user: user,
          nCourseActive: nCourseActive,
          nCourseFinished: nCourseFinished,
          nTeacher: new Set(teachersid).size,
          courses: coursesid,
        });


        
      } else if (user.usertype === 'teacher') {
        let nStudent = 0;
        let courses = await Course.findAll({
          where: { teacherid: user.id },
          include: [{ model: User, through: UserCourse }]
        });
        courses = JSON.parse(JSON.stringify(courses));

        for (let course of courses) {
          nStudent = nStudent + course.Users.length;
          course['nstudent'] = course.Users.length;
        }

        res.status(200).json({
          user: user,
          nCourse: courses.length,
          nStudent: nStudent,
          courses: courses
        });








        
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