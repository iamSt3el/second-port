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
        <div className="skill-icon-container">
          {Icon && <Icon size={20} className="skill-icon" />}
        </div>
        <div className="skill-name-level">
          <span className="skill-name">{name}</span>
          <span className="skill-percentage">{level}%</span>
        </div>
      </div>
      <div className="skill-bar-container">
        <div 
          className={`skill-progress ${isVisible ? 'animate' : ''}`} 
          style={{ width: `${level}%`, backgroundColor: color }}
        >
          <div className="skill-dots"></div>
        </div>
        
        {/* Level markers */}
        <div className="skill-markers">
          <div className="skill-marker" style={{ left: '25%' }}>
            <div className="marker-dot"></div>
            <span className="marker-label">Basic</span>
          </div>
          <div className="skill-marker" style={{ left: '50%' }}>
            <div className="marker-dot"></div>
            <span className="marker-label">Intermediate</span>
          </div>
          <div className="skill-marker" style={{ left: '75%' }}>
            <div className="marker-dot"></div>
            <span className="marker-label">Advanced</span>
          </div>
          <div className="skill-marker" style={{ left: '95%' }}>
            <div className="marker-dot"></div>
            <span className="marker-label">Expert</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;