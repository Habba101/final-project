import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    /* FIX: Added mt-auto to force it to stick to the bottom of shorter pages */
    <footer className="bg-dark text-white py-4 mt-auto">
      <div className="container text-center">
        <p className="mb-1 fs-6">
          © {currentYear} <strong>Rahaba</strong>. All Rights Reserved.
        </p>
        <p className="text-muted small mb-0">
          Coded with 💻 and React & Bootstrap for my Junior Developer Portfolio.
        </p>
      </div>
    </footer>
  );
}




 
