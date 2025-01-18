import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/auth/login", credentials);
            if (response.status === 200) {
                // Set authenticated flag
                localStorage.setItem("isAuthenticated", "true");

                // Redirect to dashboard
                navigate("/dashboard");
            }
        } catch (error) {
            alert("Invalid credentials");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
                <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Enter your username"
                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
