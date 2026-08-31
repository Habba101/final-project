import React from 'react';

export default function Contact() {
  return (
    <div className="container my-5 text-start">
      
      {/* Page Title */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">Get In Touch</h2>
        <p className="text-muted lead">Let's connect! I am currently looking for Junior Front-End Developer opportunities.</p>
      </div>

      <div className="row justify-content-center pt-3">
        
        {/* Contact Info Card Panel */}
        <div className="col-md-6">
          <div className="card shadow-sm border-0 p-4 bg-light rounded-3">
            <h4 className="fw-bold mb-4 text-dark">Contact Details</h4>
            
            <p className="mb-4 fs-5">
              📬 <strong>Email:</strong> <a href="mailto:rahabamotaung@yahoo.com" className="text-primary text-decoration-none">rahabamotaung@yahoo.com</a>
            </p>
            
            <p className="mb-4 fs-5">
              📍 <strong>Location:</strong> Pretoria, South Africa
            </p>

            <hr className="my-4" />

            <h5 className="fw-bold mb-3 text-secondary">Professional Networks</h5>
            
            <div className="d-flex flex-column gap-3 fs-5">
              <div>
                💻 <strong>GitHub:</strong> <a href="https://github.com/Habba101" target="_blank" rel="noreferrer" className="text-decoration-none text-dark hover-link">://https://github.com/Habba101</a>
              </div>
              <div>
                💼 <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/portia-motaung/" target="_blank" rel="noreferrer" className="text-decoration-none text-primary hover-link">://www.linkedin.com/in/portia-motaung</a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}