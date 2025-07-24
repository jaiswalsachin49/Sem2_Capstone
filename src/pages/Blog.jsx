// pages/blog.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// 📝 Mock blog posts
const blogPosts = [
  {
    id: 1,
    title: "How to Land Your First Tech Job",
    excerpt: "Breaking into tech can feel tough, but here’s how to make it easier...",
    author: "Riya Mehta",
    date: "July 20, 2025",
    tags: ["Career", "Job Tips"],
  },
  {
    id: 2,
    title: "5 Resume Mistakes to Avoid",
    excerpt: "Your resume is your first impression. Don't ruin it with these mistakes...",
    author: "Aman Srivastava",
    date: "July 18, 2025",
    tags: ["Resume", "Advice"],
  },
  {
    id: 3,
    title: "Networking That Actually Works",
    excerpt: "Learn the art of building meaningful professional connections...",
    author: "Pooja Singh",
    date: "July 15, 2025",
    tags: ["Networking", "Soft Skills"],
  },
];

export default function Blog() {
  return (
    <div className="max-w-5xl mx-auto px-4 pt-24 pb-16 space-y-12 min-h-screen">
      <motion.h1
        className="text-4xl font-bold text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Latest Blog Posts
      </motion.h1>

      <div className="grid gap-8 md:grid-cols-1">
        {blogPosts.map((post) => (
          <motion.div
            key={post.id}
            className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-3">{post.excerpt}</p>
            <div className="text-sm text-gray-500 flex justify-between">
              <span>👤 {post.author}</span>
              <span>📅 {post.date}</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded">
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
