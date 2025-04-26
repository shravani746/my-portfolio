
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-6 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto text-center">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="rounded-full p-3 text-portfolio-purple hover:bg-portfolio-lightPurple transition-all duration-300 group focus:outline-none"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6 transform transition-transform duration-300 group-hover:-translate-y-1" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
