import React, { useState } from "react";
import axios from "axios";
// import { Navigate } from "react-router-dom";

const CreateCourse = (props) => {
  const { userData } = props;

  const [form, setForm] = useState({
    name: "",
    desc: "",
    image: "",
    teacherid: userData.id,
    price: 0,
    label: "",
    publishdate: new Date()
  });
  const [errorEdit, setErrorEdit] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // console.log('client');
      // console.log('form:', form);
      const response = await axios({
        method: "POST",
        url: `http://localhost:3000/api/courses/create`,
        data: form
      });

      // console.log('response:', response);

      // console.log(result.data.message);
      setErrorEdit(response.data.message);
      window.location.reload();

      // return <Navigate to="/" replace={true} />
    } catch (error) {
      // console.log('error:', error);
      setErrorEdit(error.response.data.message);
    } finally {
      setForm({});
      e.target.reset();
    }
  };

  return (
    <>
      <div className='studentdb-body-top'>
        Create a Course
      </div>
      <form className="studentdb-body2-bottom" autoComplete="off" onSubmit={handleSubmit}>
        <div className="registerpage-body-top">
          <div className="registerpage-body-top-field">
            <label className="registerpage-body-top-field-label" htmlFor="name">
              Course Name
            </label>
            <input
              type="text"
              name="name"
              autoComplete="false"
              value={form.name}
              onChange={handleChange}
              className="registerpage-body-top-field-input"
            />
          </div>
          <div className="registerpage-body-top-field">
            <label className="registerpage-body-top-field-label" htmlFor="desc">
              Course Description
            </label>
            <input
              type="text"
              name="desc"
              autoComplete="false"
              value={form.desc}
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
            <label className="registerpage-body-top-field-label" htmlFor="price">
              Price
            </label>
            <input
              type="number"
              name="price"
              min="1"
              autoComplete="false"
              value={form.price}
              onChange={handleChange}
              className="registerpage-body-top-field-input"
            />
          </div>
          <div className="registerpage-body-top-field">
            <label className="registerpage-body-top-field-label" htmlFor="label">
              Choose Label
            </label>
            <select
              name="label"
              value={form.label}
              onChange={handleChange}
              className="registerpage-body-top-field-input"
            >
              <option value="Math and Logic">Math and Logic</option>
              <option value="Data Science">Data Science</option>
              <option value="Information Technology">Information Technology</option>
              <option value="Computer Science">Computer Science</option>
            </select>
          </div>
          {errorEdit && <div className="registerpage-error">{errorEdit}</div>}
          <button type="submit" className="registerpage-body-bottom-right">
            Edit
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateCourse;