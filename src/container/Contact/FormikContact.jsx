import React, { useState } from 'react'
import './Contact.scss'
import Button from '@cred/neopop-web/lib/components/Button';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import isEmail from 'validator/lib/isEmail';

const Contact = () => {
  const [error, setError] = useState("");
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: ""
  }
  const onSubmit = (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(true);
    axios.post("https://sheet.best/api/sheets/5e40498b-b54f-404d-a0c8-652e67d946bf", values).then(response => {
      if (response.status === 200) {
        setError('false');
      }
      else {
        setError('true');
      }
      onSubmitProps.setSubmitting(false);
    })
    onSubmitProps.resetForm()
  }

  const validate = values => {
    let errors = {}

    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (!isEmail(values.email)) {
      errors.email = "Invalid Email";
    }
    if (!values.subject) {
      errors.subject = "Required";
    }
    if (!values.message) {
      errors.message = "Required";
    }
    return errors;
  }
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
                <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validate} >
                  {formik => {
                    return (
                      <Form id="contact-form" method="POST">
                        <div className="row gx-3 gy-4">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="form-label">Full name</label>
                              <Field name="name" id="name" placeholder="Name *" className={!formik.errors.name ? "form-control ok" : "form-control error"} type="text" required />
                              <ErrorMessage name="name" component='span' />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="form-label">Your Email</label>
                              <Field name="email" id="email" placeholder="Email *" className={!formik.errors.email ? "form-control ok" : "form-control error"} type="email" required />
                              <ErrorMessage name="email" component='span' />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <label className="form-label">Subject</label>
                              <Field name="subject" id="subject" placeholder="Subject *" className={!formik.errors.subject ? "form-control ok" : "form-control error"} type="text" required />
                              <ErrorMessage name="subject" component='span' />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="form-label">Your message</label>
                              <Field as="textarea" name="message" id="message" placeholder="Your message *" rows="4" className={!formik.errors.message ? "form-control ok" : "form-control error"} required></Field>
                              <ErrorMessage name="message" component='span' />
                            </div>
                          </div>
                          <div className="response__message">
                            <div className={error === "false" ? "message__success text-center" : "message__success text-center d-none"} role="alert">
                              <span>Message Sent Successfully.</span>
                            </div>
                            <div className={error === "true" ? "message__error text-center" : "message__error text-center d-none"} role="alert">
                              <span>Something Went Wrong!</span>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form__button text-center">
                              <p
                                type="button"
                                /*onClick={sendEmail}*/
                                onMouseOver={() => { setIsOver(true) }}
                                onMouseOut={() => { setIsOver(false) }}>
                                <Button
                                  colorConfig={colorConfig}
                                  type="submit"
                                  className={formik.isValid && isOver && "active"}
                                  disabled={!formik.isValid || formik.isSubmitting}
                                  variant="primary"
                                  kind="elevated"
                                  size="medium"
                                  colorMode="dark">Send Message</Button>
                              </p>
                            </div>
                          </div>
                        </div>
                      </Form>
                    )
                  }}

                </Formik>
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