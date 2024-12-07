import React, { useState } from "react";

import "./components.css";

export default function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(0);
const navItems = [
  { icon: "bx-home", activeIcon: "bxs-home", label: "Home" },
  { icon: "bx-user", activeIcon: "bxs-user", label: "User" },
  { icon: "bx-heart", activeIcon: "bxs-heart", label: "Heart" },
  { icon: "bx-folder", activeIcon: "bxs-folder", label: "Folder" },
  { icon: "bx-cog", activeIcon: "bxs-cog", label: "Settings" },
];

const handleItemClick = (index) => {
  setActiveIndex(index);
};
  return (
    <div className=" h-full bg-gray  top-0 p-4">
      <ul className="relative w-[20px] flex flex-col mt-2">
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
              className="flex items-center justify-center w-[20px] h-[90px]"
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
          className="absolute left-[-33px] top-[32px] w-[26px] h-[25px] bg-orange-500 rounded-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateY(${activeIndex * 90}px)` }}
          id="indicator"
        ></div>
      </ul>
    </div>
  );
}
