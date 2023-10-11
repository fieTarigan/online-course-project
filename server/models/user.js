'use strict';
const {
  Model, Op
} = require('sequelize');
const bcrypt = require('bcrypt');
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
      type: DataTypes.TEXT,
      validate: {
        notEmpty: {
          message: "Email cannot be empty."
        },
        isEmail: {
          args: true,
          msg: "Input value must be an email"
        },
        isUnique: function (value, next) {
          User.findOne({
            where: {
              email: value,
              id: {[Op.ne]: this.id}
            }
          }).then((result) => {
            if (result === null) {
              return next();
            } else {
              return next('Choose another email. This email already in use.');
            }
          }).catch((error) => {
            return next();
          })
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
        },
        isIn: {
          args: [['admin', 'teacher', 'student']],
          msg: "User type must be Teacher or Student"
        }
      }
    },
  }, {
    hooks: {
      beforeValidate: (user, options) => {
        if (user.image === '' || user.image === null || user.image === undefined) {
          user.image = "https://cdn.icon-icons.com/icons2/1812/PNG/96/4213460-account-avatar-head-person-profile-user_115386.png";
        }
      },
      beforeCreate: (user, options) => {
        user.password = bcrypt.hashSync(String(user.password), 5);
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};