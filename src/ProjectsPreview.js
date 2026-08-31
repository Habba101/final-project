import React from "react";
import project1 from "./images/weather-app.jpg";
import project2 from "./images/world clock.jpg";
import project3 from "./images/oasis-living.jpg";
import './Projects.css';

export default function ProjectsPreview() {
   return (
    <div className="row g-4">
   
      <div className="col-md-4">
        <div className="card h-100 shadow-sm border-0">     
          <img 
            src={project1} 
            className="card-img-top img-fluid rounded-top project-image project-card" 
            alt="Weather" 
          
          />
          <div className="card-body text-start">
            <h5 className="fw-bold">Weather App</h5>
            <p className="text-muted small">A real-time weather app built with JavaScript and API integration.</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card h-100 shadow-sm border-0">
          <img 
            src={project2} 
            className="card-img-top img-fluid rounded-top project-image project-card" 
            alt="Weather App" 
           
          />
          <div className="card-body text-start">
            <h5 className="fw-bold">World Clock</h5>
            <p className="text-muted small">A real-time world clock displaying current times across multiple cities using JavaScript.</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card h-100 shadow-sm border-0">
          <img 
            src={project3} 
            className="card-img-top img-fluid rounded-top project-image project-card" 
            alt="Interactive Dashboard" 
            
          />
          <div className="card-body text-start">
            <h5 className="fw-bold">Oasis Living</h5>
            <p className="text-muted small">A travel website built with WordPress, WooCommerce and SEO in mind.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
