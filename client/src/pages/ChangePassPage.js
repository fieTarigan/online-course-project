import React, { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const ChangePassPage = () => {
  const [form, setForm] = useState({
    oldpassword: "",
    newpassword: "",
  });
  const [errorEdit, setErrorEdit] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;

    setForm({ ...form, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const response = await axios({
        method: "GET",
        url: `http://localhost:3000/api/users/getid`,
        params: {
          token: localStorage.getItem('token_login')
        }
      });

      console.log('data', response.data);

      const result = await axios({
        method: "PUT",
        url: `http://localhost:3000/api/users/updatepwd/${response.data.id}`,
        data: {
          oldpassword: form.oldpassword,
          newpassword: form.newpassword,
        },
      });

      console.log(result);

      return <Navigate to="/" replace={true} />
    } catch (error) {
      console.log(error);
      setErrorEdit(error.response.data.message);
    }
  };

  return (
    <div>
      <div>Edit Password</div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="oldpassword">
            Old Password
            <input
              type="password"
              name="oldpassword"
              value={form.oldpassword}
              onChange={handleChange}
              className="form-control"
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="newpassword">
            New Password
            <input
              type="password"
              name="newpassword"
              value={form.newpassword}
              onChange={handleChange}
              className="form-control"
            />
          </label>
        </div>
        <div>
          <button type="submit" className="btn btn-success">
            Edit
          </button>
        </div>
      </form>

      {errorEdit && <p>{errorEdit}</p>}
    </div>
  );
};

export default ChangePassPage;