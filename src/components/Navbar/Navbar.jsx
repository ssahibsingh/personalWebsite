import React, { useState } from 'react';
import { images } from '../../constants';
import './Navbar.scss';
import Button from '@cred/neopop-web/lib/components/Button';
import resume from '../../assets/resume/Resume - Sahib Singh.pdf'

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isOver, setIsOver] = useState(false);

  const colorConfig = {
    backgroundColor: '#F7AF24',
    borderColor: '#18171C',
    edgeColors: {
      left: 'transparent',
      top: 'transparent',
      right: '#18171C',
      bottom: '#18171C'
    },
    color: '#18171C'
  }

  return (
    <>
      <nav className="nav">
      <div className="nav__logo">
        <h1><a href="/">Sahib Singh</a></h1>
      </div>
        
        <button className="hamburger" onClick={() => { setIsNavExpanded(!isNavExpanded) }}>
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className={isNavExpanded ? "nav__menu expanded" : "nav__menu"}>
          <ul onClick={() => { setIsNavExpanded(false) }}>
            <li><a className="nav-link" href="#home" >Home</a></li>
            <li><a className="nav-link" href="#about">About</a></li>
            <li><a className="nav-link" href="#project">Projects</a></li>
            <li><a className="nav-link" href="#skill">Skills & Experience</a></li>
            <li><a className="nav-link" href="#education">Education</a></li>
            <li><a className="nav-link" href="#contact">Contact</a></li>
            
            <li><a className="nav__btn nav-link nav__menu-btn" href={resume} target="_blank" rel="noreferrer" onMouseOver={() => { setIsOver(true) }} onMouseOut={() => { setIsOver(false) }}>
            <Button
              className={isOver && "active"}
              colorConfig={colorConfig}
              variant="primary" kind="elevated" size="medium" colorMode="dark">Get Resume</Button>
          </a></li>
          </ul>
        </div>
        <div className="ms-auto">
          <a className="nav__btn " href={resume} target="_blank" rel="noreferrer" onMouseOver={() => { setIsOver(true) }} onMouseOut={() => { setIsOver(false) }}>
            <Button
              className={isOver && "active"}
              colorConfig={colorConfig}
              variant="primary" kind="elevated" size="medium" colorMode="dark">Get Resume</Button>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;