
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative gradient-bg overflow-hidden">
      {/* Enhanced abstract shapes background with more parallax elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-portfolio-lightPurple rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-portfolio-lightBlue rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-40 right-40 w-60 h-60 bg-portfolio-lightPink rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-40 w-48 h-48 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-lg opacity-50 animate-float" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute top-1/4 left-1/2 w-24 h-24 bg-pink-200 rounded-full mix-blend-multiply filter blur-lg opacity-50 animate-float" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-gray-800">
          Shravani H K
        </h1>
        <div className="overflow-hidden h-12 mb-6">
          <div className="typing-container text-xl md:text-3xl text-portfolio-purple font-medium">
            Frontend Developer
          </div>
        </div>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600 mb-10">
          Crafting pixel-perfect experiences with clean and elegant code
        </p>
        <button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-8 py-3 bg-portfolio-purple text-white rounded-full hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Get to know me
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
