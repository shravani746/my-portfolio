import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const SkillsSection: React.FC = () => {
  const skills = [
    {
      name: 'HTML',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-12 h-12 text-orange-500 mb-4">
          <path fill="currentColor" d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/>
        </svg>
      ),
      description: 'Semantic markup, accessibility, and best practices for modern web development.'
    },
    {
      name: 'CSS',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-12 h-12 text-blue-500 mb-4">
          <path fill="currentColor" d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"/>
        </svg>
      ),
      description: 'Advanced styling with CSS3, Flexbox, Grid, animations, and responsive design.'
    },
    {
      name: 'JavaScript',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-12 h-12 text-yellow-500 mb-4">
          <path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/>
        </svg>
      ),
      description: 'Building interactive features with fundamental JavaScript concepts like DOM manipulation, events, and basic ES6+ features.'
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
            
            return (
              <div 
                key={skill.name} 
                ref={ref}
                className={`skill-card flex flex-col items-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${0.2 * (index + 1)}s` }}
              >
                <div className="rounded-full p-3 animate-pulse-glow">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{skill.name}</h3>
                <p className="text-center text-gray-600">{skill.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
