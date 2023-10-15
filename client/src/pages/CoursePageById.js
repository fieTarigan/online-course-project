import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams dari React Router
import axios from 'axios';

function CoursePageById() {
  const { id } = useParams(); // Dapatkan 'id' dari URL

  const [course, setCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Mendapatkan student id
    axios({
      method: "GET",
      url: "http://localhost:3000/api/users/getid",
      params: {
        token: localStorage.getItem("token_login")
      }
    })
      .then((response) => {
        const userId = response.data.studentid;

        // Membuat enroll
        axios
          .post("http://localhost:3000/api/courses/enroll", {
            studentid: userId,
            courseid: id // Menggunakan 'id' dari URL
          })
          .then(() => {
            // Setelah berhasil membuat enroll, kita dapat mengambil data course
            axios
              .get(`http://localhost:3000/api/courses/${id}`)
              .then((response) => {
                // Set data course ke state
                setCourse(response.data);
                setIsLoading(false);
              })
              .catch((error) => {
                console.error("Gagal mendapatkan data course:", error);
                setIsLoading(false);
              });
          })
          .catch((error) => {
            console.error("Gagal membuat enroll:", error);
            setIsLoading(false);
          });
      })
      .catch((error) => {
        console.error("Gagal mendapatkan student id:", error);
        setIsLoading(false);
      });
  }, [id]); // Pastikan untuk menyertakan 'id' dalam dependency array

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {course ? (
        <div>
          <h1>{course.title}</h1>
          <p>{course.description}</p>
          {/* Tampilkan informasi lainnya sesuai kebutuhan */}
        </div>
      ) : (
        <div>Data course tidak ditemukan.</div>
      )}
    </div>
  );
}

export default CoursePageById;
