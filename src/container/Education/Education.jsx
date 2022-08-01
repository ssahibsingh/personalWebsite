import React from 'react'
import images from '../../constants/images';
import './Education.scss';
const Education = () => {
    return (
        <>
            <section className="education" id="education">
                <div className="container">
                    <div className="education__heading">

                        <h2 className="section__heading text-center">Education</h2>
                    </div>
                    <div className="row edu__mainrow m-auto">
                        <div className="col-12">
                            <div className="row ins">
                                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                    <div className="ins__logo">
                                        <img className="img-fluid" src={images.nitjLogo} alt="NIT Jalandhar Logo" />
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-12 col-12 ins__info">
                                    <div>
                                        <h3 className="ins__name">Dr. B R Ambedkar National Institute of Technology Jalandhar</h3>
                                        <p className="ins__duration">2020 - Present</p>
                                        <h4 className="ins__edu">Information Technology</h4>
                                        <h5 className="ins__deg">Bachelor of Technology</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="row ins">
                                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                    <div className="ins__logo">
                                        <img className="img-fluid" src={images.mspLogo} alt="Modern Secular Public School Logo" />
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-12 col-12 ins__info">
                                    <div>
                                        <h3 className="ins__name">Modern Secular Public School, Dhuri</h3>
                                        <p className="ins__duration">2018 - 2020</p>
                                        <h4 className="ins__edu">Senior Secondary Education</h4>
                                        <h5 className="ins__deg">Issued by Central Board of Secondary Education (CBSE)</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="row ins">
                                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                    <div className="ins__logo">
                                        <img className="img-fluid" src={images.asmLogo} alt=" AS Modern Sr. Sec School Logo" />
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-12 col-12 ins__info">
                                    <div>
                                        <h3 className="ins__name">AS Modern Sr. Sec School, Khanna </h3>
                                        <p className="ins__duration">2010 - 2018</p>
                                        <h4 className="ins__edu">High School Education</h4>
                                        <h5 className="ins__deg">Issued by Central Board of Secondary Education (CBSE)</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Education