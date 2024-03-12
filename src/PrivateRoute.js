import React from 'react';
import { Navigate,Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext';
import Navbar from './components/Navbar';

const PrivateRoute = () => {
    const { currentUser } = useAuth(); // 現在のユーザーを取得する
  
    return currentUser ? (
        <>
            <Navbar />
            <Outlet />
        </>
    ) : (
        <Navigate to="/" />
    );
};

export default PrivateRoute;