import React from "react";
import "./components.css";
import logo from "../assets/images/logo.png";
const Navbar = () => {
 
  return (
    <nav className="bg-gray text-white px-2 lg:px-6 py-4 lg:py-4 flex flex-wrap items-center justify-between  top-0 w-full  z-10">
    {/* Logo */}
    <div className="text-orange-500 w-16 md:w-28 font-bold">
      <img src={logo} />
    </div>

    {/* Search Box */}
    <div className="flex items-center  justify-center md:mx-6 w-[40%] relative">
      <input
        type="text"
        placeholder="Search..."
        className="w-full pl-10 pr-4 py-2 text-gray-800 border rounded-full focus:outline-none focus:ring focus:ring-orange-300"
      />
      <i className="bx bx-search absolute left-3 text-orange-500 text-xl"></i>
    </div>

    {/* Right Icons */}
    <div className="flex space-x-4 text-orange-500">
      <i className={`bx bx-sun text-2xl cursor-pointer`}></i>
      <i
        className={`bx bx-message text-2xl cursor-pointer text-gray-500`}
      ></i>
      <i className={`bx bx-menu text-2xl cursor-pointer text-gray-500`}></i>
    </div>
  </nav>
  );
};

export default Navbar;
