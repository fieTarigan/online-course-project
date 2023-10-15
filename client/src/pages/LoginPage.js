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
      } else {
        setLoginError('Login failed. Invalid response from the server.');
      }

    } catch (error) {
      console.error("Login failed:", error);
      setLoginError("Login failed. Check your email and password.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div>
          <button type="submit" className="btn btn-success">
            Login
          </button>
        </div>
      </form>

      {loginError && <p>{loginError}</p>}
    </div>
  );
};

export default LoginPage;
