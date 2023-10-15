import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CoursePage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Ambil daftar kursus dari API
    axios.get('http://localhost:3000/api/courses/')
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="container">
      <h2>Daftar Kursus</h2>
      <div className="row">
        {courses.map((course) => (
          <div className="col-md-4" key={course.id}>
            <div className="card mb-3">
              <img src={course.image} className="card-img-top" alt={course.name} />
              <div className="card-body">
                <h5 className="card-title">{course.name}</h5>
                <p className="card-text">{course.desc}</p>
                <p className="card-text">Teacher ID: {course.teacherid}</p>
                <p className="card-text">Publish Date: {course.publishdate}</p>
                <Link to={`${course.id}`} className='btn btn-primary'>
                  Lihat Detail
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoursePage