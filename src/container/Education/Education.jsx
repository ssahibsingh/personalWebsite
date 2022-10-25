import React from 'react'
// import images from '../../constants/images';
import education from '../../data/education';
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
                            {
                                React.Children.toArray(
                                    education.map((item) => {
                                        return (
                                            <>
                                                <div key={item.key} className="row ins">
                                                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                                        <div className="ins__logo">
                                                            <img className="img-fluid" src={item.img} alt={item.name} />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-8 col-md-8 col-sm-12 col-12 ins__info">
                                                        <div>
                                                            <h3 className="ins__name">{item.name}</h3>
                                                            <p className="ins__duration">{item.duration}</p>
                                                            <h4 className="ins__edu">{item.education}</h4>
                                                            <h5 className="ins__deg">{item.degree}</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    }
                                    )
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Education