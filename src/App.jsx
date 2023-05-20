import React from 'react'
import { BrowserRouter , Route, Routes, HashRouter } from 'react-router-dom'

// pages
import Home from './client/Home'
import About from './client/About'
import Project from './client/Project'
import Contact from './client/Contact'
import Admin from './client/Admin'
import AddProject from './client/AddProject'

const App = () => {
  return (
    <BrowserRouter basename="/#">
      <Routes>
        <Route path="/" basename="/" element={<Home />} />
        <Route path="/about" basename="/about" element={<About />} />
        <Route path="/projects" basename="/projects" element={<Project />} />
        <Route path="/contact" basename="/contact" element={<Contact />} />
        <Route path="/admin-4140mGK0M3" element={<Admin />} />
        <Route path="/admin-4140mGK0M3/add-project" element={<AddProject />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
