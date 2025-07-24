import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      className="bg-gray-900 text-gray-300 py-10 mt-20 sticky bottom-0 w-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-20 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-2xl font-bold text-white">ProConnect</div>

        <div className="flex gap-6">
          <Link to="/" className="hover:text-white transition">Home</Link>
          <Link to="/jobs" className="hover:text-white transition">Jobs</Link>
          <Link to="/connections" className="hover:text-white transition">Connections</Link>
          <Link to="/about" className="hover:text-white transition">About</Link>
        </div>

        <div className="flex gap-4">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition">
            <Linkedin size={20} />
          </a>
          <a href="mailto:sj586997@gmail.com" className="hover:text-white transition">
            <Mail size={20} />
          </a>
        </div>
      </div>

      <p className="text-center text-sm text-gray-500 mt-6">
        © {new Date().getFullYear()} ProConnect. All rights reserved.
      </p>
    </motion.footer>
  );
}
