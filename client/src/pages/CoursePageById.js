import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const CoursePageById = () => {
  const location = useLocation();
  const id = location.pathname.split('/').pop(); // Mendapatkan ID dari URL

  const [course, setCourse] = useState(null);

  useEffect(() => {
    // Ambil detail kursus berdasarkan ID dari API
    axios.get(`http://localhost:3000/api/courses/${id}`)
      .then((response) => {
        setCourse(response.data);
      })
      .catch((error) => {
        console.error('Error fetching course details:', error);
      });
  }, [id]);

  return (
    <div className="container">
      <h1>Courses</h1>
      {course ? (
        <div>
          <h2>{course.name}</h2>
          <img src={course.image} alt={course.name} />
          <p>{course.desc}</p>
          <p>Teacher ID: {course.teacherId}</p>
          <p>Publish Date: {course.publishDate}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default CoursePageById;
