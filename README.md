# 🎬 Movies Management System

A simple RESTful API for managing movies, built with **Node.js**, **Express**, and **MongoDB**.  
Includes JWT authentication and role-based access control for admin and users.

---

## 🚀 Features

- User registration & login (with JWT)
- Admin/user role management
- CRUD operations for movies
- MongoDB integration via Mongoose
- Logger and error handler middleware

---

## 🛠️ Tech Stack

- **Node.js** + **Express**
- **MongoDB** + **Mongoose**
- **JWT Authentication**
- **Postman** for API testing

---

## 📁 Project Structure

```
movies-management-api/
│
├── config/           # DB connection
├── middleware/       # Logger and error handler
├── models/           # Mongoose schemas
├── routes/           # API routes for users & movies
├── .env              # Environment variables (not uploaded)
├── .gitignore
├── log.txt
├── package.json
├── server.js
```

---

## 🔧 Setup Instructions

### 1. Clone the repo
```bash
git clone https://github.com/your-username/movies-management-api.git
cd movies-management-api
```

### 2. Install dependencies
```bash
npm install
```

### 3. Create `.env` file
Create a `.env` file in the root and add:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/movies_db
JWT_SECRET=your_jwt_secret
```

### 4. Start the server
```bash
npm start
```

---

## ✅ API Endpoints

### Auth
- `POST /api/users/register`
- `POST /api/users/login`

### Movies
- `GET /api/movies`
- `POST /api/movies` *(admin only)*
- `PUT /api/movies/:id` *(admin only)*
- `DELETE /api/movies/:id` *(admin only)*

---


