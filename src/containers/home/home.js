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
                                    <span className="text-extra-small alt-font letter-spacing-2 text-uppercase margin-20px-bottom display-inline-block text-medium-gray">dolor sit amet, consectetur adipiscing</span>
                                    <h2 className="font-weight-600 alt-font margin-40px-bottom sm-margin-20px-bottom text-extra-dark-gray letter-spacing-minus-1">Lorem ipsum dolor sit amet, consectetur elit.</h2>
                                    <div className="social-icon-style-8">
                                        <ul className="small-icon">
                                            <li><a className="facebook text-extra-dark-gray margin-5px-lr" href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook accent-hover" aria-hidden="true"></i></a></li>
                                            <li><a className="dribbble text-extra-dark-gray margin-5px-lr" href="https://instagram.com/" target="_blank"><i className="fa fa-instagram accent-hover" aria-hidden="true"></i></a></li>
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
                        <div className="alt-font margin-20px-bottom sm-margin-20px-bottom text-uppercase text-extra-small letter-spacing-2">Snapshot of Me</div>
                        <h4 className="alt-font font-weight-600 text-white no-margin-bottom">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices feugiat lectus, dapibus tincidunt ante eleifend vitae.</h4>
                        <div className="alt-font text-right margin-40px-top sm-margin-20px-bottom text-uppercase text-extra-small letter-spacing-2"><a className="accent-hover" href="/about">Learn More</a></div>
                    </div>
                </div>
            </div>
        </section>
        {/* end about agency section */}
        {/* start photo gallery section */}
        <section className="wow fadeIn no-padding">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 no-padding lightbox-portfolio">
                        <div id="justified" className="justified-gallery">
                            {/* start gallery item */}
                            <div className=" wow fadeInUp">
                                <a href="http://placehold.it/975x650" className="gallery-link"><img src="http://placehold.it/975x650" alt="Herbal Beauty Salon"/></a>
                            </div>
                            {/* end gallery item */}
                            {/* start gallery item */}
                            <div className=" wow fadeInUp" data-wow-delay="0.2s">
                                <a href="http://placehold.it/800x650" className="gallery-link"><img src="http://placehold.it/800x650" alt="Tailoring Interior"/></a>
                            </div>
                            {/* end gallery item */}
                            {/* start gallery item */}
                            <div className=" wow fadeInUp" data-wow-delay="0.4s">
                                <a href="http://placehold.it/488x650" className="gallery-link"><img src="http://placehold.it/488x650" alt="Pixflow Studio"/></a>
                            </div>
                            {/* end gallery item */}
                            {/* start gallery item */}
                            <div className=" wow fadeInUp" data-wow-delay="0.6s">
                                <a href="http://placehold.it/496x650" className="gallery-link"><img src="http://placehold.it/496x650" alt="Designblast Inc"/></a>
                            </div>
                            {/* end gallery item */}
                            {/* start gallery item */}
                            <div className=" wow fadeInUp">
                                <a href="http://placehold.it/1036x650" className="gallery-link"><img src="http://placehold.it/1036x650" alt="Harddot Stone"/></a>
                            </div>
                            {/* end gallery item */}
                            {/* start gallery item */}
                            <div className=" wow fadeInUp" data-wow-delay="0.2s">
                                <a href="http://placehold.it/488x650" className="gallery-link"><img src="http://placehold.it/488x650" alt="Educamp School"/></a>
                            </div>
                            {/* end gallery item */}
                            {/* start gallery item */}
                            <div className=" wow fadeInUp" data-wow-delay="0.4s">
                                <a href="http://placehold.it/1040x650" className="gallery-link"><img src="http://placehold.it/1040x650" alt="Branding Identity"/></a>
                            </div>
                            {/* end gallery item */}
                            {/* start gallery item */}
                            <div className=" wow fadeInUp">
                                <a href="http://placehold.it/975x650" className="gallery-link"><img src="http://placehold.it/975x650" alt="Violator Series"/></a>
                            </div>
                            {/* end gallery item */}
                            {/* start gallery item */}
                            <div className=" wow fadeInUp" data-wow-delay="0.2s">
                                <a href="http://placehold.it/974x650" className="gallery-link"><img src="http://placehold.it/974x650" alt="Third Eye Glasses"/></a>
                            </div>
                            {/* end gallery item */}
                            {/* start gallery item */}
                            <div className=" wow fadeInUp" data-wow-delay="0.4s">
                                <a href="http://placehold.it/852x650" className="gallery-link"><img src="http://placehold.it/852x650" alt="Herbal Beauty Salon"/></a>
                            </div>
                            {/* end gallery item */}
                            {/* start gallery item */}
                            <div className=" wow fadeInUp">
                                <a href="http://placehold.it/487x650" className="gallery-link"><img src="http://placehold.it/487x650" alt="Banana Design"/></a>
                            </div>
                            {/* end gallery item */}
                            {/* start gallery item */}
                            <div className=" wow fadeInUp" data-wow-delay="0.2s">
                                <a href="http://placehold.it/685x650" className="gallery-link"><img src="http://placehold.it/685x650" alt="Graphic Design"/></a>
                            </div>
                            {/* end gallery item */}
                            {/* start gallery item */}
                            <div className=" wow fadeInUp" data-wow-delay="0.4s">
                                <a href="http://placehold.it/975x650" className="gallery-link"><img src="http://placehold.it/975x650" alt="Web Interactive"/></a>
                            </div>
                            {/* end gallery item */}
                            {/* start gallery item */}
                            <div className=" wow fadeInUp" data-wow-delay="0.6s">
                                <a href="http://placehold.it/487x650" className="gallery-link"><img src="http://placehold.it/487x650" alt="Digital Branding"/></a>
                            </div>
                            {/* end gallery item */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* end photo gallery section */}

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
                                <span class="alt-font margin-10px-bottom display-inline-block text-medium accent-color">Ready to get capture that moment?</span>
                                <h6 class="alt-font text-extra-dark-gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dui sem, dictum quis lacus vitae, venenatis auctor mi.</h6>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum is printing and typesetting simply dummy text.</p>
                                <a href="services-simple.html" class="btn btn-dark-gray btn-small text-extra-small btn-rounded margin-5px-top"><i class="fa fa-play-circle icon-very-small margin-5px-right no-margin-left" aria-hidden="true"></i>let&#39;s do it</a>
                            </div>
                        </div>
                    </div>s
                </div>
            </div>
        </section>
        {/* end contact section */}

    </div>
  );
}

export default home;
