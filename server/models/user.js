'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Course, {
        through: models.UserCourse,
        foreignKey: "studentid"
      });
      User.hasOne(models.Course, {
        foreignKey: "teacherid"
      });
    }
  }
  User.init({
    fullname: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Fullname cannot be empty."
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
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Email cannot be empty."
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Password cannot be empty."
        }
      }
    },
    usertype: {
      type: DataTypes.ENUM('admin', 'teacher', 'student'),
      validate: {
        notEmpty: {
          message: "User type cannot be empty."
        }
      }
    },
  }, {
    hooks: {
      beforeValidate: (user, options) => {
        if (user.image === '') {
          user.image = "https://cdn.icon-icons.com/icons2/1812/PNG/96/4213460-account-avatar-head-person-profile-user_115386.png";
        }
      },
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};