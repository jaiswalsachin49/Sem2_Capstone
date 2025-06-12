import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const API_KEY = 'f5a96cbf8dmsh21b12d1aa380f11p165452jsnf2e04ad80659'; 

const fetchJobs = async (query = "frontend developer", page = 1) => {
    const options = {
        method: "GET",
        headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
        },
    };

    const url = `https://jsearch.p.rapidapi.com/search?query=${encodeURIComponent(query)}&page=${page}&num_pages=1`;

    const response = await fetch(url, options);
    if (!response.ok) throw new Error("Failed to fetch jobs");
    const data = await response.json();
    return data.data || [];
    };

    export default function Jobs() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [query, setQuery] = useState("frontend developer");
    const [page, setPage] = useState(1);

    const debounceTimer = useRef(null);

    useEffect(() => {
        const getJobs = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await fetchJobs(query, page);
            setJobs(data);
        } catch (err) {
            setError(err.message || "Error fetching jobs");
        } finally {
            setLoading(false);
        }
        };

        if (debounceTimer.current) clearTimeout(debounceTimer.current);

        debounceTimer.current = setTimeout(() => {
        getJobs();
        }, 500);

        return () => clearTimeout(debounceTimer.current);
    }, [query, page]);
    const containerVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.15,
        },
        },
        exit: { opacity: 0, y: -10 },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
        hover: { scale: 1.03, boxShadow: "0 8px 20px rgba(0,0,0,0.15)" },
    };

    return (
        <div className="pt-24 px-6 md:px-20 max-w-7xl mx-auto h-auto space-y-16">
        <h1 className="text-3xl font-bold mb-6">Job Listings</h1>

        <motion.input
            type="text"
            placeholder="Search jobs..."
            value={query}
            onChange={(e) => {
            setPage(1); // reset to page 1 on new search
            setQuery(e.target.value);
            }}
            className="w-full md:w-1/2 p-3 mb-8 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        />

        {loading ? (
            <div className="flex justify-center items-center min-h-[300px]">
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-20 w-20"></div>
            </div>
        ) : error ? (
            <div className="text-center text-red-600 font-semibold">{error}</div>
        ) : jobs.length === 0 ? (
            <p>No jobs found for "{query}".</p>
        ) : (
            <>
            <AnimatePresence mode="wait">
                <motion.ul
                key={`${query}-${page}`} // key triggers reanimation on page/query change
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                >
                {jobs.map((job) => (
                    <motion.li
                    key={job.job_id}
                    className="border rounded-lg p-6 cursor-pointer bg-white"
                    variants={itemVariants}
                    whileHover="hover"
                    transition={{ type: "spring", stiffness: 300 }}
                    >
                    <h2 className="text-xl font-semibold mb-1">{job.job_title}</h2>
                    <p className="text-gray-700 mb-2">
                        {job.employer_name} — {job.job_city}
                    </p>
                    <a
                        href={job.job_apply_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        Apply Now
                    </a>
                    </motion.li>
                ))}
                </motion.ul>
            </AnimatePresence>

            {/* Pagination Controls */}
            <div className="flex justify-center space-x-4 mt-10">
                <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className={`px-4 py-2 rounded ${
                    page === 1
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
                >
                Previous
                </button>
                <span className="px-4 py-2 rounded border border-gray-300">
                Page {page}
                </span>
                <button
                onClick={() => setPage((p) => p + 1)}
                className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
                >
                Next
                </button>
            </div>
            </>
        )}
        <style>{`
            .loader {
            border-top-color: #3498db;
            animation: spinner 1s linear infinite;
            }
            @keyframes spinner {
            to { transform: rotate(360deg); }
            }
        `}</style>
        </div>
    );
}
