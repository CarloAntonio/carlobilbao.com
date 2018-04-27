import React from "react";
import hero from '../../../images/notebook-hero.jpg';
import ne1_tb from "../../../images/nImage/ne1/ne1-tb.jpeg";

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
        <section className="wow fadeIn">
            <div className="container">
                <div className="row col-4-nth sm-col-2-nth">
                    {/* start post item */}
                    <div className="col-md-3 col-sm-6 col-xs-12 margin-50px-bottom last-paragraph-no-margin xs-margin-30px-bottom wow fadeInUp">
                        <div className="blog-post blog-post-style1 xs-text-center">
                            <div className="blog-post-images overflow-hidden margin-25px-bottom sm-margin-20px-bottom">
                                <a href="/blog/notebook/ne/ne1">
                                    <img src={ ne1_tb } alt=""/>
                                </a>
                            </div>
                            <div className="post-details">
                                <span className="post-author text-extra-small text-medium-gray text-uppercase display-block margin-10px-bottom xs-margin-5px-bottom">29 March 2018</span>
                                <a href="/blog/notebook/ne/ne1" className="post-title text-medium text-extra-dark-gray width-90 display-block sm-width-100 accent-hover">Hello Notebook.</a>
                                <div className="separator-line-horrizontal-full bg-medium-light-gray margin-20px-tb sm-margin-15px-tb"></div>
                                <p className="width-90 xs-width-100">What to expect from this blog and tips on learning how to program.</p>
                            </div>
                        </div>
                    </div>
                    {/* end post item */}
                    {/* start post item */}
                    <div className="col-md-3 col-sm-6 col-xs-12 margin-50px-bottom last-paragraph-no-margin xs-margin-30px-bottom wow fadeInUp" data-wow-delay="0.2s">
                        <div className="blog-post blog-post-style1 xs-text-center">
                            <div className="blog-post-images overflow-hidden margin-25px-bottom sm-margin-20px-bottom">
                                <a href="/blog/notebook/ne/ne2">
                                    <img src="http://placehold.it/700x500" alt=""/>
                                </a>
                            </div>
                            <div className="post-details">
                                <span className="post-author text-extra-small text-medium-gray text-uppercase display-block margin-10px-bottom  xs-margin-5px-bottom">03 July 2017 | by <a href="blog-masonry.html" className="text-medium-gray">Herman Miller</a></span>
                                <a href="/blog/notebook/ne/ne2" className="post-title text-medium text-extra-dark-gray width-90 display-block sm-width-100">Good design accelerates the adoption of new ideas.</a>
                                <div className="separator-line-horrizontal-full bg-medium-light-gray margin-20px-tb sm-margin-15px-tb"></div>
                                <p className="width-90 xs-width-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum text...</p>
                            </div>
                        </div>
                    </div>
                    {/* end post item */}
                    {/* start post item */}
                    <div className="col-md-3 col-sm-6 col-xs-12 margin-50px-bottom last-paragraph-no-margin xs-margin-30px-bottom wow fadeInUp" data-wow-delay="0.4s">
                        <div className="blog-post blog-post-style1 xs-text-center">
                            <div className="blog-post-images overflow-hidden margin-25px-bottom sm-margin-20px-bottom">
                                <a href="blog-post-layout-03.html">
                                    <img src="http://placehold.it/700x500" alt=""/>
                                </a>
                            </div>
                            <div className="post-details">
                                <span className="post-author text-extra-small text-medium-gray text-uppercase display-block margin-10px-bottom  xs-margin-5px-bottom">22 June 2017 | by <a href="blog-masonry.html" className="text-medium-gray">Hugh Macleod</a></span>
                                <a href="blog-post-layout-03.html" className="post-title text-medium text-extra-dark-gray width-90 display-block sm-width-100">Design is inherently optimistic. That is its power.</a>
                                <div className="separator-line-horrizontal-full bg-medium-light-gray margin-20px-tb sm-margin-15px-tb"></div>
                                <p className="width-90 xs-width-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum text...</p>
                            </div>
                        </div>
                    </div>
                    {/* end post item */}
                    {/* start post item */}
                    <div className="col-md-3 col-sm-6 margin-50px-bottom col-xs-12 last-paragraph-no-margin xs-margin-30px-bottom wow fadeInUp" data-wow-delay="0.6s">
                        <div className="blog-post blog-post-style1 xs-text-center">
                            <div className="blog-post-images overflow-hidden margin-25px-bottom sm-margin-20px-bottom">
                                <a href="blog-post-layout-04.html">
                                    <img src="http://placehold.it/700x500" alt=""/>
                                </a>
                            </div>
                            <div className="post-details">
                                <span className="post-author text-extra-small text-medium-gray text-uppercase display-block margin-10px-bottom  xs-margin-5px-bottom">02 June 2017 | by <a href="blog-masonry.html" className="text-medium-gray">Jennifer Freeman</a></span>
                                <a href="blog-post-layout-04.html" className="post-title text-medium text-extra-dark-gray width-90 display-block sm-width-100">I wish someone would ask me to design a cathedral.</a>
                                <div className="separator-line-horrizontal-full bg-medium-light-gray margin-20px-tb sm-margin-15px-tb"></div>
                                <p className="width-90 xs-width-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum text...</p>
                            </div>
                        </div>
                    </div>
                    {/* end post item */}
                </div>
            </div>
        </section>
        {/* end blog content section */}

    </div>
  );
}

export default notebook;
