import React from "react";
import './Skills.css';

export default function Skills() {
    return (
    <div className="container my-5 text-start">
      
    
      <div className="text-center mb-5">
        <h2 className="fw-bold">My Technical Skills</h2>
        <p className="text-muted lead">The web technologies and tools I use to build digital solutions.</p>
      </div>

  
      <div className="row g-4 justify-content-center">
        
    
        <div className="col-md-6">
          <div className="card h-100 shadow-sm border-0 p-4 bg-light">
            <h4 className="fw-bold mb-4 text-dark">Frontend Development</h4>
            
            <ul className="list-unstyled fs-5">
              <li className="mb-4">
                <strong>HTML5</strong> — Structuring the thing.
              </li>
              <li className="mb-4">
                <strong>CSS3</strong> — Making the thing look good.
              </li>
              <li className="mb-4">
                <strong>JavaScript</strong> — Making the thing do things.
              </li>
              <li className="mb-4">
                <strong>React</strong> — Making the things reusable.
              </li>
            </ul>

          </div>
        </div>

        
        <div className="col-md-6">
          <div className="card h-100 shadow-sm border-0 p-4 bg-light">
            <h4 className="fw-bold mb-4 text-dark">CMS, Tools & Strategy</h4>
            
            <ul className="list-unstyled fs-5">
              <li className="mb-4">
                <strong>Git & GitHub</strong> — Saving me when I break things.
              </li>
              <li className="mb-4">
                <strong>WordPress & WooCommerce</strong> — Building websites that do more than just sit there.
              </li>
              <li className="mb-4">
                <strong>SEO</strong> — Helping people actually find the thing.
              </li>
            </ul>

          </div>
        </div>

      </div>
    </div>
  );
}