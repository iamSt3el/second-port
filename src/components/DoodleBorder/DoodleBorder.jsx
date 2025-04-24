import React from 'react';
import './DoodleBorder.scss';

const DoodleBorder = ({ children, className, isAchievement }) => {
  return (
    <div className={`doodle-border ${isAchievement ? 'achievement' : ''} ${className || ''}`}>
      <div className="corner-dot top-left" />
      <div className="corner-dot bottom-right" />
      <div className="corner-dot top-right" />
      <div className="corner-dot bottom-left" />
      {children}
    </div>
  );
};

export default DoodleBorder;