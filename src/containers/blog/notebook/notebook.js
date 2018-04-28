import React from "react";
import hero from '../../../images/notebook-hero.jpg';

const notebook = () => {
  return (
    <div>

        {/* start page title section */}
        <section className="wow fadeIn parallax" data-stellar-background-ratio="0.5" style ={ { backgroundImage: `url(${hero})` } }>
            <div className="opacity-medium bg-extra-dark-gray"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12 extra-small-screen display-table page-title-large">
                        <div className="display-table-cell vertical-align-middle text-center">
                            {/* start page title */}
                            <h1 className="text-white alt-font font-weight-600 letter-spacing-minus-1 margin-10px-bottom">Notebook</h1>
                            <span className="text-white opacity6 alt-font">A structured blog dedicated to programming, for people to reference, but mostly to help me remember the things I learned during my programming career.</span>
                            {/* end page title */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* end page title section */}

        {/* start post content section */}
        <section class="wow fadeIn bg-light-gray">
            <div class="container-fluid">
                <div class="row padding-15px-lr xs-no-padding equalize xs-equalize-auto">
                    <div class="col-md-3 col-sm-6 col-xs-12 margin-30px-bottom xs-margin-15px-bottom wow fadeInUp">
                        {/* fresh news item */}
                        <a href="/blog/notebook/ne/ne1">
                        <div class="blog-post blog-post-style7 border-all border-color-light-gray padding-fourteen-all md-padding-ten-all xs-padding-30px-all bg-white inner-match-height">
                            <div class="post-details">
                                <span class="text-extra-small text-uppercase display-block margin-four-bottom sm-margin-two-bottom">29 March 2018</span>
                                <span class="text-large alt-font margin-50px-bottom sm-margin-30px-bottom display-block">Hello Notebook.</span>
                                <div class="author padding-10px-top position-relative">
                                    <span class="text-uppercase text-extra-small">What to expect from this blog and tips on learning how to program.</span>
                                </div>
                            </div>
                        </div>
                        </a>
                        {/* end fresh news item */}
                    </div>
                    <div class="col-md-3 col-sm-6 col-xs-12 margin-30px-bottom xs-margin-15px-bottom wow fadeInUp" data-wow-delay="0.2s">
                        {/* fresh news item */}
                        <a href="/blog/notebook/ne/ne2">
                        <div class="blog-post blog-post-style7 border-all border-color-light-gray padding-fourteen-all md-padding-ten-all xs-padding-30px-all bg-white inner-match-height">
                            <div class="post-details">
                                <span class="text-extra-small text-uppercase display-block margin-four-bottom sm-margin-two-bottom">7 April 2018</span>
                                <span class="text-large alt-font margin-50px-bottom sm-margin-30px-bottom display-block"><a href="blog-post-layout-01.html">The design process, at its best, integrates the aspirations of art, science, and culture.</a></span>
                                <div class="author padding-10px-top position-relative">
                                    <span class="text-uppercase text-extra-small">by <a href="javascript:void(0);">Herman Miller</a></span>
                                </div>
                            </div>
                        </div>
                        </a>
                        {/* end fresh news item */}
                    </div>
                    <div class="col-md-3 col-sm-6 col-xs-12 margin-30px-bottom xs-margin-15px-bottom wow fadeInUp" data-wow-delay="0.4s">
                        {/* fresh news item */}
                        <a href="/blog/notebook/ne/ne3">
                        <div class="blog-post blog-post-style7 border-all border-color-light-gray padding-fourteen-all md-padding-ten-all xs-padding-30px-all bg-white inner-match-height">
                            <div class="post-details">
                                <span class="text-extra-small text-uppercase display-block margin-four-bottom sm-margin-two-bottom">18 April 2018</span>
                                <span class="text-large alt-font margin-50px-bottom sm-margin-30px-bottom display-block"><a href="blog-post-layout-03.html">Design is an opportunity to continue telling the story, not just to sum everything up.</a></span>
                                <div class="author padding-10px-top position-relative">
                                    <span class="text-uppercase text-extra-small">by <a href="javascript:void(0);">Hugh Macleod</a></span>
                                </div>
                            </div>
                        </div>
                        </a>
                        {/* end fresh news item */}
                    </div>
                    <div class="col-md-3 col-sm-6 col-xs-12 margin-30px-bottom xs-margin-15px-bottom wow fadeInUp" data-wow-delay="0.6s">
                        {/* fresh news item */}
                        <a href="/blog/notebook/ne/ne4">
                        <div class="blog-post blog-post-style7 border-all border-color-light-gray padding-fourteen-all md-padding-ten-all xs-padding-30px-all bg-white inner-match-height">
                            <div class="post-details">
                                <span class="text-extra-small text-uppercase display-block margin-four-bottom sm-margin-two-bottom">28 April 2018</span>
                                <span class="text-large alt-font margin-50px-bottom sm-margin-30px-bottom display-block"><a href="blog-post-layout-04.html">Let us sacrifice our today so that our children can have a better tomorrow.</a></span>
                                <div class="author padding-10px-top position-relative">
                                    <span class="text-uppercase text-extra-small">by <a href="javascript:void(0);">Jennifer Freeman</a></span>
                                </div>
                            </div>
                        </div>
                        </a>
                        {/* end fresh news item */}
                    </div>
                </div>
            </div>
        </section>
        {/* end blog content section */}

    </div>
  );
}

export default notebook;
