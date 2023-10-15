const { Course, User } = require('../models');

class CourseController {
  static async index(req, res) {
    try {
      const courses = await Course.findAll(
        {
          include: {
            model: User,
            as: 'teacher',
            attributes: ['fullname', 'image'],
          },

        }
      );

      res.status(201).json(courses);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async getCourseById(req, res) {
    try {
      const id = +req.params.id;

      const courses = await Course.findByPk(id, {
        include: {
          model: User,
          as: 'teacher',
          attributes: ['fullname', 'image'],
        },
      });

      if (courses) {
        res.status(200).json(courses);
      } else {
        res.status(404).json({ message: 'Course not found' });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async createCourse(req, res) {
    try {
      const { name, desc, image, teacherid, publishdate, price, label } = req.body;

      if (!name || !desc || !teacherid || !publishdate || !price || !label) {
        res.status(400).json({ message: 'Semua bidang harus diisi' });
        return;
      }

      const newDate = new Date(publishdate);

      if (isNaN(newDate.getTime())) {
        res.status(400).json({ message: 'Tanggal tidak valid' });
        return;
      }

      const newFormattedDate = newDate.toISOString().split('T')[0];

      const courses = await Course.create({
        name,
        desc,
        image,
        teacherid,
        publishdate: newFormattedDate,
        price,
        label
      });

      res.status(201).json(courses);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async editCourse(req, res) {
    try {
      const id = +req.params.id;

      const { name, desc, image, teacherid, publishdate, price, label } = req.body;

      const newDate = new Date(publishdate);

      if (isNaN(newDate.getTime())) {
        return res.status(400).json({ message: 'Invalid Data Format' });
      }


      const newFormattedDate = newDate.toISOString().split('T')[0];


      const courses = await Course.update({
        name, desc, image, teacherid, publishdate: newFormattedDate, price, label
      }, {
        where: { id }
      });
      if (courses[0] === 1) {
        res.status(200).json({ message: 'Course Updated' });
      } else {
        res.status(404).json({ message: 'Something Wrong' })
      }
    } catch (error) {
      console.log('Something went wrong')
      res.status(500).json(error);
    }
  }

  static async deleteCourse(req, res) {
    try {
      const id = +req.params.id;

      const courses = await Course.destroy({
        where: { id }
      });

      if (courses === 1) {
        console.log(courses)
        res.status(201).json({ message: 'Course Deleted!' });
      } else {
        res.status(404).json({ message: 'Something Wrong' });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = CourseController;