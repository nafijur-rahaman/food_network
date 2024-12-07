import React from 'react';
import secondImage from "../assets/images/about.jpg";
import appleImage from "../assets/images/apple.jpg";
import { useState, useEffect, useRef } from "react";

const BlogPost = ({ title, text, imgSrc, reverse, fontSize, onFontSizeChange }) => {

  const blogPostRef = useRef(null);
  useEffect(() => {
    if (blogPostRef.current) {
      blogPostRef.current.style.fontSize = `${fontSize}px`;
    }
  }, [fontSize]);

  return (
 <>
  
  <div className="col-span-12 lg:col-span-6 bg-white shadow-lg rounded-lg p-8 flex">
              {/* Social Icons on the Left */}
              <div className="flex flex-col space-y-4 mr-6 mt-24">
                <a
                  href="#"
                  className="text-blue-600 text-2xl hover:text-blue-800"
                >
                  <i className="fab fa-facebook" />
                </a>
                <a
                  href="https://instagram.com"
                  className="text-pink-500 text-2xl hover:text-pink-700"
                >
                  <i className="fab fa-instagram" />
                </a>
                <a
                  href="#"
                  className="text-blue-400 text-2xl hover:text-blue-600"
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  href="https://youtube.com"
                  className="text-red-600 text-2xl hover:text-red-800"
                >
                  <i className="fab fa-youtube" />
                </a>
              </div>

              {/* Blog Content */}
              <div ref={blogPostRef} className="space-y-7 w-full">
                {/* Blog Post */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-extrabold mb-4">
                      Discover the Health Benefits of Apples
                    </h3>
                    <p className="text-gray-600">
                      Apples are a rich source of dietary fiber and vitamin C,
                      making them a perfect addition to any balanced diet.
                      Regular consumption of apples has been linked to improved
                      heart health, lower cholesterol levels, and enhanced gut
                      health. Their natural antioxidants help combat free
                      radicals, reducing the risk of chronic diseases. With a
                      wide variety of flavors and textures, apples are versatile
                      enough to be enjoyed in both sweet and savory dishes, as
                      well as on their own as a healthy snack.
                    </p>
                  </div>

                  <img
                    src={appleImage}
                    alt="Fruit Blog Post"
                    className="w-full rounded-lg shadow-md"
                  />
                </div>

                <h3 className="text-xl font-semibold">
                  Apple: The Perfect test
                </h3>
                <p className="text-gray-600">
                  Apple are a powerhouse of nutrition, providing a quick and
                  natural energy boost thanks to their high carbohydrate content
                  and natural sugars. Rich in potassium, they help maintain
                  muscle function and support heart health. Bananas are also
                  known for their ability to aid digestion and promote gut
                  health due to their fiber content. Whether added to smoothies,
                  baked into bread, or enjoyed on their own, bananas are a
                  convenient and delicious option for an energy-packed snack.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <img
                    src={secondImage}
                    alt="Fruit Blog Post"
                    className="w-full rounded-lg shadow-md"
                  />
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      Bananas: The Perfect Energy Booster
                    </h3>
                    <p className="text-gray-600">
                      Aside from their convenience and taste, bananas provide
                      essential vitamins such as vitamin B6, which supports
                      brain health and aids in the production of
                      neurotransmitters. They are an excellent choice for
                      pre-workout fuel or a post-workout recovery snack.
                      Incorporating bananas into your daily diet can help you
                      meet your nutritional goals and maintain a healthy
                      lifestyle with minimal effort.
                    </p>
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
