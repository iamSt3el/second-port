import React from 'react';
import './NavItem.scss';

const NavItem = ({ children, active, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`nav-item ${active ? 'active' : ''}`}
    >
      {children}
    </button>
  );
};

export default NavItem;