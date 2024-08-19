import './index.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import About from './pages/About';
import Works from './pages/Works';
import Contact from './pages/Contact';
import Home from './pages/Header';
import Navbar from './Components/Navbar';
import AnimatedCursor from 'react-animated-cursor';

function App() {

  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    fetch("/resumeData.json")
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data)
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <AnimatedCursor
          innerSize={8}
          color='255, 180, 0'
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}

        />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home data={resumeData.main} />} />
          <Route path='/about' element={<About main={resumeData.main} resume={resumeData.resume} />} />
          <Route path='/works' element={<Works data={resumeData} />} />
          <Route path='/contact' element={<Contact data={resumeData.main} />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
