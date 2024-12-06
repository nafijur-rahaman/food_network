import { useState } from 'react'
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import BlogPost from './components/BlogPost'
import Settings from './components/Settings'


function App() {
  const [fontSize, setFontSize] = useState(16);
  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value);
  };

  return (
    <div>
        <Navbar />
        
    <div className="bg-blue-500 rounded-lg p-2 text-gray-800 ">


      <div className="container  mx-auto mt-24 grid grid-cols-12 gap-3 2xl:px-1 px-12 mb-20">
         <Filter/>
          <BlogPost
            title="Discover the Health Benefits of Apples"
            text="Apples are not only delicious but packed with essential nutrients..."
            imgSrc="https://via.placeholder.com/400x300"
          
             />
          <Settings fontSize={fontSize} onFontSizeChange={handleFontSizeChange}/>
        </div>
      </div>
    </div>

  )
}

export default App
 