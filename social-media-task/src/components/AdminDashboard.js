import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get('http://localhost:5000/api/users');
      setUsers(response.data);
    };
    fetchUsers();
  }, []);
  const handleLogout = () => {
    // Clear authentication from localStorage
    localStorage.removeItem("isAuthenticated");

    // Redirect to login page
    navigate("/login");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Admin Dashboard</h1>
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
      >
        Logout
      </button>

      <div className="space-y-6">
        {users.map((user) => (
          <div key={user._id} className="p-4 border border-gray-300 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.socialMediaHandle}</p>

            <div className="mt-4 grid grid-cols-3 gap-4">
              {user.images.map((image, index) => (
                <img
                  key={index}
                  src={`http://localhost:5000/${image}`}
                  alt={`user-${index}`}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
