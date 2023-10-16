import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Footer from '../components/Footer';

const ProtectedLayout = () => {
  const token = localStorage.getItem("token_login");

  if ( token === null || token === 'false') {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div style={{marginBottom:"4vh",minHeight:"54.1vh"}}>
        <Outlet />
      </div>
      <div >
        <Footer />
      </div>
      
      
    </>
  );
};

export default ProtectedLayout;
