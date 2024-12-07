import { useState, useEffect, useRef } from "react";
import { foodItems } from "./foodData";
const BlogPost = ({ fontSize, onFontSizeChange }) => {
  const [filter, setFilter] = useState("Fruits");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFood, setSelectedFood] = useState(null);

  const filteredItems = foodItems[filter].filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleItemClick = (item) => {
    setSelectedFood(item);
  };

  const blogPostRef = useRef(null);
  useEffect(() => {
    if (blogPostRef.current) {
      blogPostRef.current.style.fontSize = `${fontSize}px`;
    }
  }, [fontSize]);

  return (
    <>
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
              onClick={() => handleItemClick(item)}
              className="flex items-center space-x-4 p-2 rounded-lg hover:outline hover:outline-orange-300 hover:outline-2 hover:text-orange-500"
            >
              <img
                src={item.image1}
                alt={item.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <button className="text-base lg:text-lg font-medium">
                  {item.name}
                </button>
                <p className="text-sm text-gray-500 mt-1">{item.vitamin}</p>
              </div>
            </li>
          ))}
        </ul>
      </aside>

      <div className="col-span-12 lg:col-span-6 bg-white shadow-lg rounded-lg p-8 flex">
        {/* Social Icons on the Left */}
        <div className="flex flex-col space-y-4 mr-6 mt-8">
          <a href="#" className="text-blue-600 text-2xl hover:text-blue-800">
            <i className="fab fa-facebook" />
          </a>
          <a
            href="https://instagram.com"
            className="text-pink-500 text-2xl hover:text-pink-700"
          >
            <i className="fab fa-instagram" />
          </a>
          <a href="#" className="text-blue-400 text-2xl hover:text-blue-600">
            <i className="fab fa-twitter" />
          </a>
          <a
            href="https://youtube.com"
            className="text-red-600 text-2xl hover:text-red-800"
          >
            <i className="fab fa-youtube" />
          </a>
        </div>

        <div ref={blogPostRef} className="space-y-7 w-full">
          {/* Blog Post */}
          {selectedFood ? (
            <div>
              {/* First Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-extrabold mb-4">
                    {selectedFood.title}
                  </h3>
                  <p className="text-gray-600">{selectedFood.description}</p>
                </div>
                <div className="order-1 md:order-2">
                  <img
                    src={selectedFood.image1}
                    alt="Fruit Blog Post"
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
              </div>

              {/* Second Section (Only Text) */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold">
                  {selectedFood.subheading1}
                </h3>
                <p className="text-gray-600">{selectedFood.subparagraph1}</p>
              </div>

              {/* Third Section (Image on Left) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
                <div className="order-1 md:order-1">
                  <img
                    src={selectedFood.image2}
                    alt="Fruit Blog Post"
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
                <div className="order-2 md:order-2">
                  <h3 className="text-xl font-semibold">
                    {selectedFood.subheading2}
                  </h3>
                  <p className="text-gray-600">{selectedFood.subparagraph2}</p>
                </div>
              </div>

              {/* Review Section */}
              <div className="mt-10">
                <h3 className="text-xl font-semibold mb-4">
                  Was this helpful?
                </h3>
                <div className="flex items-center space-x-2">
                  <button className="text-orange-500 text-2xl">★★★★☆</button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-gradient-to-r from-green-400 to-blue-500 p-6 text-lg rounded-lg shadow-lg text-center text-white font-semibold">
              <p>Please select a food item to learn more.</p>
            </div>
          )}
        </div>
      </div>

      {/* Settings Section */}
      <aside className="col-span-12 lg:col-span-3 bg-white shadow-lg rounded-lg h-[363px] lg:h-[410px] p-6 top-28">
        <div className="p-4 outline outline-gray-300 outline-1 rounded-lg shadow-md relative">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-orange-500">
              <i className="fas fa-cog mr-2 text-orange-500"></i>Settings
            </h2>
            <div className="text-orange-500">
              <i className="fas fa-arrow-up"></i>
            </div>
          </div>
          <div className="mb-6">
            <label className="block font-semibold mb-2">
              Paragraph Font Size
            </label>
            <input
              type="range"
              min="9"
              max="22"
              value={fontSize}
              className="w-full appearance-none h-2 rounded-full accent-orange-500"
              style={{
                background: `linear-gradient(to right, #f97316 ${
                  ((fontSize - 9) / (22 - 9)) * 100
                }%, #e5e7eb ${((fontSize - 9) / (22 - 9)) * 100}%)`,
              }}
              onChange={onFontSizeChange}
            />
            <div className="text-right mt-2 text-gray-600">
              <span>{fontSize}</span>px
            </div>
          </div>

          <div className="mb-6">
            <label className="block font-semibold mb-2">
              Filter by Vitamin
            </label>
            <select className="w-full bg-gray-300 border rounded-lg px-3 py-2 outline-none focus:ring focus:ring-orange-400">
              <option>Vitamin A</option>
              <option>Vitamin C</option>
              <option>Vitamin D</option>
            </select>
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="subtitle" className="font-semibold">
              Turn off Subtitles
            </label>
            <div className="relative inline-block w-12 mr-2 align-middle select-none">
              <input
                type="checkbox"
                id="subtitle"
                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
              />
              <label
                htmlFor="subtitle"
                className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
              ></label>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default BlogPost;
