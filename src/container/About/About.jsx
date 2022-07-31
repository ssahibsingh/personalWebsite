import React from 'react'
import { images } from '../../constants'
import './About.scss'

const About = () => {
  return (

    <section className="about" id="about">
      <div className="container">
        {/* <div className="about__span">
            <span>About Me</span>
          </div> */}
        <h2 className="section__heading text-center py-5">About Me</h2>
        {/* <p></p> */}
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 py-3">
            <div className="about__item">
              <div className="about__item-img">
                <img src={images.backend} alt="" />
              </div>
              <div className="about__item-content">
                <div className="about__item-heading">
                  <h3>Backend Developer</h3>
                  <div className="about__item-para">
                    <p>I am a backend developer with a passion for building beautiful, functional web applications.</p>
                  </div>
                  <div className="about__item-details">
                    <div className="about__item-section-1 text-center">
                      <h5>Technologies I use:</h5>
                      <p>Node.js, Express.js, MongoDB</p>
                    </div>
                    <div className="about__item-section-2 text-center">
                      <h5>Dev Tools:</h5>
                      <ul>
                        <li>VSCode</li>
                        <li>Postman</li>
                        <li>Terminal</li>
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>Heroku</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 py-3">
            <div className="about__item">
              <div className="about__item-img">
                <img src={images.frontend} alt="" />
              </div>
              <div className="about__item-content">
                <div className="about__item-heading">
                  <h3>Frontend Developer</h3>
                  <div className="about__item-para">
                    <p>I do frontend development to give screen to my backend projects and my imagination.</p>
                  </div>
                  <div className="about__item-details">
                    <div className="about__item-section-1 text-center">
                      <h5>Technologies I use:</h5>
                      <p>HTML, CSS, Sass, JS, React.js</p>
                    </div>
                    <div className="about__item-section-2 text-center">
                      <h5>Dev Tools:</h5>
                      <ul>
                        <li>VSCode</li>
                        <li>Bootstrap</li>
                        <li>Terminal</li>
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>CodeSandbox</li>
                        <li>Vercel</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 py-3">
            <div className="about__item">
              <div className="about__item-img">
                <img src={images.nitj} alt="" />
              </div>
              <div className="about__item-content">
                <div className="about__item-heading">
                  <h3>NITian</h3>
                  <div className="about__item-para">
                    <p>I am a third year student of Information Technology at NIT Jalandhar.</p>
                  </div>
                  <div className="about__item-details">
                    <div className="about__item-section-1 text-center">
                      <h5>What I study:</h5>
                      <p>Information Technology</p>
                    </div>
                    <div className="about__item-section-2 text-center">
                      <h5>Things I Do:</h5>
                      <ul>
                        <li>Development</li>
                        <li>Coding</li>
                        <li>Projects</li>
                        <li>Make Friends</li>
                        <li>Networking</li>
                        <li>Mentor Juniors</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="venture">
          <h3 className="venture__heading text-center py-5">My Ventures</h3>
          <div className="container">
            <div className="row text-center">
              <div className="col-lg-6 col-12 py-3">
                <div className="venture__item">
                  <div className="venture__item-logo">
                    <img src={images.gaminggeeks} alt="Gaming Geeks" />
                  </div>
                  <div className="venture__item-about">
                    <p></p>
                    <span><a href="https://gaminggeeks.online" target="_blank" rel="noreferrer"><i class="fas fa-external-link-alt"></i> gaminggeeks.online</a></span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12 py-3">
                <div className="venture__item">
                  <div className="venture__item-logo">
                    <img className="blur" src={images.soorme} alt="Soorme.com" />
                  </div>
                  <div className="venture__item-about">
                    <p></p>
                    <span><i class="fa-solid fa-code"></i> In development</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About