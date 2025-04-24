import React from 'react';
import './SocialIcon.scss';

const SocialIcon = ({ icon: Icon, href, label }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label={label}
      className="social-icon"
    >
      <Icon size={20} />
    </a>
  );
};

export default SocialIcon;