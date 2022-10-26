import { useRef, useState } from "react";
import "./Navbar.scss";
import Button from "@cred/neopop-web/lib/components/Button";
import resume from "../../assets/resume/Resume - Sahib Singh.pdf";

const Navbar = () => {
  const [isOver, setIsOver] = useState(false);
  const navButton = useRef(null);
  const linksContainerRef = useRef(null);

  function collapseNav() {
    navButton.current.classList.add("collapsed");
    linksContainerRef.current.classList.remove("show");
  }

  const colorConfig = {
    backgroundColor: 'var(--primary)',
    borderColor: 'var(--secondary)',
    edgeColors: {
      left: 'transparent',
      top: 'transparent',
      right: 'var(--black)',
      bottom: 'var(--black)'
    },
    color: 'var(--black)'
  }

  return (
    <nav className="navbar navbar-expand-lg shadow-sm">
      <div className="container-fluid">
        <div className="navbar-brand d-flex align-items-center mx-3 pt-3">
          <h1>
            <a onClick={collapseNav} className="text-decoration-none" href="/">
              Sahib Singh
            </a>
          </h1>
        </div>
        <button
          ref={navButton}
          className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* <span className="navbar-toggler-icon"></span> */}

          <span className="toggler-icon top-bar"></span>
          <span className="toggler-icon middle-bar"></span>
          <span className="toggler-icon bottom-bar"></span>
        </button>
        <div
          ref={linksContainerRef}
          className="collapse navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav m-auto mb-2 mb-lg-0 text-center">
            <li className="nav-item">
              <a onClick={collapseNav} className="nav-link px-3" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a onClick={collapseNav} className="nav-link px-3" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={collapseNav}
                className="nav-link px-3"
                href="#project"
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a onClick={collapseNav} className="nav-link px-3" href="#skill">
                Skills & Experience
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={collapseNav}
                className="nav-link px-3"
                href="#education"
              >
                Education
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={collapseNav}
                className="nav-link px-3"
                href="#contact"
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a
                href={resume}
                onClick={collapseNav}
                className="text-decoration-none navbar-nav-btn"
                target="_blank"
                rel="noreferrer"
                onMouseOver={() => {
                  setIsOver(true);
                }}
                onMouseOut={() => {
                  setIsOver(false);
                }}
              >
                <Button
                  className={isOver && "active"}
                  colorConfig={colorConfig}
                  variant="primary"
                  kind="elevated"
                  size="medium"
                  colorMode="dark"
                >
                  Get Resume
                </Button>
              </a>
            </li>
          </ul>
        </div>
        <a
          href={resume}
          onClick={collapseNav}
          className="text-decoration-none navbar-btn"
          target="_blank"
          rel="noreferrer"
          onMouseOver={() => {
            setIsOver(true);
          }}
          onMouseOut={() => {
            setIsOver(false);
          }}
        >
          <Button
            className={isOver && "active"}
            colorConfig={colorConfig}
            variant="primary"
            kind="elevated"
            size="medium"
            colorMode="dark"
          >
            Get Resume
          </Button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
