import React, { useEffect, useState } from "react";
import { Link,NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const companies = [
  { id: 1, name: "Google", logo: "/google.png" },
  { id: 2, name: "Microsoft", logo: "/microsoft.png" },
  { id: 3, name: "Netflix", logo: "/netflix.png" },
  { id: 4, name: "Amazon", logo: "/amazon.png" },
  { id: 5, name: "Apple", logo: "/apple.png" },
  { id: 6, name: "Adobe", logo: "/adobe.png" },
  { id: 7, name: "Meta", logo: "/meta.png" },
  { id: 8, name: "Tesla", logo: "/tesla.png" },
  { id: 9, name: "Spotify", logo: "/spotify.png" },
];

const mockJobs = [
  {
    job_id: "1",
    job_title: "Frontend Developer",
    employer_name: "ExampleCorp",
    job_apply_link: "https://example.com/apply",
  },
  {
    job_id: "2",
    job_title: "Backend Developer",
    employer_name: "CodeBase",
    job_apply_link: "https://example.com/apply",
  },
  {
    job_id: "3",
    job_title: "Full Stack Engineer",
    employer_name: "Techify",
    job_apply_link: "https://example.com/apply",
  },
  {
    job_id: "4",
    job_title: "Product Designer",
    employer_name: "PixelPerfect",
    job_apply_link: "https://example.com/apply",
  },
  {
    job_id: "5",
    job_title: "Data Scientist",
    employer_name: "DataDriven",
    job_apply_link: "https://example.com/apply",
  },
  {
    job_id: "6",
    job_title: "DevOps Engineer",
    employer_name: "CloudMasters",
    job_apply_link: "https://example.com/apply",
  },
  {
    job_id: "7",
    job_title: "UI/UX Designer",
    employer_name: "DesignHub",
    job_apply_link: "https://example.com/apply",
  },
  {
    job_id: "8",
    job_title: "Software Engineer",
    employer_name: "CodeCrafters",
    job_apply_link: "https://example.com/apply",
  },
];

const users = [
  { id: 1, name: "Sachin Jaiswal", role: "Web Developer" },
  { id: 2, name: "Asad Ali", role: "UI/UX Designer" },
  { id: 3, name: "Kunal Dev Sahu", role: "Data Analyst" },
  { id: 4, name: "Vikrant Yadav", role: "Software Engineer" },
  { id: 5, name: "Ashutosh Singh", role: "Product Manager" },
  { id: 6, name: "Abhishek Rana", role: "Full Stack Developer" },
];

const API_KEY = "f5a96cbf8dmsh21b12d1aa380f11p165452jsnf2e04ad80659";
const fetchFeaturedJobs = async () => {
  try {
    const res = await fetch(
      "https://jsearch.p.rapidapi.com/search?query=Frontend%20Developer&page=1&num_pages=1",
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": API_KEY,
          "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
        },
      }
    );
    const data = await res.json();
    return data.data || [];
  } catch (err) {
    console.error("Failed to fetch jobs:", err);
    return [];
  }
};


export default function Home() {
  const [featuredJobs, setFeaturedJobs] = useState([]);
  const [loadingJobs, setLoadingJobs] = useState(true);

  useEffect(() => {
  fetchFeaturedJobs()
    .then((jobs) => {
      if (jobs.length === 0) {
        setFeaturedJobs(mockJobs);
      } else {
        setFeaturedJobs(jobs);
      }
    })
    .catch(() => setFeaturedJobs(mockJobs))
    .finally(() => setLoadingJobs(false));
}, []);

  return (
    <div className="pt-20 px-6 md:px-20 max-w-7xl mx-auto space-y-16">
      <section className="text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-xl p-16 relative overflow-hidden">
        <div
          className="absolute -top-20 -left-20 w-72 h-72 bg-pink-400 opacity-30 rounded-full filter blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-20 -right-20 w-72 h-72 bg-indigo-400 opacity-30 rounded-full filter blur-3xl"
          aria-hidden="true"
        />
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold max-w-4xl mx-auto relative z-10"
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Empower Your Career with Connections & Opportunities
        </motion.h1>
        <motion.p
          className="mt-6 max-w-3xl mx-auto text-lg md:text-xl relative"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Join thousands of professionals and top companies. Discover jobs,
          build connections, and grow your career.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <NavLink
            to="/login"
            className="mt-12 inline-block px-10 py-3 bg-white text-indigo-700 font-semibold rounded-full shadow-lg hover:bg-indigo-50 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
          >
            Get Started
          </NavLink>
        </motion.div>
      </section>

      <div>
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Companies
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {companies.map((c) => (
            <motion.div
              key={c.id}
              className="border p-6 rounded-lg flex items-center gap-4 bg-white shadow hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <img src={c.logo} alt={c.name} className="w-16 h-16" />
              <span className="text-xl font-medium">{c.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Jobs
        </motion.h2>

        {loadingJobs ? (
          <p className="text-gray-500 text-lg">Fetching jobs for you...</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {featuredJobs.slice(0, 8).map((job) => (
              <motion.div
                key={job.job_id}
                className="border p-5 rounded-lg bg-white shadow hover:shadow-lg"
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="text-xl font-semibold mb-1">{job.job_title}</h3>
                <p className="text-gray-600 mb-2">{job.employer_name}</p>
                <a
                  href={job.job_apply_link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Apply Now
                </a>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <div>
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Top Community Members
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {users.map((u) => (
            <motion.div
              key={u.id}
              className="p-5 border rounded-lg bg-white text-center shadow hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-1">{u.name}</h3>
              <p className="text-gray-500">{u.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
