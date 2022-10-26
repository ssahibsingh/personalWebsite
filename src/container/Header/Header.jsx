import React from 'react'
import { images } from '../../constants';
import './Header.scss'
const Header = () => {
  return (
    <>
      <section id="home" className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 header__flex">
              <div className="">
                <div >
                <h6 className="header__hello">Hello.  I'm</h6>
                <h1 className="header__intro">Sahib Singh</h1>
                <p className="header__list">
                  <b className="tags">&lt;</b>He/Him <b className="tags">/&gt;</b>
                </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="profile-pic">
                <img className="img-fluid" src={images.profile} title="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Header