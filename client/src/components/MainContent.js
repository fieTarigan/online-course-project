import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';
import CoursePage from '../pages/CoursePage';

const MainContent = (props) => {
  const { loginStatus, loginCbHandler } = props;

  return (
    <div className='container p-3'>
      <Routes>
        <Route path='' element={<HomePage />} />
        <Route path='register' element={<RegisterPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='dashboard' element={<DashboardPage />} />
        <Route path='course' element={<CoursePage />} />
      </Routes>
    </div>
  );
}

export default MainContent;