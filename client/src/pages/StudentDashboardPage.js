import React, { useState, useEffect } from 'react';
import { Link, Route, Routes } from "react-router-dom";
import axios from 'axios';
import Dashboard from './studentdb/dashboard';
import Courses from './studentdb/courses';
import ChangePassPage from './ChangePassPage';
import EditProfilePage from './EditProfilePage';

const StudentDashboardPage = () => {
  const [courses, setCourses] = useState([]);
  const [navBar, setNavBar] = useState("dashboard");

  const getCourses = async () => {
    try {
      let newCourses = await axios({
        method: 'GET',
        url: 'http://localhost:3000/api/dashboard',
        params: {
          token: localStorage.getItem('token_login')
        }
      });

      console.log(newCourses.data);

      setCourses(newCourses.data);
    } catch (error) {
      console.log(error);
    }
  };


  const handleClickNav = (type) => {
    setNavBar(type);
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
      <div className='studentdb'>
        <div className='studentdb-head'>
          <div className='studentdb-head-top'>
            <div className='studentdb-head-top-left'>
              <img src='Photo.png' alt='' width='110px' style={{borderRadius:"50%"}} />
              <div className='studentdb-head-top-left-content'>
                <div className='studentdb-head-top-left-content-top'>
                  Kevin Gilbert
                </div>
                <div className='studentdb-head-top-left-content-bottom'>
                  Web Designer & Best-Selling Instructor
                </div>
              </div>
            </div>
          </div>
          <div className='studentdb-head-bottom'>
            <button onClick={(e) => {handleClickNav('dashboard')}} className='studentdb-head-bottom-item'>
              Dashboard
            </button>
            <button onClick={(e) => {handleClickNav('courses')}} className='studentdb-head-bottom-item'>
              Courses
            </button>
            <button onClick={(e) => {handleClickNav('editpwd')}} className='studentdb-head-bottom-item'>
              Edit Password
            </button>
            <button onClick={(e) => {handleClickNav('editprofile')}} className='studentdb-head-bottom-item'>
              Edit Profiles
            </button>
          </div>
        </div>
        <div className='studentdb-body'>
          {
            navBar === 'dashboard' ?
            <Dashboard /> :
            navBar === 'courses' ?
            <Courses /> :
            navBar === 'editpwd' ?
            <ChangePassPage /> : <EditProfilePage/>
          }
        </div>








        <div className='col-9 mx-auto'>
          <div className='w-100'>
            <table className='table table-bordered'>
              <thead>
                <tr>
                  <th>Nama; Course, Enrolled Courses, Active Courses, Completed Courses, Course Teachers</th>
                  <th>Aksi; Dashboard, Courses, Teachers, Edit pwd, Edit Profile</th>
                </tr>
              </thead>
              <tbody>
                {
                  courses.length === 0 ? (
                    <tr>No data</tr>
                  ) : (
                    courses.map((course) => {
                      const { id, name } = course.Course;
                      return (
                        <tr key={id}>
                          <td>{name}</td>
                          <td>
                            <Link to={`/courses/${id}`} className='btn btn-sm btn-info'>
                              Lihat course
                            </Link>
                          </td>
                        </tr>
                      );
                    })
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    
  )
}

export default StudentDashboardPage