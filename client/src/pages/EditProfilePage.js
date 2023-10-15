import React, { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const EditProfilePage = () => {
  const [form, setForm] = useState({
    fullname: "",
    bio: "",
    image: "",
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

      // console.log('data', response.data);

      const result = await axios({
        method: "PUT",
        url: `http://localhost:3000/api/users/updateprof/${response.data.id}`,
        data: {
          fullname: form.fullname,
          bio: form.bio,
          image: form.image,
        },
      });

      console.log(result);

      return <Navigate to="/" replace={true} />
    } catch (error) {
      console.log(error);
      setErrorEdit('Gagal perbaharui profil.');
    }
  };

  return (
    <>
      <div className='studentdb-body-top'>
        Edit Profile
      </div>
      <form className="studentdb-body2-bottom" autoComplete="off" onSubmit={handleSubmit}>
        <div className="registerpage-body-top">
          <div className="registerpage-body-top-field">
            <label className="registerpage-body-top-field-label" htmlFor="fullname">
              Full Name
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
              Bio or Profession
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
          <button type="submit" className="registerpage-body-bottom-right">
            Edit
          </button>
        </div>
      </form>

      {errorEdit && <div className="registerpage-error">{errorEdit}</div>}
    </>
  );
};

export default EditProfilePage;
