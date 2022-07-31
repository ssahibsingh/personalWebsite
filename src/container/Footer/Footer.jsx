import React from 'react'
import './Footer.scss'
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='footer'>
      <div className="container ">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-6 col-12">
                    <div className="footer__links text-center">
                        <a href="mailto:snone181@gmail.com"><i className="fas fa-envelope"></i></a>
                        <a href="https://github.com/ssahibsingh" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
                        <a href="https://twitter.com/ssahibsingh_" target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i></a>
                        <a href="https://www.instagram.com/ssahibsingh_/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/in/ssahibsingh/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 text-center">
                    <p className="footer__copy">Copyright &copy; {year} Sahib Singh</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer