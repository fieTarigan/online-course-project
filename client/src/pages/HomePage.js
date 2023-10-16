import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Footer from '../components/Footer';

const HomePage = () => {
  const [labels, setLabels] = useState([]);
  const [courses, setCourses] = useState([]);
  const [teachers, setTeachers] = useState([]);

  const getAllData = async () => {
    try {
      let dbdata = await axios({
        method: "GET",
        url: "http://localhost:3000/api"
      });
      // console.log(dbdata.data);

      setLabels(dbdata.data.labels);
      setCourses(dbdata.data.newCourses);
      setTeachers(dbdata.data.newTeachers);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <>
      {/* banner */}
      <div style={{ textAlign: "right" }}>
        <div style={{ display: "inline-flex", paddingLeft: "0", justifyContent: "flex-end", alignItems: "center", gap: "4.5rem" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "2.5rem", maxWidth: "648px", textAlign: "left" }}>
            <div style={{ color: "var(--gray-900, #1D2026)", fontFamily: "Inter", fontSize: "4.5rem", fontStyle: "normal", fontWeight: 600, lineHeight: "4.625rem", letterSpacing: "-0.09rem" }}>
              Learn with expert anytime anywhere
            </div>
            <div style={{ color: "var(--gray-700, #4E5566)", fontFamily: "Inter", fontSize: "1.5rem", fontStyle: "normal", fontWeight: 400, lineHeight: "2rem" }}>
              Our mision is to help people to find the best course online and learn with expert anytime, anywhere.
            </div>

            <div>
              {
                localStorage.getItem('isLoggedIn') === 'true' ? (
                  <></>) : (
                  <Link to='/register' style={{ borderWidth: "0", borderRadius: "1rem", padding: "1rem 2rem", backgroundColor: "var(--primary-500, #FF6636)", color: "var(--gray-white, #FFF)", fontFamily: "Inter", fontSize: "1.125rem", fontStyle: "normal", fontWeight: 600, textDecoration: "none" }}>
                    Create Account
                  </Link>)
              }

            </div>
          </div>
          <div>
            <img src='images.png' alt='' style={{ maxHeight: "57.2vh" }} />
          </div>
        </div>
      </div>
      {/* top categories */}
      <div className='homepage-category'>
        <div className='homepage-category-title'>
          Top Categories
        </div>
        <div className='homepage-category-body'>
          {labels.map((label) => (
            <div className='homepage-category-item'>
              <div>
                <img src='Cpu.png' alt='' style={{ maxHeight: "32px" }} />
              </div>
              <div className='homepage-category-item-label'>
                <div className='homepage-category-item-label-title'>
                  {label.label}
                </div>
                <div className='homepage-category-item-label-content'>
                  {label.n_labels} Courses
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div className='homepage-category-browse'>
          <div className='homepage-category-browse-text'>
            We have more category.
          </div>
          <Link to='/courses' className='homepage-category-browse-button' style={{textDecoration:"none"}} >
            Browse All
          </Link>
        </div> */}
      </div>
      {/* top courses */}
      <div className='homepage-course'>
        <div className='homepage-course-title'>
          Top Courses
        </div>
        <div className='homepage-course-body'>
          {courses.map((course) => (
            <div className='homepage-course-item'>
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
                  <img src={course.teacherimage} alt='' width='25px' style={{ borderRadius: "50%" }} />
                  <div className='homepage-course-item-footer-left-text'>
                    {course.teachername}
                  </div>
                </div>
                <div className='homepage-course-item-footer-right'>
                  <img src='User.svg' alt='' width='20px' />
                  <div className='homepage-course-item-footer-right-text'>
                    {course.nstudent}
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
        <div className='homepage-course-browse'>
          <Link to='/courses' className='homepage-category-browse-button' style={{ textDecoration: "none", padding: "1vh" }} >
            Browse All Courses
          </Link>
        </div>
      </div>
      {/* top instructor */}
      <div className='homepage-instructor'>
        <div className='homepage-instructor-title'>
          Top Instructors
        </div>
        <div className='homepage-instructor-body'>
          {teachers.map((teacher) => (
            <div className='homepage-instructor-item'>
              <img className='homepage-instructor-item-image' src={teacher.image} alt='' />
              <div className='homepage-instructor-item-body'>
                <div className='homepage-instructor-item-body-top'>
                  {teacher.fullname}
                </div>
                <div className='homepage-instructor-item-body-bottom'>
                  {teacher.bio}
                </div>
              </div>
              <div className='homepage-instructor-item-footer'>
                <div className='homepage-instructor-item-footer-left'>
                  <img src='online-learning.png' alt='' width='25px' style={{ borderRadius: "50%" }} />
                  <div className='homepage-instructor-item-footer-left-text'>
                    {teacher.ncourse} courses
                  </div>
                </div>
                {/* <div className='homepage-instructor-item-footer-right'>
                  <img src='User.svg' alt='' width='20px'/>
                  <div className='homepage-instructor-item-footer-right-text'>
                    265.7K
                  </div>
                </div> */}
              </div>
            </div>
          ))}

        </div>
      </div>
      <Footer />
    </>
  )
}

export default HomePage