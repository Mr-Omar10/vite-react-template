import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo2.png";
import cloud from "../assets/cloud2.png";
import axios from "axios";

const Home = () => {

  axios.get("http://localhost:3000").then((res) => {
    console.log(res.data);
  });

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
          className="font-montserrat bg-slate-200 text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
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
      </div>
    </nav>
    <div className="flex flex-col items-center mt-[5%] ">
      <h1 className="font-montserrat text-3xl">This is my 6 months journey to learn cloud</h1>
    </div>
    <div className="flex flex-col items-center mt-[5%] ">
      <img src={cloud} alt="cloud" className="w-1/4" />
    </div>
    </>

  );
};

export default Home;
