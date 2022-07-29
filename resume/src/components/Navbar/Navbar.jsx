import React, {useState} from 'react';
import { images } from '../../constants';
import './Navbar.scss';
import Button  from '@cred/neopop-web/lib/components/Button';


const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isOver,  setIsOver] = useState(false);

  const colorConfig = {
    backgroundColor: '#F7AF24',
    borderColor: '#18171C',
    edgeColors: {
      left: 'transparent',
      top: 'transparent',
      right: '#18171C',
      bottom: '#18171C'
    },
    color:'#18171C'
  }

  return (
    <>
      <nav className="nav">
          <a className="nav__logo" href="/">
            <img src={images.logo} title="" alt="" />
          </a>
          <button className="hamburger" onClick={() => {setIsNavExpanded(!isNavExpanded)}}>
            <i className="fa-solid fa-bars"></i>
          </button>
          <div className={isNavExpanded ? "nav__menu expanded" : "nav__menu"}>
            <ul onClick={()=>{setIsNavExpanded(false)}}>
              <li><a className="nav-link" data-scroll-nav="0" href="#home" ><span>Home</span></a></li>
              <li><a className="nav-link" data-scroll-nav="1" href="#about"><span>About</span></a></li>
              <li><a className="nav-link" data-scroll-nav="2" href="#work"><span>Work</span></a></li>
              <li><a className="nav-link" data-scroll-nav="3" href="#skill"><span>Skills</span></a></li>
              <li><a className="nav-link" data-scroll-nav="4" href="#contact"><span>Contact</span></a></li>
            </ul>
          </div>  
          <div className="ms-auto">
            <a className="nav__btn" data-scroll-nav="4" href="#contact" onMouseOver={()=>{setIsOver(true)}} onMouseOut={()=>{setIsOver(false)}}><Button className={isOver&&"active"} colorConfig={colorConfig} variant="primary" kind="elevated" size="medium" colorMode="dark">Contact Now</Button></a>
          </div>
      </nav>
    </>
  );
};

export default Navbar;