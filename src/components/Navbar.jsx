import React, { useState, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react'; // Import User icon
import AuthContext from '../context/AuthContext';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { isAuthenticated, logout } = useContext(AuthContext);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinkClass = ({ isActive }) =>
        isActive
            ? 'font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
            : 'text-gray-700 hover:text-gray-500';

    return (
        <nav className="fixed top-0 w-full bg-white border-b border-gray-300 z-50">
            <div className="flex items-center justify-between h-20 px-4 md:px-20">
                <Link to="/">
                    <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Pro Connect
                    </h1>
                </Link>

                <ul className="hidden md:flex space-x-6 text-lg items-center">
                    <NavLink to="/" className={navLinkClass}>Home</NavLink>
                    <NavLink to="/jobs" className={navLinkClass}>Jobs</NavLink>
                    <NavLink to="/connections" className={navLinkClass}>Connections</NavLink>
                    <NavLink to="/blog" className={navLinkClass}>Blog</NavLink>
                    <NavLink to="/about" className={navLinkClass}>About</NavLink>

                    {isAuthenticated ? (
                        <div className="flex items-center space-x-4 ml-4">
                            {/* <Link to="/profile" className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full text-gray-600 hover:bg-gray-300 transition">
                                <User size={20} />
                            </Link> */}
                            <button
                                onClick={logout}
                                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold text-sm transition"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <Link
                            to="/login"
                            className="ml-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-lg font-semibold"
                        >
                            Login
                        </Link>
                    )}
                </ul>

                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white px-4 pb-4 pt-2 space-y-2 border-t border-gray-300 shadow-md">
                    <NavLink to="/" className="block py-2" onClick={toggleMenu}>Home</NavLink>
                    <NavLink to="/jobs" className="block py-2" onClick={toggleMenu}>Jobs</NavLink>
                    <NavLink to="/connections" className="block py-2" onClick={toggleMenu}>Connections</NavLink>
                    <NavLink to="/blog" className="block py-2" onClick={toggleMenu}>Blog</NavLink>
                    <NavLink to="/about" className="block py-2" onClick={toggleMenu}>About</NavLink>
                    
                    {isAuthenticated ? (
                        <div className="border-t pt-4 mt-2">
                             {/* <Link
                                to="/profile"
                                className="block w-full text-left mb-2 bg-gray-100 text-gray-800 px-4 py-2 rounded"
                                onClick={toggleMenu}
                            >
                                Profile
                            </Link> */}
                            <button
                                onClick={() => {
                                    logout();
                                    toggleMenu();
                                }}
                                className="block w-full text-left bg-red-500 text-white px-4 py-2 rounded"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <Link
                            to="/login"
                            className="block mt-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center px-4 py-2 rounded"
                            onClick={toggleMenu}
                        >
                            Login
                        </Link>
                    )}
                </div>
            )}
        </nav>
    );
}