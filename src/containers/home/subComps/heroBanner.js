import React from 'react';

//assets
import homeHero from '../../../assets/img/home-hero.jpg';

const heroBanner = () => {
    return (
        <section className="wow fadeIn no-padding one-fourth-screen position-relative parallax xs-background-image-center" data-stellar-background-ratio="0.5" style ={ { backgroundImage: `url(${ homeHero })` } }>
            <div className="container">
                <div className="row height-100">
                    <div className="slider-typography">
                        <div className="slider-text-middle-main">
                            <div className="slider-text-middle">
                                <div className="col-lg-4 col-md-8 col-sm-10 col-xs-12 center-col text-center">
                                    <span className="text-extra-small alt-font letter-spacing-2 text-uppercase margin-20px-bottom display-inline-block text-white">Carlo Antonio Soriano Bilbao</span>
                                    <h2 className="font-weight-600 alt-font margin-40px-bottom sm-margin-20px-bottom text-white letter-spacing-minus-1 text-standout">Software Developer, Science Geek, Life-Long Learner</h2>
                                    <div className="social-icon-style-8">
                                        <ul className="small-icon">
                                            <li><a className="linkedin text-white margin-5px-lr" href="https://www.linkedin.com/in/carlo-bilbao/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin accent-hover" aria-hidden="true"></i></a></li>
                                            <li><a className="dribbble text-white margin-5px-lr" href="https://instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram accent-hover" aria-hidden="true"></i></a></li>
                                            <li><a className="medium text-white margin-5px-lr" href="https://medium.com/@cbilbao88" target="_blank" rel="noopener noreferrer"><i className="fa fa-medium accent-hover" aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="down-section text-center">
                                <a href="#about" className="inner-link"><i className="ti-arrow-down icon-small accent-color"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default heroBanner;