import React from "react";

const work = () => {
  return (
    <div>

        {/* start countdown section */}
        <section className="no-padding full-screen cover-background" style ={ { backgroundImage: "url(http://d1ty8z742i6uvq.cloudfront.net/carlobilbao/img/work-filler.jpeg)" } }>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="position-relative full-screen">
                            <div className="slider-typography text-center xs-overflow-auto">
                                <div className="slider-text-middle-main padding-ten-tb">
                                    <div className="slider-text-middle bg-black-opacity xs-padding-15px-all">
                                        <div className="margin-eight-bottom xs-margin-30-bottom"><img src="images/logo-white.png" data-at2x="images/logo-white@2x.png" alt="" /></div>
                                        <h6 className="font-weight-300 text-white margin-30px-bottom width-45 center-col sm-width-60 xs-width-100 c-strike">Updating, check back soon!</h6>
                                        <div data-enddate="2017/12/01 12:30:00" className="countdown text-center text-white counter-box-5"></div>
                                        <div className="col-md-12 text-center social-icon-style-10 margin-six-top xs-margin-30px-top xs-no-padding">
                                            <ul className="large-icon no-margin-bottom">
                                                <li><a className="text-white accent-bg-hover" href="https://www.linkedin.com/in/carlo-bilbao/" target="_blank"><i className="fa fa-linkedin "></i><span></span></a></li>
                                                <li><a className="text-white accent-bg-hover" href="https://instagram.com/carloantoniob/" target="_blank"><i className="fa fa-instagram"></i><span></span></a></li>
                                                <li><a className="text-white accent-bg-hover" href="https://www.youtube.com/channel/UC8fnvYf5xW-8YVgJCRqSjsA" target="_blank"><i className="fa fa-youtube"></i><span></span></a></li>
                                                <li><a className="text-white accent-bg-hover" href="https://medium.com/@cbilbao88" target="_blank"><i className="fa fa-medium"></i><span></span></a></li>
                                                <li><a className="text-white accent-bg-hover" href="https://twitter.com/CarloAntonioB" target="_blank"><i className="fa fa-twitter"></i><span></span></a></li>
                                                <li><a className="text-white accent-bg-hover" href="https://www.facebook.com/carlo.anthony.7" target="_blank"><i className="fa fa-facebook"></i><span></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* start countdown section */}

    </div>
  );
}

export default work;
