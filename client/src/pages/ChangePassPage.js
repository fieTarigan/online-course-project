import React, { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const ChangePassPage = () => {
  const [form, setForm] = useState({
    oldpassword: "",
    newpassword: "",
  });
  const [errorEdit, setErrorEdit] = useState(null);

  // const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]:  e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: "GET",
        url: `http://localhost:3000/api/users/getid`,
        params: {
          token: localStorage.getItem('token_login')
        }
      });

      const result = await axios({
        method: "PUT",
        url: `http://localhost:3000/api/users/updatepwd/${response.data.id}`,
        data: {
          oldpassword: form.oldpassword,
          newpassword: form.newpassword,
        },
      });

      setErrorEdit(result.data.message);

      // navigate('/dashboard');
    } catch (error) {
      console.log(error);
      setErrorEdit(error.response.data.message);
    } finally {
      setForm({});
      e.target.reset();
    }
  };

  return (
    <>
      <div className='studentdb-body-top'>
        Edit Password
      </div>
      <form id="formhere" className="studentdb-body2-bottom" autoComplete="off" onSubmit={handleSubmit}>
        <div className="registerpage-body-top">
          <div className="registerpage-body-top-field">
            <label className="registerpage-body-top-field-label" htmlFor="oldpassword">
              Old Password
            </label>
            <input
              type="password"
              name="oldpassword"
              value={form.oldpassword}
              onChange={handleChange}
              className="registerpage-body-top-field-input"
            />
          </div>
          <div className="registerpage-body-top-field">
            <label className="registerpage-body-top-field-label" htmlFor="newpassword">
              New Password
            </label>
            <input
              type="password"
              name="newpassword"
              value={form.newpassword}
              onChange={handleChange}
              className="registerpage-body-top-field-input"
            />
          </div>
          <button type="submit" className="registerpage-body-bottom-right">
            Edit
          </button>
        </div>
      </form>
      {errorEdit && <div className="registerpage-error">{errorEdit}</div>}
    </>
  );
};

export default ChangePassPage;