import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import ProtectedLayout from "../components/ProtectedLayout";
import DashboardPage from "../pages/DashboardPage";
import CoursePage from "../pages/CoursePage";
import EditProfilePage from "../pages/EditProfilePage";
import ChangePassPage from "../pages/ChangePassPage";
import CoursePageById from "../pages/CoursePageById";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";

const MainContent = (props) => {
  const { loginStatus, loginCbHandler, userType, setUserType } = props;

  return (
    <div className="container p-3">
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route
          path="login"
          element={
            <LoginPage
              loginCbHandler={loginCbHandler}
              setUserType={setUserType}
            />
          }
        />
        <Route path="dashboard" element={<ProtectedLayout />}>
          <Route path="" element={<DashboardPage userType={userType} />} />
          {/* <Route path='admin' element={<AdminDashboardPage />} />
          <Route path='teacher' element={<TeacherDashboardPage />} />
          <Route path='student' element={<StudentDashboardPage />} /> */}
          <Route path="editprofile" element={<EditProfilePage />} />
          <Route path="changepass" element={<ChangePassPage />} />
        </Route>
        <Route path="courses" element={<CoursePage />} />
        <Route path="courses/:id" element={<CoursePageById />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </div>
  );
};

export default MainContent;
