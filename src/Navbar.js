import React from 'react';
import './Navbar.css';

export default function Navbar({ currentPage, setCurrentPage }) {
  return (
    <header className="App-header bg-dark py-3">
      <div className="container">
        <nav className="d-flex justify-content-between align-items-center">
          
          {/* Brand logo link changes page to home */}
          <a 
            href="#" 
            className="text-white text-decoration-none fw-bold fs-4"
            onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }}
          >
            Rahaba Motaung
          </a>
          
          <ul className="d-flex gap-4 list-unstyled mb-0">
            {/* If currentPage equals 'home', give it the 'active' class */}
            <li>
              <a 
                href="#" 
                className={currentPage === 'home' ? 'active' : ''} 
                onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className={currentPage === 'home-about' || currentPage === 'about' ? 'active' : ''} 
                onClick={(e) => { e.preventDefault(); setCurrentPage('about'); }}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className={currentPage === 'skills' ? 'active' : ''} 
                onClick={(e) => { e.preventDefault(); setCurrentPage('skills'); }}
              >
                Skills
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className={currentPage === 'projects' ? 'active' : ''} 
                onClick={(e) => { e.preventDefault(); setCurrentPage('projects'); }}
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className={currentPage === 'contact' ? 'active' : ''} 
                onClick={(e) => { e.preventDefault(); setCurrentPage('contact'); }}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

 
