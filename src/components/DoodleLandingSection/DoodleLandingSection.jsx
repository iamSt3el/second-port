import React, { useState, useEffect } from 'react';
import { ArrowDown, Sparkles, Code, Palette, Lightbulb, BookOpen } from 'lucide-react';
import DoodleButton from '../DoodleButton/DoodleButton';
import './DoodleLandingSection.scss';

const DoodleLandingSection = ({ onExploreClick }) => {
  const [animateElements, setAnimateElements] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = "Creative Developer & Student";
  
  // Animate elements after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateElements(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Typing animation effect
  useEffect(() => {
    if (!animateElements) return;
    
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80);
    
    return () => clearInterval(typingInterval);
  }, [animateElements]);
  
  return (
    <section className="doodle-landing-section">
      <div className="animated-background-elements">
        <div className="doodle-element element-1"></div>
        <div className="doodle-element element-2"></div>
        <div className="doodle-element element-3"></div>
        <div className="doodle-element element-4"></div>
        <div className="doodle-element element-5"></div>
        <div className="doodle-element element-6"></div>
      </div>
      
      <div className={`landing-content ${animateElements ? 'animate' : ''}`}>
        <div className="name-container">
          <h1 className="name">
            <span className="first-name">Jane</span>
            <span className="last-name">Student</span>
          </h1>
          <div className="title-container">
            <span className="typed-title">{typedText}</span>
            <span className="cursor"></span>
          </div>
        </div>
        
        <div className="floating-icons">
          <div className="floating-icon icon-1">
            <Code size={28} />
          </div>
          <div className="floating-icon icon-2">
            <Palette size={28} />
          </div>
          <div className="floating-icon icon-3">
            <Lightbulb size={28} />
          </div>
          <div className="floating-icon icon-4">
            <BookOpen size={28} />
          </div>
          <div className="floating-icon icon-5">
            <Sparkles size={28} />
          </div>
        </div>
        
        <DoodleButton 
          className="explore-button"
          onClick={onExploreClick}
        >
          <span>Explore My Work</span>
          <ArrowDown size={16} />
        </DoodleButton>
        
        <div className="scrolling-doodle-line"></div>
      </div>
    </section>
  );
};

export default DoodleLandingSection;