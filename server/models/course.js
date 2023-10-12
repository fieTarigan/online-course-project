'use strict';
const {
  Model, Op
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Course.belongsToMany(models.User, {
        through: models.UserCourse,
        foreignKey: "courseid"
      });
      Course.belongsTo(models.User, {
        foreignKey: "teacherid"
      });
    }
  }
  Course.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Course name cannot be empty."
        },
        isUnique: function (value, next) {
          Course.findOne({
            where: {
              name: value,
              id: {[Op.ne]: this.id}
            }
          }).then((result) => {
            if (result === null) {
              return next();
            } else {
              return next('Choose another course name, it\'s already used.')
            }
          }).catch(() => {
            return next();
          })
        }
      }
    },
    desc: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Course description cannot be empty."
        }
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: true
      }
    },
    teacherid: DataTypes.INTEGER,
    publishdate: {
      type: DataTypes.DATE,
      allowNull: true,
      validate: {
        isDate: true
      }
    },
  }, {
    hooks: {
      beforeValidate: (course, options) => {
        if (! course.image) {
          course.image = "https://cdn.icon-icons.com/icons2/3782/PNG/512/lecture_trainer_teacher_training_course_education_person_presentation_icon_232053.png";
        }
        if (! course.publishdate) {
          course.publishdate = new Date();
        }
      },
    },
    sequelize,
    modelName: 'Course',
  });
  return Course;
};