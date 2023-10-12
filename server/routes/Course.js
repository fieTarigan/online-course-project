const router = require('express').Router();
const { CourseController } = require('../controllers');

router.get('/', CourseController.index);
router.get('/:id', CourseController.getCourseById);
router.post('/create', CourseController.createCourse);
router.put('/update/:id', CourseController.editCourse);
router.get('/delete/:id', CourseController.deleteCourse);


module.exports = router;
