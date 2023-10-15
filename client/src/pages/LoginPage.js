import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = (props) => {
  const { loginCbHandler, setUserType } = props;
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loginError, setLoginError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/login",
        form
      );

      if (response.data.token && response.data.userType) {
        localStorage.setItem("token_login", response.data.token);

        // Menentukan jenis pengguna dari respons API (contoh: response.data.usertype)
        // const userType = response.data.userType;
        // if (userType === 'admin') {
        //   navigate('/dashboard/admin');
        // } else if (userType === 'teacher') {
        //   navigate('/dashboard/teacher');
        // } else if (userType === 'student') {
        //   navigate('/dashboard/student');
        // }
        setUserType(response.data.userType);
        navigate('/dashboard');

        // Menggunakan useNavigate untuk mengarahkan pengguna ke dashboard yang sesuai
        loginCbHandler(true);

        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('userType', response.data.userType);
      } else {
        setLoginError('Login failed. Invalid response from the server.');
      }

    } catch (error) {
      console.error("Login failed:", error);
      setLoginError("Login failed. Check your email and password.");
    }
  };

  return (
    <div className="registerpage">
      <div className="registerpage-title">
        Login to your account
      </div>
      <form className="registerpage-body" autoComplete="off" onSubmit={handleSubmit}>
        <div className="registerpage-body-top">
          <div className="registerpage-body-top-field">
            <label className="registerpage-body-top-field-label" htmlFor="email">
              Email*
            </label>
            <input
              type="text"
              name="email"
              autoComplete="false"
              value={form.email}
              onChange={handleChange}
              className="registerpage-body-top-field-input"
            />
          </div>
          <div className="registerpage-body-top-field">
            <label className="registerpage-body-top-field-label" htmlFor="password">
              Password*
            </label>
            <input
              type="password"
              name="password"
              autoComplete="false"
              value={form.password}
              onChange={handleChange}
              className="registerpage-body-top-field-input"
            />
          </div>
        </div>
        <div className="registerpage-body-bottom">
          <div className="registerpage-body-bottom-left">

          </div>
          <button type="submit" className="registerpage-body-bottom-right">
            Login
          </button>
        </div>
      </form>

      {loginError && <div className="registerpage-error">{loginError}</div>}
    </div>
  );
};

export default LoginPage;
