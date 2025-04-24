import React from 'react';
import './DoodleButton.scss';

const DoodleButton = ({ children, onClick, className }) => {
  return (
    <button 
      onClick={onClick} 
      className={`doodle-button ${className || ''}`}
    >
      {children}
    </button>
  );
};

export default DoodleButton;