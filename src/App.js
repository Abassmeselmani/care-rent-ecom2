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
import Page2 from './pages/page2blog';
import Page3 from './pages/page3blog';
import Page4 from './pages/page4blog';
import Page5 from './pages/page5blog';
import Page6 from './pages/page6blog';
import Login from './pages/login';
import Register from './pages/register';
import { AuthProvider } from './context';
import Cart from './pages/cart';
import Checkout from './pages/checkout';


function App() {
  return (
    <AuthProvider> 
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
          <Route path="/page2blog" element={<Page2 />} />
          <Route path="/page3blog" element={<Page3 />} />
          <Route path="/page4blog" element={<Page4 />} />
          <Route path="/page5blog" element={<Page5 />} />
          <Route path="/page6blog" element={<Page6 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />


        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
