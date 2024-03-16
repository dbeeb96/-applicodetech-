// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './menu/Menu';
import Home from './Home/Home';
import Services from './services/Services';
import Contact from './contact/Contact';
import About from './about/About';
import Footer from './Footer/Footer';
import Blog from './blog/blog'; 

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/formations" element={<Blog />} />
        </Routes>
         {/* Include the Footer component */}
      <Footer />
      </div>
    </Router>
  );
}

export default App;
