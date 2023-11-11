# Online Course

This full stack project is an online course web app collaborated with https://github.com/suryaandh, which has a user's dashboard. Users can be students or teachers. Each user can change the profile on the dashboard. Students can choose courses, while teachers can choose and create courses.

This project is a full stack project which contains a list of novels and their authors. The novel and author model form a many-to-many relationship. 

This project uses the following tech stack:
* ExpressJs (Backend / server)
* ReactJS (Frontend / client)
* Postgres (DB)
* Sequelize (ORM)

Entity Relational Diagram (ERD) for this project is as follows: <br/>
https://dbdiagram.io/d/Online-Course-652a7fb0ffbf5169f0ad4272

Below is an backend API Documentation for this project (not yet):

| Method | Route | Keterangan|
| --- | --- | ---|
|GET| `/api` | Get all data required by client in the homepage |
|POST| `/api/users/login` | Users send login data |
|POST| `/api/users/register` | Users send register data |
|GET| `/api/users/getid` | Get user's data that currently logged in |
|GET| `/api/users/users` | Get all users data |
|PUT| `/api/users/updateprof/:id` | Edit user's profile by id |
|PUT| `/api/users/updatepwd/:id` | Edit user's password by id |
|GET| `/api/dashboard` | Get dashboard data for user that currently logged in |
|GET| `/api/courses` | Get all courses ordered by course id |
|GET| `/api/courses/:id` | Get a course by course id |
|POST| `/api/courses/create` | Teacher send course data |
|PUT| `/api/courses/update/:id` | Teacher send edited course data |
|GET| `/api/courses/delete/:id` | Teacher delete a course data |
|POST| `/api/courses/usercourse` | Users select a course |
|POST| `/api/courses/complete` | Users finish a course |


How to use this project:
1. Clone the repo
2. Enter the folder <br/>
`cd online-course-project`
3. Install postgres https://www.postgresql.org/download/, if you haven't installed it
4. Open two terminals, in each of them run the following command
    1. `cd server`
    2. `cd client`
5. Run the following commands in the first terminal (server):
    1. Install all dependencies for the server <br/>
    `npm install`
    2. Edit the development database configuration at `config/config.json`
    3. Create development database <br/> `npx sequelize-cli db:create`
    4. Migrate the model to the database <br/> `npx sequelize-cli db:migrate`
    5. Run the following command <br/>
    `npm run start`
6. Run the following commands in the second terminal (client):
    1. Install all dependencies for the client <br/>
    `npm install`
    2. Run the following command <br/>
    `npm run start`
    3. Since the server uses port 3000, we must choose another port for the client. In order to do that, press 'y' if you prompted to choose another port in the second terminal.
    4. Open http://localhost:3001.

