"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./page.css";

export default function Home() {
  const [email, setEmail] = useState("");

  const featuredJobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechSolutions Inc.",
      location: "Remote",
      type: "Full-time",
      postedDate: "2 days ago",
    },
    {
      id: 2,
      title: "Marketing Manager",
      company: "GrowthBrand",
      location: "New York, NY",
      type: "Full-time",
      postedDate: "1 week ago",
    },
    {
      id: 3,
      title: "UX Designer",
      company: "Creative Studios",
      location: "San Francisco, CA",
      type: "Contract",
      postedDate: "3 days ago",
    },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "10 Tips to Ace Your Next Technical Interview",
      excerpt: "Prepare effectively with these proven strategies...",
      author: "Sarah Johnson",
      date: "April 28, 2025",
      readTime: "5 min read",
      category: "Career Advice",
    },
    {
      id: 2,
      title: "Networking in the Digital Age: Building Meaningful Connections",
      excerpt: "Learn how to expand your professional network...",
      author: "David Chen",
      date: "April 25, 2025",
      readTime: "7 min read",
      category: "Networking",
    },
  ];

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("Sign up with:", email);
    setEmail("");
  };

  return (
    <div className="main">
      <section className="hero">
        <div className="hero-content">
          <h1>Connect, Collaborate, and Advance Your Career</h1>
          <p>
            ProConnect helps professionals find meaningful opportunities and build
            valuable connections in their industry.
          </p>
          <div className="hero-cta">
            <Link href="/signup" className="btn btn-primary">
              Join ProConnect
            </Link>
            <Link href="/jobs" className="btn btn-secondary">
              Find Opportunities
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="/home.png" alt="Professional networking" className="banner" />
        </div>
      </section>

      <section className="search-section">
        <div className="search-container">
          <div className="search-input">
            <span className="search-icon">🔍</span>
            <input type="text" placeholder="Search for jobs, people, or articles..." />
          </div>
          <button className="search-btn">Search</button>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose ProConnect?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <span className="icon-placeholder">💼</span>
            </div>
            <h3>Discover Opportunities</h3>
            <p>
              Access thousands of job listings tailored to your skills and
              preferences.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <span className="icon-placeholder">👥</span>
            </div>
            <h3>Expand Your Network</h3>
            <p>
              Connect with professionals in your industry and build meaningful
              relationships.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <span className="icon-placeholder">📄</span>
            </div>
            <h3>Expert Insights</h3>
            <p>
              Stay informed with the latest industry trends and career advice from
              experts.
            </p>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h2>How ProConnect Works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Create Your Profile</h3>
            <p>Showcase your skills, experience, and career aspirations.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Build Your Network</h3>
            <p>Connect with colleagues, classmates, and industry professionals.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Find Opportunities</h3>
            <p>Apply for jobs that match your qualifications and interests.</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Grow Your Career</h3>
            <p>Access resources and insights to advance professionally.</p>
          </div>
        </div>
      </section>

      <section className="featured-jobs">
        <div className="section-header">
          <h2>Featured Job Opportunities</h2>
          <Link href="/jobs" className="view-all">
            View All Jobs
          </Link>
        </div>
        <div className="jobs-grid">
          {featuredJobs.map((job) => (
            <div key={job.id} className="job-card">
              <div className="job-card-header">
                <h3>{job.title}</h3>
                <span className="job-type">{job.type}</span>
              </div>
              <div className="job-card-company">{job.company}</div>
              <div className="job-card-details">
                <span className="job-location">{job.location}</span>
                <span className="job-date">{job.postedDate}</span>
              </div>
              <Link href={`/jobs/${job.id}`} className="btn btn-outline">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials">
        <h2>Success Stories</h2>
        <div className="testimonial-carousel">
          <div className="testimonial">
            <div className="testimonial-content">
              <p>
                "ProConnect helped me land my dream job at a leading tech company.
                The networking features and job recommendations were exactly what I
                needed to take my career to the next level."
              </p>
            </div>
            <div className="testimonial-author">
              <img
                src="mypfp.jpeg"
                alt="User avatar"
                className="testimonial-avatar"
              />
              <div className="testimonial-info">
                <h4>Sachin Jaiswal</h4>
                <p>Software Engineer at TechGiant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-preview">
        <div className="section-header">
          <h2>Career Insights & Advice</h2>
          <Link href="/blog" className="view-all">
            Visit Our Blog
          </Link>
        </div>
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-card">
              <div className="blog-category">{post.category}</div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <div className="blog-meta">
                <span>{post.author}</span>
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <Link href={`/blog/${post.id}`} className="read-more">
                Read More
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="signup-cta">
        <div className="cta-content">
          <h2>Ready to Advance Your Career?</h2>
          <p>
            Join thousands of professionals who are already using ProConnect to
            find opportunities and grow their network.
          </p>
          <form onSubmit={handleSignUp} className="signup-form">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
            />
            <button type="submit" className="btn btn-primary">
              Get Started
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}