const courseRouter = require('express').Router();
const { 
  CourseController, UserCourseController 
} = require('../controllers');

courseRouter.post('/', CourseController.inputCourse);
courseRouter.post('/usercourse', UserCourseController.inputUserCourse);

module.exports = courseRouter;