import React, { useState, useRef } from 'react'
import './Contact.scss'
import Button from '@cred/neopop-web/lib/components/Button';

import axios from 'axios';

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState("");

  const sendEmail = event => {
    event.preventDefault();
    console.log("Sending Email");
    const data = {
      name, email, subject, message
    }
    console.log(data);
    axios.post("https://sheet.best/api/sheets/5e40498b-b54f-404d-a0c8-652e67d946bf", data).then(response => {
      console.log(response);
      if(response.status===200){
        setError('false');
      }
      else{
        setError('true');
      }
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      console.log("Email Sent")
    })
  }
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
      <section data-scroll-index="4" id="contact" className="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section__heading">Take a Coffee & Chat with me</h2>
            </div>
          </div>
          <div className="row contact__form">
            <div className="col-lg-6">
              <div className="contact__form-1">
                {/* <h6>Get in touch</h6> */}
                <form id="contact-form" ref={form} method="POST">
                  <div className="row gx-3 gy-4">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label">Full name</label>
                        <input name="name" id="name" onChange={event => setName(event.target.value)} value={name} placeholder="Name *" className="form-control" type="text" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label">Your Email</label>
                        <input name="email" id="email" onChange={event => setEmail(event.target.value)} value={email} placeholder="Email *" className="form-control" type="email" required />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label className="form-label">Subject</label>
                        <input name="subject" id="subject" onChange={event => setSubject(event.target.value)} value={subject} placeholder="Subject *" className="form-control" type="text" required />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="form-label">Your message</label>
                        <textarea name="message" id="message" onChange={event => setMessage(event.target.value)} value={message} placeholder="Your message *" rows="4" className="form-control" required></textarea>
                      </div>
                    </div>
                    <div className="response__message">
                      <div className={error === "false"?"message__success text-center" : "message__success text-center d-none"} role="alert">
                        <span>Message Sent Successfully.</span>
                      </div>
                      <div className={error ==="true" ?"message__error text-center":"message__error text-center d-none"} role="alert">
                        <span>Something Went Wrong!</span>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form__button text-center">
                        <p type="button" onClick={sendEmail}/*onClick={sendEmail}*/ onMouseOver={() => { setIsOver(true) }} onMouseOut={() => { setIsOver(false) }}><Button colorConfig={colorConfig} type="submit" className={isOver && "active"} variant="primary" kind="elevated" size="medium" colorMode="dark">Send Message</Button></p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* <div className="col-lg-5 col-xl-4 m-auto">
              <div className="text-center contact__image">
                <img src={images.chat} title="" alt="" />
              </div>
              <h5>Social Media  </h5>
              <div className="contact__infos text-center">
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