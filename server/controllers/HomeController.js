const { User, UserCourse, Course } = require('../models');
const sequelize = require('sequelize');

class HomeController {
  static async index (req, res) {
    try {
      const labels = await Course.findAll({
        attributes: ['label', [sequelize.fn('COUNT', sequelize.col('label')), 'n_labels']],
        group: 'label'
      });

      let nStudentPerCourse = await UserCourse.findAll({
        attributes: ['courseid', [sequelize.fn('COUNT', sequelize.col('courseid')), 'nStudent']],
        group: 'courseid'
      });
      nStudentPerCourse = JSON.parse(JSON.stringify(nStudentPerCourse));

      let teachers = await User.findAll({
        where: {usertype: 'teacher'},
        attributes: {
          exclude: ['password']
        }
      });
      teachers = JSON.parse(JSON.stringify(teachers));

      let nCoursePerTeacher = await Course.findAll({
        attributes: ['teacherid', [sequelize.fn('COUNT', sequelize.col('teacherid')), 'nCourse']],
        group: 'teacherid'
      });
      nCoursePerTeacher = JSON.parse(JSON.stringify(nCoursePerTeacher));  

      let courses = await Course.findAll({});
      courses = JSON.parse(JSON.stringify(courses));

      let newCourses = courses.map((course) => {
        const teacher = teachers.filter((t) => t.id === course.teacherid);
        const nStudent = nStudentPerCourse.filter((t) => t.courseid === course.id);
        
        course.teachername = teacher[0].fullname;
        course['teacherbio'] = teacher[0].bio;
        course['teacherimage'] = teacher[0].image;
        course['teacheremail'] = teacher[0].email;
        course['nstudent'] = nStudent[0] === undefined ? 0 : Number(nStudent[0].nStudent);

        return course;
      })

      let newTeachers = teachers.map((teacher) => {
        const nCourse = nCoursePerTeacher.filter((t) => t.teacherid === teacher.id);
        
        teacher['ncourse'] = nCourse[0] === undefined ? 0 : Number(nCourse[0].nCourse);

        return teacher;
      })

      res.status(200).json({
        labels: labels,
        nStudentPerCourse: nStudentPerCourse,
        // teachers: teachers,
        // courses: courses,
        newCourses: newCourses.sort((a,b) => b.nstudent - a.nstudent).slice(0,6),
        newTeachers: newTeachers.sort((a,b) => b.ncourse - a.ncourse).slice(0,5),
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = HomeController;