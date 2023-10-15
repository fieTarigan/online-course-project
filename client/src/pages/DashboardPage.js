import React from 'react';
import AdminDashboardPage from "./AdminDashboardPage";
import TeacherDashboardPage from "./TeacherDashboardPage";
import StudentDashboardPage from "./StudentDashboardPage";

const DashboardPage = (props) => {
  const { userType } = props;
  // console.log('user type:', userType);

  if (userType === 'admin') {
    return <AdminDashboardPage />;
  } else if (userType === 'teacher') {
    return <TeacherDashboardPage />;
  } else if (userType === 'student') {
    return <StudentDashboardPage />;
  }
}

export default DashboardPage