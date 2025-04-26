
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-6 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto text-center">
        <p className="text-gray-600">
          &copy; {currentYear} Shravani H K. All rights reserved.
        </p>
        <div className="mt-2">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-portfolio-purple hover:underline text-sm focus:outline-none"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
