import React from "react";
import { Navigate, Outlet, Link } from "react-router-dom";

const ProtectedLayout = () => {
  const token = localStorage.getItem("token_login");

  if ( token === null || token === 'false') {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <Link className="btn btn-sm btn-primary" to="/dashboard/changepass">
          Ubah Password
        </Link>
        <Link className="btn btn-sm btn-primary" to="/dashboard/editprofile">
          Edit Profil
        </Link>
      </nav>

      <Outlet />
    </div>
  );
};

export default ProtectedLayout;
