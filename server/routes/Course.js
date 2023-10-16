const courseRouter = require('express').Router();
const {
  CourseController, UserCourseController
} = require('../controllers');


courseRouter.get('/', CourseController.index);
courseRouter.get('/:id', CourseController.getCourseById);
courseRouter.post('/create', CourseController.createCourse);
courseRouter.put('/update/:id', CourseController.editCourse);
courseRouter.get('/delete/:id', CourseController.deleteCourse);

// courseRouter.post('/', CourseController.inputCourse);
courseRouter.post('/usercourse', UserCourseController.inputUserCourse);
courseRouter.post('/complete', UserCourseController.completeUserCourse);

module.exports = courseRouter;