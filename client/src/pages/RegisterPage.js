import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [form, setForm] = useState({
    fullname: "",
    bio: "",
    image: "",
    email: "",
    password: "",
    usertype: "",
  });
  const [errorRegister, setErrorRegister] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    // console.log(e.target.name, ' ', e.target.value);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios({
        method: "POST",
        url: "http://localhost:3000/api/users/register",
        data: form,
      });

      console.log('response', response);

      if (response.data) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      setErrorRegister('Register is failed');
    }
  };

  return (
    <div className="registerpage">
      <div className="registerpage-title">
        Create new account
      </div>
      <form className="registerpage-body" autoComplete="off" onSubmit={handleSubmit}>
        <div className="registerpage-body-top">
          <div className="registerpage-body-top-field">
            <label className="registerpage-body-top-field-label" htmlFor="fullname">
              Full Name*
            </label>
            <input
              type="text"
              name="fullname"
              autoComplete="false"
              value={form.fullname}
              onChange={handleChange}
              className="registerpage-body-top-field-input"
            />
          </div>
          <div className="registerpage-body-top-field">
            <label className="registerpage-body-top-field-label" htmlFor="bio">
              Bio or Profession*
            </label>
            <input
              type="text"
              name="bio"
              autoComplete="false"
              value={form.bio}
              onChange={handleChange}
              className="registerpage-body-top-field-input"
            />
          </div>
          <div className="registerpage-body-top-field">
            <label className="registerpage-body-top-field-label" htmlFor="image">
              Image
            </label>
            <input
              type="text"
              name="image"
              autoComplete="false"
              value={form.image}
              onChange={handleChange}
              className="registerpage-body-top-field-input"
            />
          </div>
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
          <div className="registerpage-body-top-field">
            <label className="registerpage-body-top-field-label" htmlFor="usertype">
              Register as*
            </label>
            <select
              name="usertype"
              value={form.usertype}
              onChange={handleChange}
              className="registerpage-body-top-field-input"
            >
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
            </select>
          </div>
        </div>
        <div className="registerpage-body-bottom">
          <div className="registerpage-body-bottom-left">
            * required
          </div>
          <button type="submit" className="registerpage-body-bottom-right">
            Create Account
          </button>
        </div>
      </form>

      {errorRegister && <div className="registerpage-error">{errorRegister}</div>}
    </div>
  );
};

export default RegisterPage;
