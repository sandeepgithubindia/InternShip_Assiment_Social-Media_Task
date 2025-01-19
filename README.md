# Social Media Task

## Project Overview
Social Media Task is a MERN stack project that includes authentication for admins and users, as well as role-based dashboards. This project was created to demonstrate essential skills in building a complete web application using MongoDB, Express, React, and Node.js.

## Features
- Admin login and user login functionality.
- Role-based routing (Admin Dashboard, User Dashboard).
- Fully responsive UI designed with Tailwind CSS.
- RESTful APIs for authentication and user management.
- File uploads using Multer.
- Backend structure for scalability and maintainability.

## Technologies Used
- **Frontend:** React.js, Tailwind CSS, React Router
- **Backend:** Node.js, Express.js, MongoDB
- **Package Managers:** npm

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/sandeepgithubindia/InternShip_Assiment_Social-Media_Task.git
   ```
2. Navigate to the project directory:
   ```bash
   cd InternShip_Assiment_Social-Media_Task
   ```

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install backend dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install frontend dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```

## Backend Folder Structure
```
backend
├── controllers
│   ├── authController.js     # Handles authentication logic
│   ├── userController.js     # Handles user-related logic
├── models
│   ├── Admin.js              # Admin schema
│   ├── User.js               # User schema
├── routes
│   ├── authRoutes.js         # Routes for authentication
│   ├── userRoutes.js         # Routes for user operations
├── uploads                   # Directory for file uploads
├── server.js                 # Main entry point for the backend server
├── package.json              # Backend dependencies
└── .gitignore                # Ignored files and directories
```

## API Endpoints
### Authentication Routes
- **POST** `/api/auth/login` - Admin/User login

### User Routes
- **GET** `/api/users` - Fetch all users
- **POST** `/api/users` - Create a new user

## Features Explanation
1. **Login System:**
   - Separate login functionality for admin and users.
   - Based on credentials, redirects to the respective dashboard.

2. **File Upload:**
   - Uses Multer for handling file uploads.

3. **Routing:**
   - Protected routes implemented using role-based access control.

## Deployment
The project is deployed on GitHub. You can access it [here](https://github.com/sandeepgithubindia/InternShip_Assiment_Social-Media_Task).

## License
This project is licensed under the MIT License. Feel free to use and modify it.

