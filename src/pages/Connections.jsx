import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 📝 Mock data for connections
const mockConnections = [
  {
    id: 1,
    name: "Sachin Jaiswal",
    avatar: "/avatars/sachin.jpg",
    position: "Full Stack Developer",
    location: "Delhi, India",
  },
  {
    id: 2,
    name: "Asad Ali",
    avatar: "/avatars/asad.jpg",
    position: "UI/UX Designer",
    location: "Chhattisgarh, India",
  },
  {
    id: 3,
    name: "Kunal Dev Sahu",
    avatar: "/avatars/kunal.jpg",
    position: "Data Scientist",
    location: "Chhattisgarh, India",
  },
  {
    id: 4,
    name: "Suryansh Singh",
    avatar: "/avatars/suryansh.jpg",
    position: "DevOps Engineer",
    location: "Kanpur, India",
  },
  {
    id: 5,
    name: "Abhishek Rana",
    avatar: "/avatars/abhishek.jpg",
    position: "Backend Developer",
    location: "Kurukshetra, India",
  },
  {
    id: 6,
    name: "Ashutosh Singh",
    avatar: "/avatars/ashutosh.jpg",
    position: "Product Manager",
    location: "Prayagraj, India",
  },
  {
    id: 7,
    name: "Vikrant Yadav",
    avatar: "/avatars/vikrant.jpg",
    position: "Software Engineer",
    location: "Lucknow, India",
  },
  
];

const fetchConnections = (query = "") =>
  new Promise((resolve) => {
    setTimeout(() => {
      const filtered = mockConnections.filter((conn) =>
        conn.name.toLowerCase().includes(query.toLowerCase())
      );
      resolve(filtered);
    }, 800);
  });

export default function Connections() {
  const [connections, setConnections] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  const debounceTimer = useRef(null);

  useEffect(() => {
    setLoading(true);
    if (debounceTimer.current) clearTimeout(debounceTimer.current);

    debounceTimer.current = setTimeout(() => {
      fetchConnections(query).then((data) => {
        setConnections(data);
        setLoading(false);
      });
    }, 400);

    return () => clearTimeout(debounceTimer.current);
  }, [query]);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.15)" },
  };

  return (
    <div className="min-h-screen pt-24 px-6 md:px-20 max-w-7xl mx-auto space-y-16">
      <motion.h1
        className="text-4xl font-extrabold text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Your Connections
      </motion.h1>

      <motion.input
        type="text"
        placeholder="Search connections..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full md:w-1/2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 mx-auto block"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      />

      {loading ? (
        <div className="flex flex-col items-center gap-2 min-h-[300px]">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-indigo-400 h-16 w-16"></div>
          <p className="text-gray-500 mt-4">Loading connections...</p>
        </div>
      ) : connections.length === 0 ? (
        <p className="text-center text-gray-600 mt-10">No connections found.</p>
      ) : (
        <AnimatePresence>
          <motion.ul
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {connections.map((conn) => (
              <motion.li
                key={conn.id}
                className="bg-white rounded-xl p-6 cursor-pointer flex flex-col items-center shadow-md hover:shadow-lg transition"
                variants={itemVariants}
                whileHover="hover"
              >
                <img
                  src={conn.avatar}
                  alt={conn.name}
                  className="w-24 h-24 rounded-full object-cover mb-4"
                />
                <h2 className="text-xl font-semibold">{conn.name}</h2>
                <p className="text-gray-600">{conn.position}</p>
                <p className="text-gray-500 text-sm mt-1">{conn.location}</p>
              </motion.li>
            ))}
          </motion.ul>
        </AnimatePresence>
      )}

      {/* Loader Animation */}
      <style>{`
        .loader {
          border-top-color: #6366f1;
          animation: spinner 1s linear infinite;
        }
        @keyframes spinner {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
