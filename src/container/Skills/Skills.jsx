import React, { useState } from 'react'
import './Skills.scss'
import Button from '@cred/neopop-web/lib/components/Button';
import resume from '../../assets/resume/Resume - Sahib Singh.pdf'

const Skills = () => {
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
      <section id="skill" className='skillAndExperience'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="skill__heading-1">
                <h2 className="section__heading">Skills and <br />Experience</h2>
              </div>
              <div className="skill">
                <h3 className="skill__heading-2"><b className="yellow-tags">&lt;</b>My Skills<b className="yellow-tags">/&gt;</b></h3>
                
                <div className="row justify-content-center text-center">
                  <div className="col-lg-2 col-md-2 col-sm-3 col-xs-3 col-4">
                    <div className="skill__detail">
                      <div className="skill__icon">
                        <i className="devicon-c-plain-wordmark colored"></i>
                      </div>
                      {/* <h6>HTML</h6> */}
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-3 col-xs-3 col-4">
                    <div className="skill__detail">
                      <div className="skill__icon">
                        <i className="devicon-cplusplus-plain-wordmark colored"></i>
                      </div>
                      {/* <h6>HTML</h6> */}
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-3 col-xs-3 col-4">
                    <div className="skill__detail">
                      <div className="skill__icon">
                        <i className="devicon-python-plain-wordmark colored"></i>
                      </div>
                      {/* <h6>Python</h6> */}
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-3 col-xs-3 col-4">
                    <div className="skill__detail">
                      <div className="skill__icon">
                        <i className="devicon-java-plain-wordmark colored"></i>
                      </div>
                      {/* <h6>Python</h6> */}
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-3 col-xs-3 col-4">
                    <div className="skill__detail">
                      <div className="skill__icon">
                        <i className="devicon-selenium-original colored"></i>
                      </div>
                      {/* <h6>CSS</h6> */}
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-3 col-xs-3 col-4">
                    <div className="skill__detail">
                      <div className="skill__icon">
                        <i className="devicon-html5-plain-wordmark colored"></i>
                      </div>
                      {/* <h6>JS</h6> */}
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-3 col-xs-3 col-4">
                    <div className="skill__detail">
                      <div className="skill__icon">
                        <i className="devicon-css3-plain-wordmark colored"></i>
                      </div>
                      {/* <h6>JS</h6> */}
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-3 col-xs-3 col-4">
                    <div className="skill__detail">
                      <div className="skill__icon">
                        <i className="devicon-sass-original colored"></i>
                      </div>
                      {/* <h6>JS</h6> */}
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-3 col-xs-3 col-4">
                    <div className="skill__detail">
                      <div className="skill__icon">
                        <i className="devicon-javascript-plain colored"></i>
                      </div>
                      {/* <h6>JS</h6> */}
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-3 col-xs-3 col-4">
                    <div className="skill__detail">
                      <div className="skill__icon">
                        <i className="devicon-jquery-plain-wordmark colored"></i>
                      </div>
                      {/* <h6>JS</h6> */}
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-3 col-xs-3 col-4">
                    <div className="skill__detail">
                      <div className="skill__icon">
                        <i className="devicon-bootstrap-plain-wordmark colored"></i>
                      </div>
                      {/* <h6>JS</h6> */}
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-3 col-xs-3 col-4">
                    <div className="skill__detail">
                      <div className="skill__icon">
                        <i className="devicon-nodejs-plain-wordmark colored"></i>
                      </div>
                      {/* <h6>JS</h6> */}
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-3 col-xs-3 col-4">
                    <div className="skill__detail">
                      <div className="skill__icon">
                        <i className="devicon-express-original-wordmark colored"></i>
                      </div>
                      {/* <h6>JS</h6> */}
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-3 col-xs-3 col-4">
                    <div className="skill__detail">
                      <div className="skill__icon">
                        <i className="devicon-react-original-wordmark colored"></i>
                      </div>
                      {/* <h6>JS</h6> */}
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-3 col-xs-3 col-4">
                    <div className="skill__detail">
                      <div className="skill__icon">
                        <i className="devicon-babel-plain colored"></i>
                      </div>
                      {/* <h6>JS</h6> */}
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-3 col-xs-3 col-4">
                    <div className="skill__detail">
                      <div className="skill__icon">
                        <i className="devicon-mysql-plain-wordmark colored"></i>
                      </div>
                      {/* <h6>JS</h6> */}
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-3 col-xs-3 col-4">
                    <div className="skill__detail">
                      <div className="skill__icon">
                        <i className="devicon-mongodb-plain-wordmark colored"></i>
                      </div>
                      {/* <h6>JS</h6> */}
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-3 col-xs-3 col-4">
                    <div className="skill__detail">
                      <div className="skill__icon">
                        <i className="devicon-heroku-plain-wordmark colored"></i>
                      </div>
                      {/* <h6>JS</h6> */}
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-3 col-xs-3 col-4">
                    <div className="skill__detail">
                      <div className="skill__icon">
                        <i className="devicon-git-plain-wordmark colored"></i>
                      </div>
                      {/* <h6>JS</h6> */}
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-3 col-xs-3 col-4">
                    <div className="skill__detail">
                      <div className="skill__icon">
                        <i className="devicon-github-original-wordmark colored"></i>
                      </div>
                      {/* <h6>JS</h6> */}
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-3 col-xs-3 col-4">
                    <div className="skill__detail">
                      <div className="skill__icon">
                        <i className="devicon-canva-original colored"></i>
                      </div>
                      {/* <h6>JS</h6> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-5 ms-auto">
              <div className="experience">
                <h3 className='exp_heading-2'><b className="yellow-tags">&lt;</b>Experience<b className="yellow-tags">/&gt;</b></h3>
                <div className="experience__details">
                  <div className="row">
                    <div className="col-6">
                      <h6>Oct 2021 - Present</h6>
                    </div>
                    <div className="col-6">
                      <h5>Head of Technical Department</h5>
                      <p>Gaming Geeks</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <h6>Aug 2021 - Present</h6>
                    </div>
                    <div className="col-6">
                      <h5>Web Developer</h5>
                      <p>Anaitik</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <h6>Dec 2021 - Feb 2022</h6>
                    </div>
                    <div className="col-6">
                      <h5>Web Developer</h5>
                      <p>Tiwana Power Solution</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="get-resume">
                <a href={resume} target="_blank" rel="noreferrer" onMouseOver={() => { setIsOver(true) }} onMouseOut={() => { setIsOver(false) }}><Button colorConfig={colorConfig} className={isOver && "active"} variant="primary" kind="elevated" size="medium" colorMode="dark" >Get Resume</Button></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Skills