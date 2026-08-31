import React from 'react';
import './Projects.css';

export default function ProjectCard({ image, title, description, badge1, badge2, badgeColor1, badgeColor2, link }) {
  return (
    <div className="col-md-6 mb-5"> 
      <div className="card h-100 shadow-sm border-0 bg-white text-center">
        
        {/* FIX 1: Safe image wrapper frame that completely prevents repeating or stretching */}
        <div style={{ height: '500px', overflow: 'hidden', borderRadius: '8px 8px 0 0', background: '#f8f9fa' }}>
          <img 
            src={image} 
            className="w-100 h-100" 
            alt={title} 
            style={{ 
              objectFit: 'contain',       /* Proportionally scales the screenshot to fill the box */
               padding: '10px'    /* Focuses on the top header part of your website screenshot */
            }} 
          />
        </div>
        
        {/* FIX 2: Standard padding padding on your card body content */}
        <div className="card-body p-4">
          
          {/* Text block stays neatly contained */}
          <div className="mb-3">
            <h5 className="fw-bold">{title}</h5>
            <p className="text-muted small">{description}</p>
          </div>
          
          {/* Neatly centered labels */}
          <div className="my-3">
            <span className={`badge bg-light ${badgeColor1} border mx-1 px-3 py-2 fs-6 fw-normal rounded-pill`}>
              {badge1}
            </span>
            <span className={`badge bg-light ${badgeColor2} border mx-1 px-3 py-2 fs-6 fw-normal rounded-pill`}>
              {badge2}
            </span>
          </div>

          {/* Centered action launch button */}
          <div className="mt-4">
            <a 
              href={link} 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-outline-dark btn-sm px-4 rounded-pill"
            >
              Launch Project 🚀
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

 