import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const NavbarMenu = (props) => {
  const { loginStatus, loginCbHandler } = props;
  const navigate = useNavigate();
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    // Memeriksa URL saat komponen dimuat ulang dan mengatur activeItem sesuai URL
    const pathname = location.pathname.replace("/", "");
    setActiveItem(pathname || "");
  }, [location]);

  const loginHandler = () => {
    loginCbHandler(true);
  };

  const logoutHandler = () => {
    window.localStorage.removeItem('token_login');
    loginCbHandler(false);
    navigate("/");
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
    navigate(`/${item}`);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ padding: "30px 0" }}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="main-logo" style={{ width: "140px", height: "auto" }} />
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
        <div className="collapse navbar-collapse align-items-center" id="navbarNav">
          <ul className="navbar-nav ms-auto nav_ul">
            <li className={`nav-item ${activeItem === "" ? "active" : ""}`} onClick={() => handleItemClick("")}>
              <Link className={`nav-link ${activeItem === "" ? "active-link" : ""}`} aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className={`nav-item ${activeItem === "courses" ? "active" : ""}`} onClick={() => handleItemClick("courses")}>
              <Link className={`nav-link ${activeItem === "courses" ? "active-link" : ""}`} to="/courses">
                Courses
              </Link>
            </li>
            <li className={`nav-item ${activeItem === "about" ? "active" : ""}`} onClick={() => handleItemClick("about")}>
              <Link className={`nav-link ${activeItem === "about" ? "active-link" : ""}`} to="/about">
                About
              </Link>
            </li>
            <li className={`nav-item ${activeItem === "contact" ? "active" : ""}`} onClick={() => handleItemClick("contact")}>
              <Link className={`nav-link ${activeItem === "contact" ? "active-link" : ""}`} to="/contact">
                Contact Us
              </Link>
            </li>
            {loginStatus ? (
              <li className={`nav-item ${activeItem === "dashboard" ? "active" : ""}`} onClick={() => handleItemClick("dashboard")}>
                <Link className={`nav-link ${activeItem === "dashboard" ? "active-link" : ""}`} to="/dashboard">
                  Dashboard
                </Link>
              </li>
            ) : null}

            <div className="ms-auto">
              {loginStatus ? (
                <button type="button" className="button mx-2" onClick={logoutHandler}>
                  Logout
                </button>
              ) : (
                <button type="button" className="button mx-2" onClick={() => handleItemClick("register")}>
                  Create Account
                </button>
              )}
              {loginStatus ? null : (
                <button type="button" className="button-2 mx-2" onClick={() => handleItemClick("login")}>
                  Sign in
                </button>
              )}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMenu;
