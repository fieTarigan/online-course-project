import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const TeacherDashboardPage = () => {
  const [courses, setCourses] = useState([]);

  const getAllData = async () => {
    try {
      let newData = await axios({
        method: "GET",
        url: "http://localhost:3000/api/dashboard",
        params: {
          token: localStorage.getItem("token_login"),
        },
      });

      console.log(newData.data);

      setCourses(newData.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <section className="px-12">
      <div className="grid grid-flow-row gap-5 text-neutral-600 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {courses.map((course) => {
          const { id, name, desc, image, teacherid, publishdate, Users } =
            course;
          return (
            <div className="my-8 rounded shadow-lg shadow-gray-900 bg-gray-800 duration-300 hover:-translate-y-1">
              <button _href="link" className="cursor-pointer">
                <figure>
                  <div className="flex justify-center items-center">
                    <img
                      src={image}
                      alt=""
                      className="rounded-t h-56 object-contain text-center"
                    />
                  </div>

                  <figcaption className="p-4">
                    <p className="text-lg mb-4 font-bold leading-relaxed text-gray-300">
                      {name}
                    </p>
                    <small>
                      <ul className="text-gray-400">
                        {Users.map((user) => {
                          return <li key={user.id}>{user.fullname}</li>;
                        })}
                      </ul>
                    </small>
                    <p className="text-lg mb-4 font-bold leading-relaxed text-gray-300">
                      {desc}
                    </p>
                    <div className="flex justify-between items-center">
                      <small className="leading-5">Teacher: {teacherid}</small>
                      <small className="leading-5">
                        Date Publish: {publishdate}
                      </small>
                    </div>

                    <div className="flex justify-center items-center">
                      <a
                        href="/novels/update/<%= data.id %>"
                        className="text-gray-400 hover:text-gray-100 mx-2"
                      >
                        <i className="material-icons-outlined text-base">edit</i>
                      </a>
                      <a
                        href="/novels/delete/<%= data.id %>"
                        className="text-gray-400 hover:text-gray-100 mx-2"
                      >
                        <i className="material-icons-round text-base">
                          delete_outline
                        </i>
                      </a>
                    </div>
                  </figcaption>
                </figure>
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TeacherDashboardPage;
