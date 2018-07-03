import React from 'react';

const HeroDiv = (props) => {
    return (
        <section id="home" class="no-padding parallax mobile-height wow fadeIn" data-stellar-background-ratio="0.5" style ={ { backgroundImage: `url(${ props.hero })` } }>
            <div class="opacity-full bg-black"></div>
            <div class="container position-relative full-screen">
                <div class="slider-typography text-center">
                    <div class="slider-text-middle-main">
                        <div class="slider-text-middle">
                            <div class="text-bottom-line accent-color margin-25px-bottom"></div>
                            <h1 class="text-white alt-font font-weight-700">{props.title}</h1>
                            <span class="width-60 center-col text-extra-large display-block  margin-20px-top line-height-30 xs-width-90">{props.subTitle}</span>
                            <div class="down-section text-center"><a href="#down-section" class="inner-link"><i class="ti-arrow-down icon-extra-small text-white accent-bg padding-15px-all xs-padding-10px-all border-radius-100"></i></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroDiv;