import React from 'react';
import './About.css';

export default function About( {setCurrentPage }) {
  return (
    <div className="container my-5">
      <div className="row pt-4 align-items-start">
        
        <div className="col-md-6 text-start pe-md-4 pe-lg-5">
          <h2 className="fw-bold mb-4">About Me</h2>
          
          <p className="lead text-dark mb-4">
            Hi, I'm Rahaba! I am a passionate Junior Front-End Developer based in South Africa. 
            My journey into tech started from a curiosity about how things work on the internet, which quickly turned into a love for crafting clean, responsive user interfaces.
          </p>
          
          <p className="text-muted mb-4">
            I love combining code and design to build websites that look amazing and feel seamless to use-and yes, I’ve learned that sometimes the problem is not the code. Sometimes it’s simply that I forgot a semicolon. My background has also taught me to be curious, patient and persistent, especially when something isn't working the way it should. Those are probably some of the skills I use most as I continue growing as a developer.
          </p>
          
          <p className="text-muted mb-5">
            When I'm not writing code or debugging, you can find me exploring new design trends, learning new developer tools, or refining my current projects to make sure they are completely optimized for mobile and desktop screens.
          </p>

          <button onClick={() => setCurrentPage('contact')} className="btn btn-dark btn-lg px-4">
  Get In Touch
</button>
        </div>

        <div className="col-md-5 offset-md-1 text-center text-md-start">
          <div className="card shadow-sm border-0 bg-light p-4 rounded-3 mt-5">
            <h4 className="fw-bold mb-4 text-primary text-center text-md-start">Quick Facts</h4>
            
            <div className="mb-3">
              <h6 className="fw-bold text-uppercase text-muted mb-1" style={{ fontSize: '0.8rem' }}>Role</h6>
              <p className="text-dark mb-0">Junior Front-End Developer</p>
            </div>
            
            <div className="mb-3">
              <h6 className="fw-bold text-uppercase text-muted mb-1" style={{ fontSize: '0.8rem' }}>Core Focus</h6>
              <p className="text-dark mb-0">Responsive Web Design, Single Page Applications (SPAs)</p>
            </div>
            
            <div className="mb-3">
              <h6 className="fw-bold text-uppercase text-muted mb-1" style={{ fontSize: '0.8rem' }}>Interests</h6>
              <p className="text-dark mb-0">UI/UX Design, Web Accessibility, API Integration</p>
            </div>

            <div className="mb-0">
              <h6 className="fw-bold text-uppercase text-muted mb-1" style={{ fontSize: '0.8rem' }}>Mindset</h6>
              <p className="text-dark mb-0">Continuous learning and breaking complex layouts into modular components.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}



