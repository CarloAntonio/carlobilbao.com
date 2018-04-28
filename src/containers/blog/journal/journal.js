import React from "react";
import hero from "../../../images/journal-hero.jpeg";
import je1_tb from "../../../images/jImage/je1/je1-tb.jpg";
import je2_tb from "../../../images/jImage/je2/je2-tb.jpeg";
import je3_tb from "../../../images/jImage/je3/je3-tb.jpeg";
import je4_tb from "../../../images/jImage/je4/je4-tb.jpeg";

const journal = () => {
  return (
    <div>

        {/* start page title section */}
        <section className="wow fadeIn parallax" data-stellar-background-ratio="0.5" style ={ { backgroundImage: `url(${ hero })` } }>
            <div className="opacity-medium bg-extra-dark-gray"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12 extra-small-screen display-table page-title-large">
                        <div className="display-table-cell vertical-align-middle text-center">
                            {/* start page title */}
                            <h1 className="text-white alt-font font-weight-600 letter-spacing-minus-1 margin-10px-bottom">Journal</h1>
                            <span className="text-white opacity6 alt-font">A free flowing, open subject blog where I talk about things that are interesting and thought provoking to me.</span>
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
                                <a href="/blog/journal/je/je1">
                                    <img src={ je1_tb } alt=""/>
                                </a>
                            </div>
                            <div className="post-details">
                                <span className="post-author text-extra-small text-medium-gray text-uppercase display-block margin-10px-bottom xs-margin-5px-bottom">07 April 2018</span>
                                <a href="/blog/journal/je/je1" className="post-title text-medium text-extra-dark-gray width-90 display-block sm-width-100 accent-hover">Hello Journal.</a>
                                <div className="separator-line-horrizontal-full bg-medium-light-gray margin-20px-tb sm-margin-15px-tb"></div>
                                <p className="width-90 xs-width-100">Exploring the decision to start journaling (again) and my personal pitfalls of keeping a journal.</p>
                            </div>
                        </div>
                    </div>
                    {/* end post item */}
                    {/* start post item */}
                    <div className="col-md-3 col-sm-6 col-xs-12 margin-50px-bottom last-paragraph-no-margin xs-margin-30px-bottom wow fadeInUp" data-wow-delay="0.2s">
                        <div className="blog-post blog-post-style1 xs-text-center">
                            <div className="blog-post-images overflow-hidden margin-25px-bottom sm-margin-20px-bottom">
                                <a href="/blog/journal/je/je2">
                                    <img src={ je2_tb } alt=""/>
                                </a>
                            </div>
                            <div className="post-details">
                                <span className="post-author text-extra-small text-medium-gray text-uppercase display-block margin-10px-bottom  xs-margin-5px-bottom">16 April 2018</span>
                                <a href="/blog/journal/je/je2" className="post-title text-medium text-extra-dark-gray width-90 display-block sm-width-100 accent-hover">Hello World. (Repost)</a>
                                <div className="separator-line-horrizontal-full bg-medium-light-gray margin-20px-tb sm-margin-15px-tb"></div>
                                <p className="width-90 xs-width-100">Exploring the origins of the very first program most people will create (Repost from Medium - Oct. 24, 2017)</p>
                            </div>
                        </div>
                    </div>
                    {/* end post item */}
                    {/* start post item */}
                    <div className="col-md-3 col-sm-6 col-xs-12 margin-50px-bottom last-paragraph-no-margin xs-margin-30px-bottom wow fadeInUp" data-wow-delay="0.4s">
                        <div className="blog-post blog-post-style1 xs-text-center">
                            <div className="blog-post-images overflow-hidden margin-25px-bottom sm-margin-20px-bottom">
                                <a href="/blog/journal/je/je3">
                                    <img src={ je3_tb } alt=""/>
                                </a>
                            </div>
                            <div className="post-details">
                                <span className="post-author text-extra-small text-medium-gray text-uppercase display-block margin-10px-bottom  xs-margin-5px-bottom">25 April 2018</span>
                                <a href="/blog/journal/je/je3" className="post-title text-medium text-extra-dark-gray width-90 display-block sm-width-100 accent-hover">My First Tech Meet-Up. (Repost)</a>
                                <div className="separator-line-horrizontal-full bg-medium-light-gray margin-20px-tb sm-margin-15px-tb"></div>
                                <p className="width-90 xs-width-100">Recounting the first time I went to a tech meet-up, reasons to go, and what I learned (Repost from Medium - Nov. 01, 2017)</p>
                            </div>
                        </div>
                    </div>
                    {/* end post item */}
                    {/* start post item */}
                    <div className="col-md-3 col-sm-6 margin-50px-bottom col-xs-12 last-paragraph-no-margin xs-margin-30px-bottom wow fadeInUp" data-wow-delay="0.6s">
                        <div className="blog-post blog-post-style1 xs-text-center">
                            <div className="blog-post-images overflow-hidden margin-25px-bottom sm-margin-20px-bottom">
                                <a href="/blog/journal/je/je4">
                                    <img src={ je4_tb } alt=""/>
                                </a>
                            </div>
                            <div className="post-details">
                                <span className="post-author text-extra-small text-medium-gray text-uppercase display-block margin-10px-bottom  xs-margin-5px-bottom">29 April 2018</span>
                                <a href="/blog/journal/je/je4" className="post-title text-medium text-extra-dark-gray width-90 display-block sm-width-100 accent-hover">Court Therapy.</a>
                                <div className="separator-line-horrizontal-full bg-medium-light-gray margin-20px-tb sm-margin-15px-tb"></div>
                                <p className="width-90 xs-width-100">How a story that happened decades ago, told during my birthday dinner, helped me appreciate my access to the game of basketball.</p>
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

export default journal;
