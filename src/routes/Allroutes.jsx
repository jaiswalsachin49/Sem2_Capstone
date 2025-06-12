import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Jobs from '../pages/Jobs'
import Connections from '../pages/Connections'
import Blog from '../pages/Blog'
import About from '../pages/About'
import Login from '../pages/Login'

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/connections" element={<Connections />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default Allroutes