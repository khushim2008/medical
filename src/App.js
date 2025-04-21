import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Games from './pages/Games';
import Exercises from './pages/Exercises';
import Ayurveda from './pages/Ayurveda';
import Storytelling from './pages/Storytelling';
import MemoryMatchGame from './pages/MemoryMatchGame';
import BrainModel from './pages/BrainModel'; // Import the BrainModel component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/ayurveda" element={<Ayurveda />} />
        <Route path="/storytelling" element={<Storytelling />} />
        <Route path="/brain-model" element={<BrainModel />} /> {/* Added BrainModel route */}
      </Routes>
    </Router>
  );
};

export default App;
