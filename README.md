# Student Records API

## Description

Student Records API is a simple RESTful API created using Node.js and Express.js. It allows users to create, view, update, and delete student records.

The student information includes an ID, name, course, year, and email.

## Technologies Used

- Node.js
- Express.js
- Postman
- GitHub
- Render

## Installation and Local Execution

1. Clone or download the project.
2. Open the project folder in VS Code.
3. Open the terminal.
4. Install the required dependencies:

```bash
npm install
```

5. Start the server:

```bash
npm start
```

6. The server will run locally at:

```text
http://localhost:3000
```

## API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | /api/students | Retrieve all students |
| GET | /api/students/:id | Retrieve one student by ID |
| POST | /api/students | Create a new student |
| PUT | /api/students/:id | Update an existing student |
| DELETE | /api/students/:id | Delete a student |

## Example POST Request

Endpoint:

```text
POST /api/students
```

Example JSON request body:

```json
{
  "name": "Kyle Casia",
  "course": "BSIT",
  "year": 2,
  "email": "kyle@example.com"
}
```

## GitHub Repository

```text
YOUR_GITHUB_REPOSITORY_URL
```

## Render Deployment

```text
YOUR_RENDER_DEPLOYMENT_URL
```

## Known Limitations

This API uses temporary in-memory storage instead of a database. Student records that are created, updated, or deleted may reset when the server restarts or when the Render deployment instance is replaced.