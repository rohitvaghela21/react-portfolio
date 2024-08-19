import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faEnvelope, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: faHouse },
    { path: '/about', label: 'About', icon: faUser },
    { path: '/works', label: 'Works', icon: faBriefcase },
    { path: '/contact', label: 'Contact', icon: faEnvelope },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav>
      <ul>
        {navItems.map((item) => (
          <li
            key={item.path}
            onMouseEnter={() => setHoveredItem(item.label.toLowerCase())}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {hoveredItem === item.label.toLowerCase() && (<h3>{item.label}</h3>)}
            <a href={item.path} className={isActive(item.path) ? 'active' : ''}>
              <FontAwesomeIcon icon={item.icon} />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
