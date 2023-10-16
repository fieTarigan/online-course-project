import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const AdminDashboardPage = () => {
  const [users, setUsers] = useState([]);
  const [courses, setCourses] = useState([]);
  const [usersCourse, setUsersCourses] = useState([]);

  const getAllData = async () => {
    try {
      let newData = await axios({
        method: 'GET',
        url: 'http://localhost:3000/api/dashboard',
        params: {
          token: localStorage.getItem('token_login')
        }
      });

      console.log(newData.data);

      setUsers(newData.data.Users);
      setCourses(newData.data.Courses);
      setUsersCourses(newData.data.rowUserByCourse);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div className='row my-3 text-center'>
      <div className='col-9 mx-auto'>
        <div className='w-100'>
          <Link className='btn btn-sm btn-primary' to='/dashboard/editprofile'>
            Edit Profile
          </Link>
        </div>
        <div className='w-100'>
          <table className='table table-bordered'>
            <thead>
              <tr>
                <th>Nama Course</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {
                courses.length === 0 ? (
                  <tr>No data</tr>
                ) : (
                  courses.map((course) => {
                    const { id, name } = course;
                    return (
                      <tr key={id}>
                        <td>{name}</td>
                        <td>
                          <Link to={`/courses/${id}`} className='btn btn-sm btn-info'>
                            Lihat course
                          </Link>
                        </td>
                      </tr>
                    );
                  })
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboardPage