import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext, useAuth } from '../hooks/useAuth';

const PrivateRoute = () => {
  const { auth } = useAuth();
  const isAuthenticated = auth?.token;
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
