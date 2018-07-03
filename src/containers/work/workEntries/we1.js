import React from "react";

import workBg from '../../../assets/img/work-filler.jpeg';

const we1 = () => {
  return (
    <div>
        {/* Hero */}
        <section id="home" class="no-padding parallax mobile-height wow fadeIn" data-stellar-background-ratio="0.5" style ={ { backgroundImage: `url(${ workBg })` } }>
            <div class="opacity-full bg-black"></div>
            <div class="container position-relative full-screen">
                <div class="slider-typography text-center">
                    <div class="slider-text-middle-main">
                        <div class="slider-text-middle">
                            <div class="text-bottom-line accent-color margin-25px-bottom"></div>
                            <h1 class="text-white alt-font font-weight-700">Darryl Jon Visuals</h1>
                            <span class="width-60 center-col text-extra-large display-block  margin-20px-top line-height-30 xs-width-90">Videographer and photographer from the Bay Area focusing on capturing life moments and creating social media content.</span>
                            <div class="down-section text-center"><a href="#down-section" class="inner-link"><i class="ti-arrow-down icon-extra-small text-white accent-bg padding-15px-all xs-padding-10px-all border-radius-100"></i></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Intro */}
        <section class="wow fadeIn big-section" id="down-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-11 center-col text-center margin-70px-bottom sm-margin-50px-bottom xs-margin-30px-bottom wow fadeInUp">
                        <h6 class="alt-font text-extra-dark-gray">Holistic brand redesign focusing product design, interface design, studio photograph style, icon design, editorial design, web design & motion design.</h6>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12 no-padding margin-70px-bottom sm-margin-50px-bottom xs-margin-30px-bottom fadeInUp">
                        <div class="col-md-3 padding-30px-lr">
                            <ul class="list-style-6">
                                <li class="text-extra-small text-uppercase text-black font-weight-500 line-height-22">Client</li>
                                <li>Darryl Jon Baello</li>
                            </ul>
                        </div>
                        <div class="col-md-3 padding-30px-lr">
                            <ul class="list-style-6">
                                <li class="text-extra-small text-uppercase text-black font-weight-500 line-height-22">Industry</li>
                                <li>Photography, Videography, Content Creation</li>
                            </ul>
                        </div>
                        <div class="col-md-3 padding-30px-lr">
                            <ul class="list-style-6">
                                <li class="text-extra-small text-uppercase text-black font-weight-500 line-height-22">Services</li>
                                <li>Website Design & Execution</li>
                            </ul>
                        </div>
                        <div class="col-md-3 padding-30px-lr">
                            <ul class="list-style-6">
                                <li class="text-extra-small text-uppercase text-black font-weight-500 line-height-22">Date</li>
                                <li>June 13, 2018</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-10 center-col text-center wow fadeInUp" data-wow-delay="0.4s">
                        <a href="https://www.darryljonvisuals.com" class="btn btn-transparent-dark-gray btn-large">Launch Website</a>
                    </div>
                </div>
            </div>
        </section>

        {/* About Project */}
        <section class="bg-extra-dark-gray wow fadeIn">
            <div class="container-fluid">
                <div class="row equalize sm-equalize-auto">
                    <div class="col-md-12 col-sm-12 col-xs-12 display-table wow fadeIn">
                        <div class="display-table-cell-vertical-middle padding-thirteen-all md-padding-ten-all sm-padding-six-all xs-padding-50px-tb xs-no-padding-lr">
                            <h5 class="alt-font text-white sm-text-center margin-eight-bottom font-weight-600">Project Challenges and Goals.</h5>
                            <div class="panel-group accordion-style1" id="accordion-design">
                                {/* start accordion item */}
                                <div class="panel">
                                    <div class="panel-heading">
                                        <a data-toggle="collapse" data-parent="#accordion-design" href="#design1" class="collapsed" aria-expanded="false"><div class="panel-title font-weight-500 text-white text-uppercase">What was the goal of this project?<span class="pull-right"><i class="ti-minus"></i></span></div></a>
                                    </div>
                                    <div id="design1" class="panel-collapse collapse in">
                                        <div class="panel-body">
                                            The goal of this project was to upgrade the client's online presence from a limited, self-made WordPress website to a rich and interactive React website. 
                                            I also wanted to present the client in the same light he carried himself in the real world: a professional, collected, and experienced photographer and videographer. 
                                        </div>
                                    </div>
                                </div>
                                {/* end accordion item */}
                                {/* start accordion item */}
                                <div class="panel">
                                    <div class="panel-heading">
                                        <a data-toggle="collapse" data-parent="#accordion-design" href="#design2" class="collapsed" aria-expanded="false"><div class="panel-title font-weight-500 text-white text-uppercase">How were the goals reached?<span class="pull-right"><i class="ti-plus"></i></span></div></a>
                                    </div>
                                    <div id="design2" class="panel-collapse collapse">
                                        <div class="panel-body">
                                            The goal of this project was reached by first creating a simple and clean layout. The front page comes across like a business card that plays a video giving off an aura of professionalism. 
                                            The front page also immediately greets the visitor with all of the client's highlighted work, tabbed to present content to the visitor's interest. 
                                        </div>
                                    </div>
                                </div>
                                {/* end accordion item */}
                                {/* start accordion item */}
                                <div class="panel">
                                    <div class="panel-heading">
                                        <a data-toggle="collapse" data-parent="#accordion-design" href="#design3" class="collapsed" aria-expanded="false"><div class="panel-title font-weight-500 text-white text-uppercase">How were goals set?<span class="pull-right"><i class="ti-plus"></i></span></div></a>
                                    </div>
                                    <div id="design3" class="panel-collapse collapse">
                                        <div class="panel-body">
                                            The client and I set goals over drinks at a local coffee shop. I asked what he wanted to get out of updating his website and if it was worth upgrading his then-smaller WordPress website.
                                            We highlighted three main goals: cleaner design, highlight of previous projects, and presenting a professional look.
                                        </div>
                                    </div>
                                </div>
                                {/* end accordion item */}
                                {/* start accordion item */}
                                <div class="panel">
                                    <div class="panel-heading">
                                        <a data-toggle="collapse" data-parent="#accordion-design" href="#design4" class="collapsed" aria-expanded="false"><div class="panel-title font-weight-500 text-white text-uppercase">What are some technologies used on this project?<span class="pull-right"><i class="ti-plus"></i></span></div></a>
                                    </div>
                                    <div id="design4" class="panel-collapse collapse">
                                        <div class="panel-body">
                                            The client's website uses the usual technologies for website creation, namely HTML, CSS, and Javascript. 
                                            The website also uses the React Library + Associated React Libraries that bring it to Framework status, to provide a performance boost and "lazy-loads" seldom used links for a slight performance boost.
                                        </div>
                                    </div>
                                </div>
                                {/* end accordion item */}
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>



        {/* Skills Used */}
        <section className="wow fadeIn bg-light-gray">
            <div className="container">
                <div className="row equalize sm-equalize-auto">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 display-table wow fadeIn last-paragraph-no-margin">
                        <div className="display-table-cell vertical-align-middle padding-seventeen-right sm-no-padding-lr sm-text-center sm-padding-30px-bottom">
                            <h6 className="text-extra-dark-gray width-90 alt-font sm-width-100 margin-15px-bottom">Project skills & expertise</h6>
                            <p className="width-90 margin-30px-bottom sm-width-100">Top four skills used to execute this project and level of competency during the development of this project</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 display-table sm-no-margin-bottom wow fadeIn">
                        <div className="display-table-cell vertical-align-middle">
                            <div className="skillbar-bar-main skillbar-bar-style2">
                                {/* start progress bar item */}
                                <div className="skillbar margin-45px-bottom" data-percent="92%">
                                    <span className="skill-bar-text text-extra-small text-uppercase text-dark-gray">HTML & CSS - 1 Year(s) Experience</span>
                                    <p className="skillbar-bar"></p>
                                    <span className="skill-bar-percent text-small"></span>
                                </div>
                                {/* end progress bar item */}
                                {/* start progress bar item */}
                                <div className="skillbar margin-45px-bottom" data-percent="97%">
                                    <span className="skill-bar-text text-extra-small text-uppercase text-dark-gray">Javascript - 1 Year(s) Experience</span>
                                    <p className="skillbar-bar"></p>
                                    <span className="skill-bar-percent text-small"></span>
                                </div>
                                {/* end progress bar item */}
                                {/* start progress bar item */}
                                <div className="skillbar margin-45px-bottom" data-percent="75%">
                                    <span className="skill-bar-text text-extra-small text-uppercase text-dark-gray">Bootstrap - 1 Year(s) Experience</span>
                                    <p className="skillbar-bar"></p>
                                    <span className="skill-bar-percent text-small"></span>
                                </div>
                                {/* end progress bar item */}
                                {/* start progress bar item */}
                                <div className="skillbar" data-percent="70%">
                                    <span className="skill-bar-text text-extra-small text-uppercase text-dark-gray">React - 1 Year(s) Experience</span>
                                    <p className="skillbar-bar"></p>
                                    <span className="skill-bar-percent text-small"></span>
                                </div>
                                {/* end progress bar item */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Feedback */}
        <section className="wow fadeIn">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 center-col text-center">
                        <i className="fa fa-quote-left icon-small accent-color display-block margin-25px-bottom"></i>
                        <h6 className="alt-font text-extra-dark-gray">Carlo has great work ethic and interpersonal skills. His experience in aesthetics, content, functionality, and optimization which really helped my website come to life. We outlined an idea for my website and he went above and beyond in creating a page that fits that idea while taking it to a whole new level. He is highly dependable and communicated with me regularly on the progress. Carlo undoubtedly would be a great choice when choosing a website developer.</h6>
                        <span className="text-uppercase text-extra-small alt-font letter-spacing-3 text-medium-gray">Darryl Jon Beallo</span>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default we1;