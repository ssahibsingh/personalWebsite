import React from 'react'
import { images } from '../../constants';
import './Header.scss'
const Header = () => {
  return (
    <>
      <section id="home" className="header">
        <div className="container">
          <div className="row min-vh-100 align-items-center">
            <div className="col-lg-7">
              <div className="header">
                <h6 className="header__hello">Hello. </h6>
                <h1 className="header__intro">I'm Sahib Singh</h1>
                <p className="header__list">
                  <b className="yellow-tags">&lt;</b>He/Him <b className="yellow-tags">/&gt;</b>
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="profile-pic">
                <img src={images.profile} title="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Header