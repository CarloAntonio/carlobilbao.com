import React from "react";

//import subcomponents
import SliderItem from './subComp/sliderItem';
import ServiceItem from './subComp/serviceItem';

//image assets
import aboutHero from '../../assets/img/about-hero.jpg';
import profileImg from '../../assets/img/profile.jpg'
import { sliderData, interestData } from './data';

const about = () => {

    return (
    <div>

        {/* start hero section */}
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
        {/* end hero section */}

        {/* start summary section */}
        <section className="wow fadeIn">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12 xs-text-center">

                        <figure className="wp-caption alignright">
                            <img alt="" src={ profileImg }/>
                            <figcaption className="wp-caption-text">You&#39;re looking at my portfolio page, that&#39;s awesome :)</figcaption>
                        </figure>
                        <span className="text-medium alt-font font-weight-600 margin-20px-bottom display-block accent-color">
                            "When figuring what type of work you should do, treat it much like the rest of life, find things that make you lose track of time."
                        </span>
                        <p>
                            I am both a software developer and biotech professional based in the San Francisco Bay Area. 
                            I&#39;m passionate about using current and emerging technologies to help solve old problems. 
                            Specifically, problems that plague those that are less fortunate, marginalized, or in situations where they are not able to fix their predicament. 
                            It’s these problems and the avenues that new technology creates, that motivates me to learn and develop new skills and technologies.
                        </p>
                        <p>
                            Currently, I work as a freelance web developer helping businesses and individuals expand their market by create an online presence. 
                            Additionally, I partner up with other developers to tackle larger web applications and projects. 
                            The rest of my time is spent taking classNamees to earn my master&#39;s degree in Computer Science.
                        </p>
                        <p>
                            In the past, I earned my bachelor&#39;s degree in biochemistry and molecular biology at the University of California, Davis. 
                            (Go Aggies!) Professionally, I worked at a biotech company manufacturing DNA sequences for research and applied use for nearly 4 years. 
                            My love for science did not give way to technology, rather, I hope to combine them and, hopefully, 
                            have them compliment each other as I strive to help solve interesting problems that will hopefully help make people&#39;s lives better. 
                            If you&#39;d like a more detailed view of my work history feel free to check out my LinkedIn: 
                            <a href="https://www.linkedin.com/in/carlo-bilbao/" className="accent-hover" target="_blank" rel="noopener noreferrer">Here</a>.
                        </p>

                    </div>
                </div>
            </div>
        </section>
        {/* end summary section */}

        {/* start interest section */}
        <section className="wow fadeIn bg-light-gray">
            <div className="container">
                <div className="row">
                    <div className="col-md-7 col-sm-12 col-sm-12 center-col text-center margin-100px-bottom xs-margin-40px-bottom">
                        <div className="position-relative overflow-hidden width-100">
                            <span className="text-small text-outside-line-full alt-font font-weight-600 text-uppercase">Other Interest</span>
                        </div>
                    </div>
                </div>
                <div className="row equalize">

                    {interestData.map(interest => {
                        return <ServiceItem title={interest.title} content={interest.content} delay={interest.delay} />
                    })}
                
                </div>
            </div>
        </section>
        {/* end interest section */}

        {/* start one half column section */}
        <section className="wow fadeIn">
            <div className="container">
                <div className="row">
                    <div className="col-md-7 col-sm-12 col-sm-12 center-col text-center margin-100px-bottom xs-margin-40px-bottom">
                        <div className="position-relative overflow-hidden width-100">
                            <span className="text-small text-outside-line-full alt-font font-weight-600 text-uppercase">When I&#39;m Away From the Keyboard</span>
                        </div>
                    </div>
                </div>
                <div className="row">

                    {/* start column */}
                    <div className="col-md-6 col-sm-12 sm-margin-15px-bottom ">
                        <div className="text-center fit-videos sm-margin-30px-bottom">
                            {/* start youtube video */}
                            <iframe title="Hiking with DJI Osmo" width="560" height="315" src="https://www.youtube.com/embed/jXOKEFBRAEs" frameBorder="0" allowFullScreen></iframe>
                            {/* end youtube video */}
                        </div>
                        <div className="bg-white padding-40px-all xs-padding-30px-all last-paragraph-no-margin bg-light-gray">
                            <p>My first hiking trip using my DJI Osmo. Look at all that 3-axis gimble smooth gooeyness. Also, a couple of awesome dogs that love to hike.</p>
                        </div>
                    </div>
                    {/* end column */}

                    {/* start column */}
                    <div className="col-md-6 col-sm-12 sm-margin-15px-bottom ">
                        <div className="text-center fit-videos sm-margin-30px-bottom">
                            {/* start youtube video */}
                            <iframe title="Video of the lantern festival" width="560" height="315" src="https://www.youtube.com/embed/6gZz12nXJpM" frameBorder="0" allowFullScreen></iframe>
                            {/* end youtube video */}
                        </div>
                        <div className="bg-white padding-40px-all last-paragraph-no-margin bg-light-gray">
                            <p>My first attempt at making a video that tried to embody the lyrics of a song. Also, a trip to Neveda for a lantern festival with a few friends of mine.</p>
                        </div>
                    </div>
                    {/* end column */}

                </div>

                <div className="row">

                    {/* start toddtrex column */}
                    <div className="col-md-6 col-sm-12 sm-margin-15px-bottom ">
                        <div className="text-center fit-videos sm-margin-30px-bottom">
                            {/* start youtube video */}
                            <iframe title="Todd the trex video" width="560" height="315" src="https://www.youtube.com/embed/dnA_7n4dHx4" frameBorder="0" allowFullScreen></iframe>
                            {/* end youtube video */}
                        </div>
                        <div className="bg-white padding-40px-all last-paragraph-no-margin bg-light-gray">
                            <p>My friend and I enjoy traveling and taking pictures, but weren&#39;t huge fans of taking pictures of ourselves. The solution, for some reason, was to wear a dinosaur suit instead. We&#39;re not sure what other steps led to that conclusion as well. But it did lead to this awesome video. If you enjoyed that goofyness, there&#39;s more <a href="https://www.instagram.com/toddthetrex/" target="_blank" className="accent-hover" rel="noopener noreferrer">here</a>. </p>
                        </div>
                    </div>
                    {/* end column */}

                    {/* start column */}
                    <div className="col-md-6 col-sm-12 sm-margin-15px-bottom ">
                        <div className="text-center fit-videos sm-margin-30px-bottom">
                            {/* start youtube video */}
                            <iframe title="Picnic at McClures Beach" width="560" height="315" src="https://www.youtube.com/embed/Wh-huDNXTws" frameBorder="0" allowFullScreen></iframe>
                            {/* end youtube video */}
                        </div>
                        <div className="bg-white padding-40px-all xs-padding-30px-all last-paragraph-no-margin bg-light-gray">
                            <p>My friends and I head over to Mcclures Beach at Point Reyes for a picnic on a (mostly) sunny day. Give the video time, the sun will come out, believe me, I heard it all when we first arrived at the spot and it was cloudy and cold. I found this place a long time ago while hiking at a nearby area. I knew I&#39;d eventually take my friends here and have a BBQ.</p>
                        </div>
                    </div>
                    {/* end column */}

                </div>
            </div>
        </section>
        {/* end one half column section */}

        {/* start cta section */}
        <section className="padding-ten-tb wow fadeIn bg-light-gray text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-12 col-xs-12 text-center center-col">
                        <span className="alt-font text-small text-uppercase text-extra-dark-gray">I would love to work with you</span>
                        <h5 className="alt-font font-weight-700 letter-spacing-minus-1 accent-color">Brainstorm over some coffee?</h5>
                        <a href="/contact" className="btn btn-large btn-transparent-dark-gray margin-10px-top inner-link">Let&#39;s get started</a>
                    </div>
                </div>
            </div>
        </section>
        {/* end cta section */}

    </div>
  );
}

export default about;
