'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserCourse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserCourse.belongsTo(models.User, {
        foreignKey: "studentid"
      });
      UserCourse.belongsTo(models.Course, {
        foreignKey: "courseid"
      });
    }
  }
  UserCourse.init({
    studentid: DataTypes.INTEGER,
    courseid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserCourse',
  });
  return UserCourse;
};