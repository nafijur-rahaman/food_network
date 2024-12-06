import { useState } from "react";
import React from 'react'
import './components.css'
export default function Settings({fontSize, onFontSizeChange}) {
  const [isSubtitlesOff, setIsSubtitlesOff] = useState(false);
  return (
    <aside className="col-span-2 bg-white shadow-lg rounded-lg p-6  h-[390px] w-[250px] 2xl:w-[290px] ml-[42px] 2xl:ml-[60px] top-24">
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
    <label className="block font-semibold mb-2">Paragraph Font Size</label>
    <input
      type="range"
      min="10"
      max="36"
      value={fontSize}
      className="w-full appearance-none h-2 rounded-full accent-orange-500"
      style={{
        background: `linear-gradient(to right, #f97316 ${(fontSize - 10) / (36 - 10) * 100}%, #e5e7eb ${(fontSize - 10) / (36 - 10) * 100}%)`,
      }}
      onChange={onFontSizeChange}
    />
    <div className="text-right mt-2 text-gray-600">
      <span>{fontSize}</span>px
    </div>
  </div>

  <div className="mb-6">
    <label className="block font-semibold mb-2">Filter by Vitamin</label>
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
  )
}
