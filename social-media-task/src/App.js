import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserForm from './components/UserForm';
import AdminDashboard from './components/AdminDashboard';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
