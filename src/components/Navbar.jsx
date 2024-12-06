import React, { useState } from "react";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const navItems = [
    { icon: "bx-home", activeIcon: "bxs-home", label: "Home" },
    { icon: "bx-user", activeIcon: "bxs-user", label: "User" },
    { icon: "bx-heart", activeIcon: "bxs-heart", label: "Heart" },
    { icon: "bx-folder", activeIcon: "bxs-folder", label: "Folder" },
    { icon: "bx-cog", activeIcon: "bxs-cog", label: "Settings" },
  ];

  const topIcons = ["", "bx-message", "bx-menu"];

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      {/* Top Navbar */}
      <div className="fixed top-0 left-0 w-full bg-white  flex items-center justify-between px-6 h-16 z-50">
        {/* Logo */}
        <div className="text-orange-500 text-2xl font-bold">Logo</div>

        {/* Search Box */}
        <div className="flex items-center justify-center mx-6 w-[40%] relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring focus:ring-orange-300"
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
      </div>


      {/* Vertical Navbar */}
      <div className="fixed left-0 top-0 h-full flex flex-col items-center mt-14 w-[100px] bg-white z-50">
        <ul className="relative flex flex-col mt-14">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`relative ${
                activeIndex === index ? "text-orange-500" : "text-gray"
              }`} // Apply orange color when active
              onClick={() => handleItemClick(index)}
            >
              <a
                href="#"
                className="flex items-center justify-center w-[120px] h-[90px]"
              >
                {/* Active Icon */}
                <i
                  className={`bx ${item.icon} text-2xl ${
                    activeIndex === index ? "hidden" : "block"
                  } transition-colors duration-300`}
                ></i>

                {/* Inactive Icon */}
                <i
                  className={`bx ${item.activeIcon} text-2xl ${
                    activeIndex === index ? "block" : "hidden"
                  } transition-colors duration-300`}
                ></i>
              </a>
            </li>
          ))}
          {/* Indicator */}
          <div
            className="absolute left-[-19px] top-[40px] w-[36px] h-[25px] bg-orange-500 rounded-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateY(${activeIndex * 90}px)` }}
            id="indicator"
          ></div>
        </ul>
      </div>
      
    </div>
  );
};

export default Navbar;
