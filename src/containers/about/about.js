import React from "react";

//import subcomponents
import SliderItem from './subComp/sliderItem';

//image assets
import aboutHero from '../../assets/img/about-hero.jpg';
import profileImg from '../../assets/img/profile.jpg'
import { sliderData } from './data';

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
                    {/* start service item  */}
                    <div className="col-md-4 col-sm-6 col-xs-12 text-center last-paragraph-no-margin margin-70px-bottom sm-margin-40px-bottom xs-margin-30px-bottom wow fadeInUp">
                        <i className="ti-video-camera icon-extra-medium accent-color margin-20px-bottom"></i>
                        <div className="text-extra-dark-gray margin-10px-bottom sm-margin-5px-bottom alt-font font-weight-600">Videography</div>
                        <p className="width-80 xs-width-100 center-col">I love making videos, almost as much as I love developing applications. I gravitate towards videography over photography because it limits interpretation, in that, context is created by the very nature of time elapsing. You can either create a narrative or capture one, conversely it is far more difficult to do so in photographs. Often times, pictures require background knowlege of context, creator intention, etc. Videos much less so, a trait I love exploring when I&#39;m creating content.</p>
                    </div>
                    {/* end service item */}
                    {/* start service item */}
                    <div className="col-md-4 col-sm-6 col-xs-12 text-center last-paragraph-no-margin margin-70px-bottom sm-margin-40px-bottom xs-margin-30px-bottom wow fadeInUp" data-wow-delay="0.2s">
                        <i className="ti-map-alt icon-extra-medium accent-color margin-20px-bottom"></i>
                        <div className="text-extra-dark-gray margin-10px-bottom sm-margin-5px-bottom alt-font font-weight-600">Hiking/Camping</div>
                        <p className="width-80 xs-width-100 center-col">I can think of only a few other places I&#39;d rather be than being with my friends around the campfire telling stores miles away from civilian disconneted from the digital world. There&#39;s also nothing like hiking miles of trails to arrive at a destination only a those who have persisted the same path have been. Some people think it&#39;s contrary to be both passionate about technology and nature, but in my opinion, it&#39;s a necessary balance.</p>
                    </div>
                    {/* end service item */}
                    {/* start service item */}
                    <div className="col-md-4 col-sm-6 col-xs-12 text-center last-paragraph-no-margin margin-70px-bottom sm-margin-40px-bottom xs-margin-30px-bottom wow fadeInUp" data-wow-delay="0.4s">
                        <i className="ti-basketball icon-extra-medium accent-color margin-20px-bottom"></i>
                        <div className="text-extra-dark-gray margin-10px-bottom sm-margin-5px-bottom alt-font font-weight-600">Basketball</div>
                        <p className="width-80 xs-width-100 center-col">Basketball is an old friend. I&#39;ve known it since I was 9 years old, and even though I&#39;m no Kobe Bryant and this isn&#39;t a <a href="https://www.youtube.com/watch?v=Hr3dX6__-hU" target="_blank" className="accent-hover" rel="noopener noreferrer">Dear Basketball</a> ripoff, I can and have always had basketball to help clear my head. Big decisions, breakups, fights, anxiety, impatience, grudges and just about anything else seem a little easier to deal with after running up and down the court and having a silent conversation with the hoop.</p>
                    </div>
                    {/* end service item */}
                    {/* start service item */}
                    <div className="col-md-4 col-sm-6 col-xs-12 text-center last-paragraph-no-margin sm-margin-40px-bottom xs-margin-30px-bottom wow fadeInUp">
                        <i className="ti-cup icon-extra-medium accent-color margin-20px-bottom"></i>
                        <div className="text-extra-dark-gray margin-10px-bottom sm-margin-5px-bottom alt-font font-weight-600">Gym/Working Out</div>
                        <p className="width-80 xs-width-100 center-col">"Going to the gym after studying and working in front of a computer, is like taking a shower after going to the gym. It feels ridiculously refreshing." -Carlo B. I literally just thought of this right now. There&#39;s something so satisfying about tearing it up in the brain department, then doing the same in the body department. Putting on wireless headphones and going in on the workouts is the most zen you can get on a work day.</p>
                    </div>
                    {/* end service item */}
                    {/* start service item */}
                    <div className="col-md-4 col-sm-6 col-xs-12 text-center last-paragraph-no-margin xs-margin-30px-bottom wow fadeInUp" data-wow-delay="0.2s">
                        <i className="ti-music-alt icon-extra-medium accent-color margin-20px-bottom"></i>
                        <div className="text-extra-dark-gray margin-10px-bottom alt-font font-weight-600">Bachata/Salsa</div>
                        <p className="width-80 xs-width-100 center-col">I don&#39;t even know why I like doing this, but I blame my college roommates for this hobby. Now I listen to bachata and salsa music and I have no idea what they&#39;re saying but that beat and base are next level. I&#39;m not even good at it, but it&#39;s one of the funnest things to do on a night out.</p>
                    </div>
                    {/* end service item */}
                    {/* start service item */}
                    <div className="col-md-4 col-sm-6 col-xs-12 text-center last-paragraph-no-margin xs-margin-30px-bottom wow fadeInUp" data-wow-delay="0.2s">
                        <i className="ti-rocket icon-extra-medium accent-color margin-20px-bottom"></i>
                        <div className="text-extra-dark-gray margin-10px-bottom alt-font font-weight-600">Space</div>
                        <p className="width-80 xs-width-100 center-col">I&#39;ve always loved space but felt like space was only for really smart people to think about, but since Elon Musk&#39;s audacious attempts at reaching Mars play out in my lifetime, I can&#39;t help but think that anyone can dream about reaching the stars. I&#39;d love to play a part in making that dream come true with the skills I have and can&#39;t wait till the ticket to space cost as much as traveling to the other side of the world.</p>
                    </div>
                    {/* end service item */}
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
