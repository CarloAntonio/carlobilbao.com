import React from 'react';

const HeroDiv = (props) => {
    return (
        <section id="home" className="no-padding parallax mobile-height wow fadeIn" data-stellar-background-ratio="0.5" style ={ { backgroundImage: `url(${ props.hero })` } }>
            <div className="opacity-full bg-black"></div>
            <div className="container position-relative full-screen">
                <div className="slider-typography text-center">
                    <div className="slider-text-middle-main">
                        <div className="slider-text-middle">
                            <div className="text-bottom-line accent-color margin-25px-bottom"></div>
                            <h1 className="text-white alt-font font-weight-700">{props.title}</h1>
                            <span className="width-60 center-col text-extra-large display-block  margin-20px-top line-height-30 xs-width-90">{props.subTitle}</span>
                            <div className="down-section text-center"><a href="#down-section" className="inner-link"><i className="ti-arrow-down icon-extra-small text-white accent-bg padding-15px-all xs-padding-10px-all border-radius-100"></i></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroDiv;