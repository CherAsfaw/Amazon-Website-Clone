import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../DataProvider/DataProvider';

const ProtectedRoute = ({children, msg, redirect}) => {
  const navigate = useNavigate();
  const [{ user }, dispatch] = useContext(DataContext);

  useEffect(() => {
    if (!user) {
      navigate("/auth", { state: { msg, redirect } });
    }
  }, [user, msg, redirect, navigate]);

  // Only render children if the user exists
  return user ? children : null;
  
}

export default ProtectedRoute