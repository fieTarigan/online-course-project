import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import NavbarMenu from './components/NavbarMenu';
import MainContent from './components/MainContent';

function App() {
  const [loginStatus, setLoginStatus] = useState(false);

  const loginCbHandler = (result) => {
    setLoginStatus(result);
  };

  useEffect(() => {
    if (localStorage.getItem('token_login')) {
      setLoginStatus(true);
    } else {
      setLoginStatus(false);
    }
  }, []);

  return (
    <>
      <div className='main-page container-fluid'>
        <NavbarMenu loginStatus={loginStatus} loginCbHandler={loginCbHandler} />
        <MainContent loginStatus={loginStatus} loginCbHandler={loginCbHandler} />
      </div>
    </>
  );
}

export default App;
