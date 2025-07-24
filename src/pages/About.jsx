// pages/about.jsx
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 pt-24 pb-16 space-y-10 min-h-[77vh]">
      <motion.h1
        className="text-4xl font-bold text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        About Us
      </motion.h1>

      <motion.div
        className="space-y-6 text-gray-700 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <p>
          Welcome to <strong>Pro-Connect</strong>, a professional networking platform built with students and early-career professionals in mind.
        </p>
        <p>
          Our mission is to bridge the gap between talent and opportunity. Whether you're searching for jobs, making meaningful connections, or building your career— Pro-Connect is your launchpad.
        </p>
        <p>
          <strong>Tech Stack:</strong> React, Tailwind CSS, Framer Motion
        </p>
        <p>
          This platform is a capstone project built by <strong>Sachin Jaiswal</strong> and is meant for educational purposes only.
        </p>
      </motion.div>
    </div>
  );
}
