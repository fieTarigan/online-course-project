import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NavbarMenu = (props) => {
  const { loginStatus, loginCbHandler } = props;
  const navigate = useNavigate();

  const loginHandler = () => {
    loginCbHandler(true);
  };

  const logoutHandler = () => {
    window.localStorage.removeItem('token_login');
    loginCbHandler(false);
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          {loginStatus ? (
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/course">
                  Course
                </Link>
                <button className="nav-link" onClick={logoutHandler}>
                  Logout
                </button>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavbarMenu;
