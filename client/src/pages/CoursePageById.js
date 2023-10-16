import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CoursePageById = () => {
  const [course, setCourse] = useState({});
  const { id } = useParams();
  const token = localStorage.getItem('token_login');
  const studentid = token ? JSON.parse(atob(token.split('.')[1])).id : null;

  const [enrolled, setEnrolled] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {

    axios.get(`http://localhost:3000/api/courses/${id}`)
      .then((response) => {
        setCourse(response.data);
        checkEnrollmentStatus();
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  const checkEnrollmentStatus = () => {
    if (studentid) {
      axios.get(`http://localhost:3000/api/courses/usercourse/${studentid}/${id}`)
        .then((response) => {
          if (response.data && response.data.finishdate) {
            setEnrolled(true);
            setCompleted(true);
          } else if (response.data) {
            setEnrolled(true);
          }
        })
        .catch((error) => {
          console.error('Error checking enrollment status:', error);
        });
    }
  };

  const handleEnrollCourse = () => {
    if (studentid) {
      if (!enrolled) {
        axios.post('http://localhost:3000/api/courses/usercourse', {
          studentid,
          courseid: id,
          finishdate: null,
        })
          .then((response) => {
            console.log('Enrolled successfully:', response.data);
            setEnrolled(true);

            toast.success('Enrolled successfully');
          })
          .catch((error) => {
            console.error('Error enrolling in the course:', error);
          });
      }
    } else {
      console.error('Authentication error: Invalid or missing token');
    }
  };

  const handleCompleteCourse = () => {
    if (enrolled) {
      axios.post('http://localhost:3000/api/courses/complete', {
        studentid,
        courseid: id,
        finishdate: new Date(),
      })
        .then((response) => {
          console.log('Course completed successfully:', response.data);
          setCompleted(true);

          toast.success('Course completed successfully');
        })
        .catch((error) => {
          console.error('Error completing the course:', error);
        });
    }
  };

  return (
    <>
      <div className="container">
        <h2>Detail Kursus</h2>
        <div className="card mb-3">
          <h3 className="card-title">{course.name}</h3>
          <img src={course.image} className="card-img-top" alt={course.name} />
          <div className="card-body">
            <p className="card-text">{course.desc}</p>
            {/* <p className="card-text">Teacher ID: {course.teacherid}</p>
              <p className="card-text">Publish Date: {course.publishdate}</p> */}
            <button
              onClick={handleEnrollCourse}
              disabled={enrolled || completed}
              className="button-2"
              style={{ marginRight: '10px' }}
            >
              {enrolled ? (completed ? "Selesai" : "Course Enrolled") : "Enroll Course"}
            </button>
            {enrolled && !completed && (
              <button onClick={handleCompleteCourse} className="btn btn-succes" style={{ marginRight: '10px' }}>
                Finish Course
              </button>
            )}
            <Link to="/courses" className="button">
              Kembali ke Daftar Kursus
            </Link>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default CoursePageById;
