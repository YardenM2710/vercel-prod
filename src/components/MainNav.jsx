import React, { useState } from 'react';
import { Icon } from './icons/CustomIcon';
// import './Navbar.scss';

const navItems = ['Store', 'Gifts', 'Home', 'Redeem', 'Account'];

export function MainNav() {
  const [active, setActive] = useState('Home');
  const [setactiveIndex, setActiveIndex] = useState(2);
  const onSetActive = (item, index) => {
    setActive(item);
    setActiveIndex(index);
  };

  return (
    <nav className="navbar">
      {navItems.map((item, index) => (
        <React.Fragment key={item}>
          {/* Insert spacer before the middle item */}
          {/* {index === setactiveIndex && <div className="nav-spacer" />} */}
          <div className={`nav-spacer ${active === item ? 'active' : ''}`}>
            <div
              className={`nav-item ${active === item ? 'active' : ''}`}
              onClick={() => onSetActive(item, index)}
            >
              <Icon
                width={40}
                name={item}
              />
              <span>{item}</span>
            </div>
          </div>
        </React.Fragment>
      ))}
    </nav>
  );
}
