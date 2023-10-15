import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavbarMenu from "./components/NavbarMenu";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  const [userType, setUserType] = useState(false);

  const loginCbHandler = (result) => {
    setLoginStatus(result);
    localStorage.setItem("isLoggedIn", result ? "true" : "false");
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      setLoginStatus(true);
    } else {
      setLoginStatus(false);
    }
  }, []);

  return (
    <>
      <div className="main-page container-fluid">
        <NavbarMenu
          loginStatus={loginStatus}
          loginCbHandler={loginCbHandler}
          userType={userType}
          setUserType={setUserType}
        />
        <MainContent
          loginStatus={loginStatus}
          loginCbHandler={loginCbHandler}
          userType={userType}
          setUserType={setUserType}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
