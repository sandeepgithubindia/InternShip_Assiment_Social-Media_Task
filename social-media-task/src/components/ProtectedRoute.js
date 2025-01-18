import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
    // Check if the user is authenticated
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

    // Redirect to login if not authenticated
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    // Render the protected component if authenticated
    return children;
}

export default ProtectedRoute;
