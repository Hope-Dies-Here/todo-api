
# Todo API App

A simple Todo API built with Node.js, Express, and MongoDB. This API allows users to register, log in, and manage their to-do items. Each user can only manage their own tasks, and tasks can be created, updated, and deleted through API endpoints.

## Features

- **User Authentication**: Register and log in users with JWT (JSON Web Tokens).
- **Task Management**: Create, read, update, and delete tasks.
- **Secure Endpoints**: Ensure that only the creator of a task can update or delete it.

## Tech Stack

- **Node.js** (Backend)
- **Express.js** (Web Framework)
- **MongoDB** (Database)
- **Mongoose** (MongoDB ODM)
- **bcrypt** (Password Hashing)
- **jsonwebtoken** (JWT Authentication)

## Endpoints

### User Routes

- **POST /api/users/register**: Register a new user
- **POST /api/users/login**: Log in an existing user and get a JWT token

### Task Routes

- **GET /api/tasks**: Get all tasks for the logged-in user
- **POST /api/tasks**: Create a new task
- **PUT /api/tasks/:id**: Update an existing task
- **DELETE /api/tasks/:id**: Delete a task

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/todo-api.git
cd todo-api
```

### 2. Install dependencies

Run the following command to install the necessary dependencies:

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root of the project and add the following variables:

```env
DB_URL=mongodb://localhost:27017/todoapp
JWT_SECRET=your-jwt-secret-key
```

- `DB_URL` is the URL to your MongoDB instance.
- `JWT_SECRET` is the secret key used for JWT authentication.

### 4. Start the server

Run the following command to start the server:

```bash
npm start
```

This will start the API server on `http://localhost:6900`.

## Error Handling

- **400 Bad Request**: Missing or invalid input data.
- **401 Unauthorized**: Token not provided or invalid.
- **403 Forbidden**: User does not have permission to access or modify the task.
- **404 Not Found**: Task not found.
- **500 Internal Server Error**: Server error.

## Conclusion

Well, look at you! You’ve survived the README, This Todo API is a crazy, out-of-this-world solution for managing your tasks — built with the power of Node.js, Express, and MongoDB. So, get in, create your tasks, and don't forget to keep your JWT safe! If you find any bugs or want to add some interdimensional improvements, just hit up the repo and send a pull request. Remember, the multiverse of open-source is limitless. Happy coding, and don't let the tasks pile up like some crazy space adventure!
