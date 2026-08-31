import React, { useState } from 'react'; 
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';


export default function App() {

  const [currentPage, setCurrentPage] = useState('home');

  function renderPage() {
    if (currentPage === 'home') {
      return <Home setCurrentPage={setCurrentPage} />;
    } else if (currentPage === 'about') {
      return <About setCurrentPage={setCurrentPage} />;
    } else if (currentPage === 'skills') {
      return <Skills />;
    } else if (currentPage === 'projects') {
      return <Projects />;
    } else if (currentPage === 'contact') {
      return <Contact />;
    }
  }

  return (
       <div 
    className="App" 
    style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh'
    }}
  > 
    <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

   <div style={{ flexGrow: 1 }}>
      {renderPage()}
    </div>
      
      <Footer />
    </div>
  );
}

 
