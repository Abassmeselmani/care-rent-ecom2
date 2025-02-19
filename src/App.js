import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Home from './pages/home';
import Navbar from './components/navbar/navbar';
import Rent from './pages/rent';
import Gold from './pages/gold';
import About from './pages/about';
import FAQ from './pages/faq';
import Blog from './pages/Blog';
import Contact from './pages/contact';
import Page1 from './pages/pageb1blog';






function App() {
  return (
    <div className="App">
      <Navbar />
       
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/gold" element={<Gold />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pageb1blog" element={<Page1 />} />

      </Routes>
    </div>
  );
}

export default App;
