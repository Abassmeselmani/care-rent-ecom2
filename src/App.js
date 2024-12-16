import './App.css';
import { Routes, Route } from 'react-router-dom'; 
import Home from './pages/home';
import Navbar from './components/navbar/navbar';
import Rent from './pages/rent';
import Gold from './pages/gold';
import About from './pages/about';
import FAQ from './pages/faq';




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
      </Routes>
    </div>
  );
}

export default App;
