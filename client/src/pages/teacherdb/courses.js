import React from 'react'
import editimg from '../../assets/edit_FILL0.png'
import deleteimg from '../../assets/delete_forever.png'
import axios from 'axios';

const Courses = (props) => {
  const { allCourses } = props;

  const handleDelete = async (id) => {
    try {
      console.log('client');
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
                    <a
                      href="/novels/update/<%= data.id %>"
                      style={{marginRight:"1vh"}}
                      // class="text-gray-400 hover:text-gray-100 mx-2"
                    >
                      <img src={editimg} alt='edit'/>
                    </a>
                    <button
                      onClick={() => handleDelete(course.id)}
                      style={{border:"0",backgroundColor:"transparent",margin:"0",padding:"0"}}
                      // class="text-gray-400 hover:text-gray-100 mx-2"
                    >
                      <img src={deleteimg} alt='delete'/>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            ))}
            
          </div>
    </>
  )
}

export default Courses