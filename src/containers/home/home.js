import React from "react";

const home = () => {
  return (
    <div>

        {/* start hero section */}
        <section className="wow fadeIn no-padding one-fourth-screen position-relative parallax xs-background-image-center" data-stellar-background-ratio="0.5" style ={ { backgroundImage: "url('http://placehold.it/1920x1080')" } }>
            <div className="container">
                <div className="row height-100">
                    <div className="slider-typography">
                        <div className="slider-text-middle-main">
                            <div className="slider-text-middle">
                                <div className="col-lg-4 col-md-8 col-sm-10 col-xs-12 center-col text-center">
                                    <span className="text-extra-small alt-font letter-spacing-2 text-uppercase margin-20px-bottom display-inline-block text-medium-gray">Carlo Antonio Soriano Bilbao</span>
                                    <h2 className="font-weight-600 alt-font margin-40px-bottom sm-margin-20px-bottom text-extra-dark-gray letter-spacing-minus-1">Software Developer, Science Geek, Life-Long Learner</h2>
                                    <div className="social-icon-style-8">
                                        <ul className="small-icon">
                                            <li><a className="linkedin text-extra-dark-gray margin-5px-lr" href="https://www.linkedin.com/in/carlo-bilbao/" target="_blank"><i className="fa fa-linkedin accent-hover" aria-hidden="true"></i></a></li>
                                            <li><a className="dribbble text-extra-dark-gray margin-5px-lr" href="https://instagram.com/" target="_blank"><i className="fa fa-instagram accent-hover" aria-hidden="true"></i></a></li>
                                            <li><a className="medium text-extra-dark-gray margin-5px-lr" href="https://medium.com/@cbilbao88" target="_blank"><i className="fa fa-medium accent-hover" aria-hidden="true"></i></a></li>
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
        {/* end hero section */}

        {/* about agency section */}
        <section className="big-section wow fadeIn bg-black" id="about">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-5 col-md-8 col-sm-10 col-xs-12 center-col text-center">
                        <div className="alt-font margin-20px-bottom sm-margin-20px-bottom text-uppercase text-extra-small letter-spacing-2">About Me</div>
                        <h4 className="alt-font font-weight-600 text-white no-margin-bottom">Hi, I&#39;m Carlo, a web developer based in SF. I&#39;m passionate about using new technology to solve old problems.</h4>
                        <div className="alt-font text-right margin-40px-top sm-margin-20px-bottom text-uppercase text-extra-small letter-spacing-2"><a className="accent-hover" href="/about">Learn More</a></div>
                    </div>
                </div>
            </div>
        </section>
        {/* end about agency section */}

        {/* start contact section */}
        <section class="wow fadeIn animated animated">
            <div class="container">
                <div class="row equalize sm-equalize-auto">
                    <div class="col-md-5 col-sm-12 col-xs-12 text-center sm-margin-30px-bottom wow fadeInLeft">
                        <div class="display-table width-100 height-100">
                            <div class="display-table-cell vertical-align-middle width-100 height-100">
                                <img src="http://placehold.it/900x650" alt="" class="border-radius-6 width-100"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-7 col-sm-12 col-xs-12 wow fadeInRight" data-wow-delay="0.2s">
                        <div class="display-table width-100 height-100">
                            <div class="display-table-cell vertical-align-middle padding-twelve-lr sm-text-center sm-no-padding width-100">
                                <span class="alt-font margin-10px-bottom display-inline-block text-medium accent-color">Let&#39;s build something together</span>
                                <h6 class="alt-font text-extra-dark-gray">If you are interested in a new project, collaboration, or a reason to get drinks don&#39;t hesitate to get in contact with me.</h6>
                                <p>I&#39;m currently available for freelance work, so if you fancy a chat, click the button below!</p>
                                <a href="/contact" class="btn btn-dark-gray btn-small text-extra-small btn-rounded margin-5px-top"><i class="fa fa-play-circle icon-very-small margin-5px-right no-margin-left" aria-hidden="true"></i>let&#39;s do it</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* end contact section */}

    </div>
  );
}

export default home;
