import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Profile = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            // 1. Get the token from where you stored it
            const token = localStorage.getItem('token');
            if (!token) {
                setError("No authentication token found. Please log in.");
                setLoading(false);
                return;
            }

            try {
                // 2. Make the API call WITH the token in the headers
                const response = await fetch('http://localhost:5000/api/user', {
                    method: 'GET',
                    headers: {
                        // THIS IS THE CRITICAL PART
                        'Content-Type': 'application/json',
                        'x-auth-token': token, // The backend middleware expects this header
                    },
                });

                if (!response.ok) {
                    // If the server responds with an error (e.g., token invalid)
                    const errData = await response.json();
                    throw new Error(errData.msg || 'Failed to fetch user data');
                }
                
                const data = await response.json();
                setUser(data);

            } catch (error) {
                console.error("Profile fetch error:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    if (loading) {
        return <div className="min-h-screen pt-24 flex items-center justify-center">Loading profile...</div>;
    }

    if (error) {
        return <div className="min-h-screen pt-24 flex items-center justify-center text-red-500">{error}</div>;
    }

    if (!user) {
        return <div className="min-h-screen pt-24 flex items-center justify-center">Could not load user profile.</div>;
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-16">
            <motion.div
                className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex flex-col items-center text-center">
                    <div className="w-28 h-28 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-5xl font-bold mb-4 shadow-lg">
                        {user.name.charAt(0).toUpperCase()}
                    </div>
                    <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
                    <p className="text-gray-500 mt-1 text-lg">{user.email}</p>
                </div>
            </motion.div>
        </div>
    );
};

export default Profile;