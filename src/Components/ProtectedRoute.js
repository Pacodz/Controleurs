import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { Link } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
      console.log("hna")
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;