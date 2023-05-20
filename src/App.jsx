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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin-4140mGK0M3" element={<Admin />} />
        <Route path="/admin-4140mGK0M3/add-project" element={<AddProject />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
