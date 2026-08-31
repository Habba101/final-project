import React from "react";
import Profile from "./images/profile.jpg"; 
import ProjectsPreview from "./ProjectsPreview"; 

export default function Home({ setCurrentPage }) {
  return (
    <div className="home-container">
      <section className="bg-light py-5 mb-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start"> 
  <span className="text-primary fw-bold text-uppercase tracking-wider">Junior Front-End Developer</span>
  <h1 className="display-4 fw-bold mt-2 mb-3">Hi, I'm Rahaba Motaung</h1>
  <p className="lead text-muted mb-4">
    I build responsive websites and web applications with HTML, CSS, JavaScript and React—and I genuinely enjoy figuring out why things refuse to work until they finally do.
    <hr/>
Based in South Africa, always learning, always building, and occasionally arguing with CSS.
  </p>
  
  <div style={{ 
  display: 'flex', 
  justifyContent: 'center', 
  flexWrap: 'wrap', 
  gap: '20px', 
  marginTop: '20px' 
}}>
  <button 
    onClick={() => setCurrentPage('projects')} 
    className="btn btn-dark btn-lg px-4"
  >
    View My Work
  </button>
  
  <button 
    onClick={() => setCurrentPage('contact')} 
    className="btn btn-outline-dark btn-lg px-4"
  >
    Let's Talk
  </button>
</div>
</div>
            <div className="col-md-6 text-center mt-4 mt-md-0">
              <img src={Profile} alt="Profile" className="img-fluid rounded-circle shadow-lg img-thumbnail" style={{ maxWidth: '380px', height: '380px',  objectFit: 'cover', border: '4px solid #fff' }} />
            </div>
          </div>
        </div>
      </section>
      <section className="container my-5">
        <div className="d-flex justify-content-between align-items-end mb-4">
          <h2 className="fw-bold mb-0">Featured Projects</h2>
         <a 
  href="#" 
  className="text-primary text-decoration-none fw-semibold"
  onClick={(e) => { e.preventDefault(); setCurrentPage('projects'); }}
>
  See All Projects →
</a>

        </div>
        <ProjectsPreview />
      </section>

    </div>
  );
} 