import React from 'react';
import appleImage from '../assets/images/product-10.jpg'
import secondImage from '../assets/images/about.jpg'
const BlogPost = ({ title, text, imgSrc, reverse, fontSize, onFontSizeChange }) => {
  return (
    <div className="col-span-8 bg-white shadow-lg rounded-lg w-[770px] 2xl:w-[1010px] ml-[55px] p-6 flex">

      {/* Social Icons on the Left */}
      <div className="flex flex-col space-y-4 mr-6 mt-24">
        <a href="#" className="text-blue-600 text-2xl hover:text-blue-800">
          <i className="fab fa-facebook" />
        </a>
        <a href="goggle.com" className="text-pink-500 text-2xl hover:text-pink-700">
          <i className="fab fa-instagram" />
        </a>
        <a href="#" className="text-blue-400 text-2xl hover:text-blue-600">
          <i className="fab fa-twitter" />
        </a>
        <a href="google.com" className="text-red-600 text-2xl hover:text-red-800">
          <i className="fab fa-youtube" />
        </a>
      </div>

      {/* Blog Content */}
      <div className="space-y-7 w-full">
  {/* Blog Post */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-2xl font-extrabold mb-4">
        Discover the Health Benefits of Apples
      </h3>
      <p className="text-gray-600">
        Apples are not only delicious but packed with essential nutrients.
        Learn how apples can be a game-changer in your diet.
        Apples are not only delicious but packed with essential nutrients.
        Learn how apples can be a game-changer in your diet.
        Apples are not only delicious but packed with essential nutrients.
        Learn how apples can be a game-changer in your diet.
        Apples are not only delicious but packed with essential nutrients.
  
      </p>
    </div>

    <img
      src={appleImage}
      alt="Fruit Blog Post"
      className="w-full rounded-lg shadow-md"
    />
  </div>

  <h3 className="text-xl font-semibold">
    Bananas: The Perfect Energy Booster
  </h3>
  <p className="text-gray-600">
    Packed with potassium and natural sugars, bananas are a quick and
    healthy energy boost. Whether as a snack or part of a meal, bananas
    can fuel your day! Packed with potassium and natural sugars, bananas are a quick and
    healthy energy boost. Whether as a snack or part of a meal, bananas
    can fuel your day! Packed with potassium and natural sugars, bananas are a quick and
    healthy energy boost. Whether as a snack or part of a meal, bananas
    can fuel your day! Packed with potassium and natural sugars, bananas are a quick and
    healthy energy boost. Whether as a snack or part of a meal, bananas
    can fuel your day!
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
        Packed with potassium and natural sugars, bananas are a quick and
        healthy energy boost. Whether as a snack or part of a meal, bananas
        can fuel your day!
      </p>
    </div>
  </div>

  {/* Review Section */}
  <div className="mt-10">
    <h3 className="text-xl font-semibold mb-4">Was this helpful?</h3>

    <div className="flex items-center space-x-2">
      <button className="text-yellow-500 text-2xl">⭐⭐⭐⭐⭐</button>
 
    </div>
    
    {/* Optional text feedback */}
    <div className="mt-4">
      <textarea
        className="w-full p-3 border rounded-md"
        placeholder="Leave a comment (optional)"
        rows="3"
      ></textarea>
    </div>

    <div className="mt-4">
      <button className="bg-blue-500 text-white py-2 px-4 rounded-md">Submit Feedback</button>
    </div>
  </div>
</div>

    </div>
  );
};

export default BlogPost;
