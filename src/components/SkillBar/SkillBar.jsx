import React, { useState, useEffect, useRef } from 'react';
import './SkillBar.scss';

const SkillBar = ({ name, level, icon: Icon, color = '#fde047' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const barRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    
    const currentRef = barRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  
  return (
    <div ref={barRef} className="skill-bar">
      <div className="skill-info">
        {Icon && <Icon size={20} className="skill-icon" />}
        <span className="skill-name">{name}</span>
        <span className="skill-percentage">{level}%</span>
      </div>
      <div className="skill-bar-container">
        <div 
          className={`skill-progress ${isVisible ? 'animate' : ''}`} 
          style={{ width: `${level}%`, backgroundColor: color }}
        >
          <div className="skill-dots"></div>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;