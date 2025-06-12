import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
        <ul className="flex justify-between items-center px-20 text-black h-20 border-b border-gray-300 fixed top-0 bg-white w-full z-50">
            <li>
            <Link to="/">
                <h1 className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-3xl">
                    Pro Connect
                </h1>
            </Link>
            </li>
            <li className="flex space-x-5 text-lg text-gray-700">
            <NavLink
                to="/"
                className={({ isActive }) =>
                isActive ? "font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:text-gray-400" : "hover:text-gray-400"
                }
            >
                Home
            </NavLink>
            <NavLink
                to="/jobs"
                className={({ isActive }) =>
                isActive ? "font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:text-gray-400" : "hover:text-gray-400"
                }
            >
                Jobs
            </NavLink>
            <NavLink
                to="/connections"
                className={({ isActive }) =>
                isActive ? "font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:text-gray-400" : "hover:text-gray-400"
                }
            >
                Connections
            </NavLink>
            <NavLink
                to="/blog"
                className={({ isActive }) =>
                isActive ? "font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:text-gray-400" : "hover:text-gray-400"
                }
            >
                Blog
            </NavLink>
            <NavLink
                to="/about"
                className={({ isActive }) =>
                isActive ? "font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:text-gray-400" : "hover:text-gray-400"
                }
            >
                About
            </NavLink>
            </li>
            <li>
            <Link
                to="/login"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded "
            >
                Login
            </Link>
            </li>
        </ul>
        </nav>
    );
}
