import React from 'react';

//import subcomponents
import SliderItem from './sliderItem';

//image assets
import aboutHero from '../../../../assets/img/about-hero.jpg';
import { sliderData } from '../../data';

const heroSlider = () => {
    return (
        <section className="custom-pt pb-no wow fadeIn main-slider mobile-height content-right-slider">
            <div className="container-fluid">
                <div className="row equalize sm-equalize-auto">
                    <div 
                        className="col-md-6 cover-background sm-height-500px xs-height-350px wow fadeIn padding-twenty-five-top padding-five-left" 
                        style ={ { backgroundImage: `url(${ aboutHero })` } }>
                        <h4 className="text-white text-standout display-block margin-5px-bottom alt-font">Hello,</h4>
                        <h6 className="text-white text-standout font-weight-300 margin-20px-bottom alt-font">I&#39;m Carlo Bilbao</h6>
                        <p className="text-large text-white text-standout dispaly-block pull-left font-weight-300 width-90 margin-35px-bottom">
                            I design and implement thoughtful websites for companies, businesses, and various events. I love being outdoors, creating videos, and being a gym rat.
                        </p>
                    </div>
                    <div className="swiper-full-screen swiper-container col-md-6 no-padding-lr white-move bg-extra-dark-gray text-center xs-padding-20px-tb wow fadeIn">
                        <div className="swiper-wrapper">
                            {sliderData.map(slider => {
                                return <SliderItem slider={slider.slider} num={slider.num}/>
                            })}
                        </div>
                        {/* start slider pagination */}
                        <div className="swiper-button-next slider-long-arrow-white"></div>
                        <div className="swiper-button-prev slider-long-arrow-white"></div>
                        {/* end slider pagination */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default heroSlider;