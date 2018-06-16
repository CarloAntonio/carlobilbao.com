import React from "react";

import notebookHero from '../../../assets/img/notebook-hero.jpg';

const notebook = () => {
  return (
    <div>

        {/* start page title section */}
        <section className="wow fadeIn parallax" data-stellar-background-ratio="0.5" style ={ { backgroundImage: `url(${ notebookHero })` } }>
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
        <section className="wow fadeIn bg-light-gray">
            <div className="container-fluid">
                <div className="row padding-15px-lr xs-no-padding equalize xs-equalize-auto">
                    <div className="col-md-3 col-sm-6 col-xs-12 margin-30px-bottom xs-margin-15px-bottom wow fadeInUp">
                        {/* fresh news item */}
                        <a href="/blog/notebook/ne/ne1">
                        <div className="blog-post blog-post-style7 border-all border-color-light-gray padding-fourteen-all md-padding-ten-all xs-padding-30px-all bg-white inner-match-height">
                            <div className="post-details">
                                <span className="text-extra-small text-uppercase display-block margin-four-bottom sm-margin-two-bottom">29 March 2018</span>
                                <span className="text-large alt-font margin-50px-bottom sm-margin-30px-bottom display-block">Hello Notebook.</span>
                                <div className="author padding-10px-top position-relative">
                                    <span className="text-uppercase text-extra-small">What to expect from this blog and tips on learning how to program.</span>
                                </div>
                            </div>
                        </div>
                        </a>
                        {/* end fresh news item */}
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 margin-30px-bottom xs-margin-15px-bottom wow fadeInUp" data-wow-delay="0.2s">
                        {/* fresh news item */}
                        <a href="/blog/notebook/ne/ne2">
                        <div className="blog-post blog-post-style7 border-all border-color-light-gray padding-fourteen-all md-padding-ten-all xs-padding-30px-all bg-white inner-match-height">
                            <div className="post-details">
                                <span className="text-extra-small text-uppercase display-block margin-four-bottom sm-margin-two-bottom">7 April 2018</span>
                                <span className="text-large alt-font margin-50px-bottom sm-margin-30px-bottom display-block">Index.html Minimum Tags</span>
                                <div className="author padding-10px-top position-relative">
                                    <span className="text-uppercase text-extra-small">Explaining the minimum required html tags required to create a website</span>
                                </div>
                            </div>
                        </div>
                        </a>
                        {/* end fresh news item */}
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 margin-30px-bottom xs-margin-15px-bottom wow fadeInUp" data-wow-delay="0.4s">
                        {/* fresh news item */}
                        <a href="/blog/notebook/ne/ne3">
                        <div className="blog-post blog-post-style7 border-all border-color-light-gray padding-fourteen-all md-padding-ten-all xs-padding-30px-all bg-white inner-match-height">
                            <div className="post-details">
                                <span className="text-extra-small text-uppercase display-block margin-four-bottom sm-margin-two-bottom">18 April 2018</span>
                                <span className="text-large alt-font margin-50px-bottom sm-margin-30px-bottom display-block">Head Tags Series: "charset=utf-8"</span>
                                <div className="author padding-10px-top position-relative">
                                    <span className="text-uppercase text-extra-small">Explaining the reasoning behind including the "charset=utf-8" meta tag</span>
                                </div>
                            </div>
                        </div>
                        </a>
                        {/* end fresh news item */}
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 margin-30px-bottom xs-margin-15px-bottom wow fadeInUp" data-wow-delay="0.6s">
                        {/* fresh news item */}
                        <a href="/blog/notebook/ne/ne4">
                        <div className="blog-post blog-post-style7 border-all border-color-light-gray padding-fourteen-all md-padding-ten-all xs-padding-30px-all bg-white inner-match-height">
                            <div className="post-details">
                                <span className="text-extra-small text-uppercase display-block margin-four-bottom sm-margin-two-bottom">28 April 2018</span>
                                <span className="text-large alt-font margin-50px-bottom sm-margin-30px-bottom display-block">Head Tags Series: name="viewport"</span>
                                <div className="author padding-10px-top position-relative">
                                    <span className="text-uppercase text-extra-small">Explaining the reasoning behind including the "name=viewport" meta tag</span>
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
