import React from 'react'
import { Link } from "react-router-dom";
import logo from "../assets/logo2.png";


const Admin = () => {
  return (
    <>
    <nav className="flex justify-between p-2">
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} alt="logo" className="w-24 " />
        </Link>
        <h4 className="font-montserrat ">Omar Huseynov</h4>
      </div>
      <div className="flex items-center">
        <Link
          to="/"
          className="font-montserrat  text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="font-montserrat text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
        >
          About me
        </Link>
        <Link
          to="/projects"
          className="font-montserrat text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
        >
          Projects
        </Link>
        <Link
          to="/contact"
          className="font-montserrat text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
        >
          Contact
        </Link>
        <Link
          to="/admin-4140mGK0M3"
          className="font-montserrat text-gray-500 bg-slate-200 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
        >
          Admin
        </Link>
      </div>
    </nav>
    <div className="flex  justify-center">
        <div className="flex flex-col items-center space-y-10">
            <h1 className="text-4xl font-montserrat">Welcome back Omar</h1>
            <p className="text-2xl font-montserrat">What do want to do?</p>
        </div>
    </div>
    <div className="flex flex-col items-center space-y-10 mt-[5%]">
            <Link to="/admin-4140mGK0M3/add-project">
                <button className="bg-slate-200 hover:bg-slate-300 text-gray-500 font-montserrat font-bold py-2 px-4 rounded">
                    Add Project
                </button>
            </Link>
            <Link to="/admin-4140mGK0M3/edit-project">
                <button className="bg-slate-200 hover:bg-slate-300 text-gray-500 font-montserrat font-bold py-2 px-4 rounded">
                    Edit Project
                </button>
            </Link>
            <Link to="/admin-4140mGK0M3/delete-project">
                <button className="bg-slate-200 hover:bg-slate-300 text-gray-500 font-montserrat font-bold py-2 px-4 rounded">
                    Delete Project
                </button>
            </Link>
        </div>
    </>

  )
}

export default Admin