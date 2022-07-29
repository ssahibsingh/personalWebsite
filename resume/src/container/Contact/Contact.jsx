import React, { useState } from 'react'
import './Contact.scss'
// import { images } from '../../constants'
import Button from '@cred/neopop-web/lib/components/Button';
const Contact = () => {
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
      <section data-scroll-index="4" id="contact" class="contact">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <h2 className="section__heading">Let's have Chat</h2>
            </div>
          </div>
          <div class="row contact__form">
            <div class="col-lg-6">
              <div class="contact__form-1">
                <h6>Get in touch</h6>
                <form id="contact-form">
                  <div class="row gx-3 gy-4">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="form-label">First name</label>
                        <input name="Name" id="name" placeholder="Name *" class="form-control" type="text" required />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="form-label">Your Email</label>
                        <input name="Email" id="email" placeholder="Email *" class="form-control" type="email" required />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label class="form-label">Subject</label>
                        <input name="Subject" id="subject" placeholder="Subject *" class="form-control" type="text" required />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <label class="form-label">Your message</label>
                        <textarea name="message" id="message" placeholder="Your message *" rows="4" class="form-control" required></textarea>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form__button">
                        <a href="/" onClick={() => { console.log("Clicked") }} onMouseOver={() => { setIsOver(true) }} onMouseOut={() => { setIsOver(false) }}><Button colorConfig={colorConfig} className={isOver && "active"} variant="primary" kind="elevated" size="medium" colorMode="dark">Send Message</Button></a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* <div class="col-lg-5 col-xl-4 m-auto">
              <div class="text-center contact__image">
                <img src={images.chat} title="" alt="" />
              </div>
              <h5>Social Media  </h5>
              <div class="contact__infos text-center">
                  <a href="/"><i className="fa-brands fa-github"></i></a>
                  <a href="/"><i className="fa-brands fa-twitter"></i></a>
                  <a href="/"><i className="fa-brands fa-instagram"></i></a>
                  <a href="/"><i className="fa-brands fa-linkedin-in"></i></a>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact