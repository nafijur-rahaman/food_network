import { useState } from "react";
import Navbar from "./components/Navbar";
import BlogPost from "./components/BlogPost";
import Sidebar from "./components/Sidebar";

function App() {
  const [fontSize, setFontSize] = useState(14);
  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value);
  };

  return (
    <>
      <Navbar />

      <div className="flex mt-[7px]">
        <Sidebar />

        <div className="  bg-blue-50  px-4 ">
          <div className=" mx-auto  grid grid-cols-1 lg:grid-cols-12 mt-8 lg:mt-4  mb-12  gap-6">
            <BlogPost
              fontSize={fontSize}
              onFontSizeChange={handleFontSizeChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
