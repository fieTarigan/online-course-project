import React, { useState, useEffect } from 'react';
// import { Link, Route, Routes } from "react-router-dom";
import axios from 'axios';
import Dashboard from './studentdb/dashboard';
import Courses from './studentdb/courses';
import ChangePassPage from './ChangePassPage';
import EditProfilePage from './EditProfilePage';

const StudentDashboardPage = () => {
  const [userData, setUserData] = useState({});
  const [userDbData, setUserDbData] = useState({
    nCourse: 0, nCourseActive: 0, nCourseFinished: 0, nTeacher: 0
  });
  const [allCourses, setAllCourses] = useState([]);
  const [navBar, setNavBar] = useState("dashboard");

  const getCourses = async () => {
    try {
      let dbdata = await axios({
        method: 'GET',
        url: 'http://localhost:3000/api/dashboard',
        params: {
          token: localStorage.getItem('token_login')
        }
      });

      // console.log(dbdata.data.courses[0].id);

      setUserData(dbdata.data.user);
      setUserDbData({
        nCourse: dbdata.data.nCourseActive + dbdata.data.nCourseFinished,
        nCourseActive: dbdata.data.nCourseActive,
        nCourseFinished: dbdata.data.nCourseFinished,
        nTeacher: dbdata.data.nTeacher
      });
      setAllCourses(dbdata.data.courses);
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
            <img src={userData.image} alt='' width='110px' style={{ borderRadius: "50%" }} />
            <div className='studentdb-head-top-left-content'>
              <div className='studentdb-head-top-left-content-top' style={{ textTransform: "capitalize" }}>
                {userData.fullname}
              </div>
              <div className='studentdb-head-top-left-content-bottom' style={{ textTransform: "capitalize" }}>
                {userData.bio}
              </div>
            </div>
          </div>
        </div>
        <div className='studentdb-head-bottom'>
          <button onClick={(e) => { handleClickNav('dashboard') }} className={`studentdb-head-bottom-item ${navBar === "dashboard" ? "active" : ""}`}>
            Dashboard
          </button>
          <button onClick={(e) => { handleClickNav('courses') }} className={`studentdb-head-bottom-item ${navBar === "courses" ? "active" : ""}`}>
            Courses
          </button>
          <button onClick={(e) => { handleClickNav('editpwd') }} className={`studentdb-head-bottom-item ${navBar === "editpwd" ? "active" : ""}`}>
            Edit Password
          </button>
          <button onClick={(e) => { handleClickNav('editprofile') }} className={`studentdb-head-bottom-item ${navBar === "editprofile" ? "active" : ""}`}>
            Edit Profiles
          </button>
        </div>
      </div>
      <div className='studentdb-body'>
        {
          navBar === 'dashboard' ?
            <Dashboard userDbData={userDbData} /> :
            navBar === 'courses' ?
              <Courses allCourses={allCourses} /> :
              navBar === 'editpwd' ?
                <ChangePassPage /> : <EditProfilePage />
        }
      </div>

    </div>

  )
}

export default StudentDashboardPage