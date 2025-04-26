
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AboutSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="about" className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div 
            ref={imageRef} 
            className={`relative ${imageVisible ? 'animate-fade-in' : 'opacity-0'}`}
            style={{ animationDelay: '0.3s' }}
          >
            <div className="w-64 h-64 md:w-80 md:h-80 mx-auto relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-portfolio-purple via-portfolio-blue to-portfolio-pink animate-float"></div>
              <div className="absolute inset-4 rounded-full bg-white flex items-center justify-center overflow-hidden">
                {/* Placeholder image - replace with actual profile image */}
                <div className="w-full h-full bg-portfolio-lightPurple rounded-full flex items-center justify-center text-2xl font-bold text-portfolio-purple">
                  SHK
                </div>
              </div>
            </div>
          </div>
          
          <div 
            ref={ref} 
            className={`space-y-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
            style={{ animationDelay: '0.6s' }}
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a passionate frontend developer who loves turning ideas into interactive realities. With expertise in HTML, CSS, and JavaScript, I build sleek, responsive websites that users adore.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              My focus is on creating intuitive user experiences through clean code and thoughtful design. I'm constantly learning new technologies and techniques to enhance my skillset and deliver better solutions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              When I'm not coding, you can find me exploring new design trends, experimenting with creative projects, or sharing knowledge with the developer community.
            </p>
            <div className="pt-4">
              <button 
                onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })} 
                className="px-6 py-3 bg-white border-2 border-portfolio-purple text-portfolio-purple rounded-full hover:bg-portfolio-purple hover:text-white transition-all duration-300"
              >
                Explore my skills
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
