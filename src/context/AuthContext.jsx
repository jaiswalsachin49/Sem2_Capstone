import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [isAuthenticated, setIsAuthenticated] = useState(!!token);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const API_URL = `${import.meta.env.VITE_API_URL}/auth`;

    const login = async (email, password) => {
        try {
            const response = await fetch(`${API_URL}/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            if (response.ok) {
                setToken(data.token);
                localStorage.setItem('token', data.token);
                setIsAuthenticated(true);
                setError(null);
                navigate('/');
            } else {
                setError(data.msg || 'Login failed.');
                setIsAuthenticated(false);
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
        }
    };
    
    // ** NEW SIGNUP FUNCTION **
    const signup = async (name, email, password) => {
        try {
            const response = await fetch(`${API_URL}/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password }),
            });
            const data = await response.json();
            if (response.ok) {
                setToken(data.token);
                localStorage.setItem('token', data.token);
                setIsAuthenticated(true);
                setError(null);
                navigate('/'); // Redirect to homepage after successful signup
            } else {
                setError(data.msg || 'Signup failed.');
                setIsAuthenticated(false);
            }
        } catch (err) {
            setError('An error occurred during signup. Please try again.');
        }
    };

    const logout = () => {
        setToken(null);
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ token, isAuthenticated, error, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;