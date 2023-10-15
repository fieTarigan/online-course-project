import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const CoursePage = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/courses/')
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.error('Error fetching course data:', error);
      });
  }, []);

  const navigateToDetail = (courseId) => {
    navigate(`/courses/${courseId}`);
  };

  return (
    <>
      <div className='course-page container'>
        <h1>All Courses</h1>
        <div className='course-list' style={{ display: 'flex', flexWrap: 'wrap', paddingTop: "50px" }}>
          {courses.map((course) => (
            <div className='homepage-course-item' key={course.id} style={{ flex: '0 0 calc(33.33% - 20px)', margin: '10px', cursor: 'pointer' }} onClick={() => navigateToDetail(course.id)}>
              <img className='homepage-course-item-image' src={course.image} alt={course.name} />
              <div className='homepage-course-item-body'>
                <div className='homepage-course-item-body-top'>
                  <div className='homepage-course-item-body-top-left'>
                    {course.label}
                  </div>
                  <div className='homepage-course-item-body-top-right'>
                    ${course.price}
                  </div>
                </div>
                <div className='homepage-course-item-body-bottom' style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2, overflow: 'hidden' }}>
                  {course.name}
                </div>
              </div>
              <div className='homepage-course-item-footer'>
                <div className='homepage-course-item-footer-left'>
                  {course.teacher && (
                    <React.Fragment>
                      <img
                        src={course.teacher.image}
                        alt={course.teacher.fullname}
                        width='25px'
                        style={{ borderRadius: "50%", border: "none" }} // Menghilangkan garis border
                      />
                      <div className='homepage-course-item-footer-left-text'>
                        {course.teacher.fullname}
                      </div>
                    </React.Fragment>
                  )}
                </div>

                <div className='homepage-course-item-footer-right'>
                  <img src='User.svg' alt='' width='20px' />
                  <div className='homepage-course-item-footer-right-text'>
                    {course.studentsEnrolled}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CoursePage;
