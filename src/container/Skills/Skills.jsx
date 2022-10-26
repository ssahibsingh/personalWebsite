import React, { useState } from 'react'
import './Skills.scss'
import Button from '@cred/neopop-web/lib/components/Button';
import resume from '../../assets/resume/Resume - Sahib Singh.pdf'

import skills from '../../data/skillsExperience'

const Skills = () => {
  const { skill, experience } = skills
  const [isOver, setIsOver] = useState(false);

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
    <>
      <section id="skill" className='skillAndExperience'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="skill__heading-1">
                <h2 className="section__heading">Skills and <br />Experience</h2>
              </div>
              <div className="skill">
                <h3 className="skill__heading-2"><b className="tags">&lt;</b>My Skills<b className="tags">/&gt;</b></h3>
                <div className="row justify-content-center text-center">
                  {React.Children.toArray(
                      skill.map((item) => {
                        return (
                          <>
                            <div className="col-lg-2 col-md-2 col-sm-3 col-xs-3 col-4">
                              <div className="skill__detail">
                                <div className="skill__icon">
                                  <i className={item.skill}></i>
                                </div>
                              </div>
                            </div>
                          </>
                        )
                      })
                    )
                  }

                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-5 ms-auto">
              <div className="experience">
                <h3 className='exp_heading-2'><b className="tags">&lt;</b>Experience<b className="tags">/&gt;</b></h3>
                <div className="experience__details">
                  {
                    React.Children.toArray(
                      experience.map((item) => {
                        return (
                          <>
                            <div className="row">
                              <div className="col-6">
                                <h6>{item.duration}</h6>
                              </div>
                              <div className="col-6">
                                <h5>{item.position}</h5>
                                <p>{item.company}</p>
                              </div>
                            </div>
                          </>
                        )
                      })
                    )
                  }
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