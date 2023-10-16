import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import editimg from '../../assets/edit_FILL0.png';
import deleteimg from '../../assets/delete_forever.png';
import axios from 'axios';
import VerticalFormModal from './verticalformmodal';

const Courses = (props) => {
  const { allCourses } = props;
  const [modalShow, setModalShow] = useState(false);
  const [theForm, setTheForm] = useState({
    id: 0,
    name: "",
    desc: "",
    image: "",
    price: 0,
    label: ""
  });

  const handleDelete = async (id) => {
    try {
      console.log('client delete');
      console.log('id: ', id);

      const response = await axios({
        method: "GET",
        url: `http://localhost:3000/api/courses/delete/${id}`
        // courseRouter.get('/delete/:id', CourseController.deleteCourse);
      });

      console.log(response.data);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (course) => {
    console.log('client edit');
    console.log('course: ', course);

    setTheForm({
      id: course.id,
      name: course.name,
      desc: course.desc,
      image: course.image,
      price: course.price,
      label: course.label
    });

    setModalShow(true);
  }

  const handleEditClose = (course) => {
    console.log('client edit');
    console.log('course: ', course);

    setTheForm({
      id: 0,
      name: "",
      desc: "",
      image: "",
      price: 0,
      label: ""
    });

    setModalShow(false);
  }

  return (
    <>
      <div className='studentdb-body-top'>
            Courses ({allCourses.length})
          </div>
          <div className='studentdb-body2-bottom'>
            {allCourses.map((course) => (
            <div className='homepage-course-item' key={course.id}>
              <img className='homepage-course-item-image' src={course.image} alt='' />
              <div className='homepage-course-item-body'>
                <div className='homepage-course-item-body-top'>
                  <div className='homepage-course-item-body-top-left'>
                    {course.label}
                  </div>
                  <div className='homepage-course-item-body-top-right'>
                    ${course.price}
                  </div>
                </div>
                <div className='homepage-course-item-body-bottom'>
                  {course.name}
                </div>
              </div>
              <div className='homepage-course-item-footer'>
                <div className='homepage-course-item-footer-left'>
                  <img src='User.svg' alt='' width='20px'/>
                  <div className='homepage-course-item-footer-left-text'>
                    {course.nstudent}
                  </div>
                </div>
                <div className='homepage-course-item-footer-right'>
                  {/* <img src='User.svg' alt='' width='20px'/> */}
                  <div className='homepage-course-item-footer-right-text'>
                    <Button
                      variant='primary'
                      onClick={() => handleEdit(course)}
                      style={{border:"0",backgroundColor:"transparent",margin:"0",padding:"0"}}
                      // class="text-gray-400 hover:text-gray-100 mx-2"
                    >
                      <img src={editimg} alt='edit'/>
                    </Button>
                    
                    <button
                      onClick={() => handleDelete(course.id)}
                      style={{border:"0",backgroundColor:"transparent",margin:"0",padding:"0",marginLeft:"1vh"}}
                      // class="text-gray-400 hover:text-gray-100 mx-2"
                    >
                      <img src={deleteimg} alt='delete'/>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            ))}
            <VerticalFormModal 
                      show={modalShow}
                      onHide={handleEditClose}
                      courseData={theForm}
                    />
          </div>
    </>
  )
}

export default Courses