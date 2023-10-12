import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';
import AdminDashboardPage from '../pages/AdminDashboardPage';
import TeacherDashboardPage from '../pages/TeacherDashboardPage';
import CoursePage from '../pages/CoursePage';
import EditProfilePage from '../pages/EditProfilePage';

const MainContent = (props) => {
  const { loginStatus, loginCbHandler } = props;

  return (
    <div className='container p-3'>
      <Routes>
        <Route path='' element={<HomePage />} />
        <Route path='register' element={<RegisterPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='dashboard'>
          <Route path='admin' element={<AdminDashboardPage />} />
          <Route path='teacher' element={<TeacherDashboardPage />} />
          <Route path='student' element={<DashboardPage />} />
          <Route path='editprofile' element={<EditProfilePage />} />
        </Route>
        <Route path='course' element={<CoursePage />} />
      </Routes>
    </div>
  );
} 

export default MainContent;