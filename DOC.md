# Todo API Documentation

The Todo API allows users to manage their tasks and provides user authentication using JWT. Below are the details of the available endpoints, request/response formats, and authentication methods.

---

## **Base URL**

- Local: `http://localhost:6900`
- Production: `https://todo-api-taiwan-mc.vercel.app/`

---

## **Authentication**

- **JWT Token**: Required for all task-related endpoints.
- **Header**: `Authorization: Bearer <token>`

---

## **Endpoints**

### **User Routes**

#### **1. Register a New User**

- **URL**: `/api/users/register`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "name": "Beyene Dmamu",
    "email": "sample.email@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  - **201 Created**:
    ```json
    {
      "message": "User created successfully"
    }
    ```
  - **400 Bad Request**:
    ```json
    {
      "errors": [
        { "message": "Name is required" },
        { "message": "Invalid email format." }
        { "message": "Password must be between 6 and 32 characters." }
      ]
    }
    ```

---

#### **2. Log in a User**

- **URL**: `/api/users/login`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "email": "sample.email@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  - **200 OK**:
    ```json
    {
      "message": "User logged in.",
      "token": "<JWT_TOKEN>"
    }
    ```
  - **404 Not Found**:
    ```json
    {
      "message": "No user exists with this email"
    }
    ```
  - **400 Bad Request**:
    ```json
    {
      "message": "Incorrect password"
    }
    ```

---

### **Task Routes**

#### **1. Get All Tasks**

- **URL**: `/api/tasks`
- **Method**: `GET`
- **Query Parameters**:
  - `page` (optional): Page number (default: `1`)
  - `limit` (optional): Number of tasks per page (default: `10`)
- **Response**:
  - **200 OK**:
    ```json
    {
      "data": [
        {
          "title": "Task 1",
          "description": "Description of Task 1",
          "creator": "sample.email@example.com"
        }
      ],
      "page": 1,
      "limit": 10,
      "total": 1
    }
    ```
  - **404 Not Found**:
    ```json
    {
      "message": "No tasks available"
    }
    ```

---

#### **2. Create a New Task**

- **URL**: `/api/tasks`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "title": "New Task",
    "description": "Task description"
  }
  ```
- **Response**:
  - **201 Created**:
    ```json
    {
      "message": "Task created"
    }
    ```
  - **400 Bad Request**:
    ```json
    {
      "message": "Title is required"
    }
    ```

---

#### **3. Update a Task**

- **URL**: `/api/tasks/:id`
- **Method**: `PUT`
- **Request Body**:
  ```json
  {
    "title": "Updated Task Title",
    "description": "Updated description"
  }
  ```
- **Response**:
  - **200 OK**:
    ```json
    {
      "title": "Updated Task Title",
      "description": "Updated description",
      "creator": "sample.email@example.com"
    }
    ```
  - **403 Forbidden**:
    ```json
    {
      "message": "Forbidden"
    }
    ```
  - **400 Bad Request**:
    ```json
    {
      "error": "Did you send empty data to update?"
    }
    ```

---

#### **4. Delete a Task**

- **URL**: `/api/tasks/:id`
- **Method**: `DELETE`
- **Response**:
  - **203 Non-Authoritative Information**:
    ```json
    {
      "message": "Task Deleted"
    }
    ```
  - **403 Forbidden**:
    ```json
    {
      "message": "Forbidden"
    }
    ```

---

## **Error Codes**

- **400 Bad Request**: Invalid input or missing data.
- **401 Unauthorized**: Missing or invalid JWT token.
- **403 Forbidden**: User does not have permission to access or modify the resource.
- **404 Not Found**: Resource not found.
- **500 Internal Server Error**: Server-side error.

---

## **Setup Instructions**

Refer to the [README](README.md) for installation and setup instructions.
