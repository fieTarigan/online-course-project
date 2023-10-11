import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [form, setForm] = useState({
    fullname: "",
    image: "",
    email: "",
    password: "",
    usertype: "student",
  });

  const navigate = useNavigate();

  const registerButton = async () => {
    try {
      await axios({
        method: "POST",
        url: "http://localhost:3000/api/users/register",
        data: form,
      });

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>Register</div>
      <form>
        <div className="mb-3">
          <label className="form-label">
            Full Name
          </label>
          <input
            type="text"
            onChange={(e) => setForm({ ...form, fullname: e.target.value })}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Image
          </label>
          <input
            type="text"
            onChange={(e) => setForm({ ...form, image: e.target.value })}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Email
          </label>
          <input
            type="email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Password
          </label>
          <input
            type="password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Register as
          </label>
          <select
            value={form.usertype}
            onChange={(e) => setForm({ ...form, usertype: e.target.value })}
            className="form-select"
          >
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
          </select>
        </div>
        <div>
          <button onClick={registerButton} className="btn btn-success">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
