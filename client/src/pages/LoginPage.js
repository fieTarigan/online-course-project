import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    usertype: "student", // Default user type
  });

  const [loginError, setLoginError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLoginSuccess = (userType) => {
    // Redirect to the appropriate dashboard based on user type
    if (userType === "admin") {
      navigate("/dashboard/admin");
    } else if (userType === "teacher") {
      navigate("/dashboard/teacher");
    } else {
      navigate("/dashboard/student");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/login",
        form
      );
      console.log("Login berhasil:", response.data);
      localStorage.setItem("token_login", response.data.token);

      // Menentukan jenis pengguna dari respons API (contoh: response.data.usertype)
      const userType = response.data.usertype || form.usertype;

      // Menggunakan useNavigate untuk mengarahkan pengguna ke dashboard yang sesuai
      handleLoginSuccess(userType);
    } catch (error) {
      console.error("Login gagal:", error);
      setLoginError("Login gagal. Periksa email dan password Anda.");
    }
  };

  return (
    <div>
      <div>Login</div>
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
        <div className="mb-3">
          <label className="form-label">Login as</label>
          <select
            name="usertype"
            value={form.usertype}
            onChange={handleChange}
            className="form-select"
          >
            <option value="admin">Admin</option>
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
          </select>
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
