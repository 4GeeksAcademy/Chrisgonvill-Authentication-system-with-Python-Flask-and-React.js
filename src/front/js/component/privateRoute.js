import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = true;

    return isAuthenticated ? (
        <Route {...rest} element={<Component />} />
    ) : (
        <Navigate to="/login" replace />
    );
};

export default PrivateRoute;