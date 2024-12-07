import React, { useState } from "react";
import appleImage from "../assets/images/apple.jpg";
import strawberryImage from "../assets/images/strawberry.jpg";
import carrotImage from "../assets/images/carrot.jpg";
import tomatoImage from "../assets/images/tomato.jpg";
export default function Filter() {
  const [filter, setFilter] = useState("Fruits");
  const [searchTerm, setSearchTerm] = useState("");

  const foodItems = {
    Fruits: [
      { name: "Apple", vitamin: "A", image: appleImage },
      { name: "Strawberry", vitamin: "C", image: strawberryImage },
      { name: "Banana", vitamin: "B6", image: appleImage },
      { name: "Orange", vitamin: "C", image: appleImage },
      { name: "Mango", vitamin: "A", image: appleImage },
    ],
    Vegetables: [
      { name: "Carrot", vitamin: "C", image: carrotImage },
      { name: "Tomato", vitamin: "C", image: tomatoImage },
      { name: "Spinach", vitamin: "K", image: carrotImage },
      { name: "Broccoli", vitamin: "C", image: carrotImage },
      { name: "Potato", vitamin: "B6", image: carrotImage },
    ],
  };
  const filteredItems = foodItems[filter].filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <aside className="col-span-12 lg:col-span-3 bg-white shadow-lg rounded-lg p-6 md:p-4 lg:p-4 h-auto lg:h-[700px] top-28 overflow-auto">
    <h2 className="text-lg lg:text-xl font-bold mb-4 lg:mb-6 text-gray-800">
      Filter
    </h2>

    {/* Toggle Buttons */}
    <div className="mb-4 lg:mb-6 grid grid-cols-2 gap-2">
      <button
        onClick={() => setFilter("Fruits")}
        className={`px-4 py-2 text-sm rounded-lg shadow-md focus:ring focus:ring-orange-400 transition ${
          filter === "Fruits"
            ? "bg-orange-500 text-white font-bold"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        Fruits
      </button>
      <button
        onClick={() => setFilter("Vegetables")}
        className={`px-4 py-2 text-sm rounded-lg shadow-md focus:ring focus:ring-orange-400 transition ${
          filter === "Vegetables"
            ? "bg-orange-500 text-white font-bold"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        Vegetables
      </button>
    </div>

    {/* Search Input */}
    <div className="mb-4 lg:mb-6 relative">
      <input
        type="text"
        placeholder={`Search ${filter.toLowerCase()}...`}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full border rounded-lg px-3 py-2 pl-10 focus:ring focus:ring-orange-300 outline-none"
      />
      <i className="bx bx-search absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-500 text-lg"></i>
    </div>

    {/* Filtered Food List */}
    <ul className="space-y-4 text-gray-800">
      {filteredItems.map((item, index) => (
        <li
          key={index}
          className="flex items-center space-x-4 p-2 rounded-lg hover:outline hover:outline-orange-300 hover:outline-2 hover:text-orange-500"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <button className="text-base lg:text-lg font-medium">
              {item.name}
            </button>
            <p className="text-sm text-gray-500 mt-1">
              Vitamin {item.vitamin}
            </p>
          </div>
        </li>
      ))}
    </ul>
  </aside>

  );
}
