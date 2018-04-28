import React from "react";

const ne4 = () => {
  return (
    <div>
        {/* start page title section */}
        <section className="wow fadeIn cover-background background-position-top" style ={ { backgroundImage: "url(http://d1ty8z742i6uvq.cloudfront.net/carlobilbao/img/nImage/notebook-hero.jpeg)" } }>
            <div className="opacity-medium bg-extra-dark-gray"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12 display-table page-title-large">
                        <div className="display-table-cell vertical-align-middle text-center padding-30px-tb">
                            {/* start sub title */}
                            <span className="text-white opacity6 alt-font margin-10px-bottom display-block text-uppercase text-small">28 April 2018</span>
                            {/* end sub title */}
                            {/* start page title */}
                            <h1 className="text-white alt-font font-weight-600 margin-10px-bottom">Head Tags Series: name="viewport"</h1>
                            {/* end page title */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* end page title section */}

        {/* start section */}
        <section className="wow fadeIn">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-sm-12 col-xs-12 center-col xs-text-center">
                        <h5 className="font-weight-600 text-extra-dark-gray alt-font accent-color">"This tag helps the developer adjust the screen size for any possible screen size..."</h5>
                        <figure className="wp-caption alignright"><a href="http://d1ty8z742i6uvq.cloudfront.net/carlobilbao/img/nImage/ne4/ne4-snip1.png" target="_blank" rel="noopener noreferrer"><img className="alignright" src="http://d1ty8z742i6uvq.cloudfront.net/carlobilbao/img/nImage/ne4/ne4-snip1.png" alt=""/></a><figcaption className="wp-caption-text">Figure 1</figcaption></figure>
                        <p>In this post, we cover the next set of tags in our head tags series: <b>name=viewport</b>. I recommend adding it right after the <b>charset=”UTF-8”</b> meta tag. A great explainer can be found <a href="https://www.w3schools.com/css/css_rwd_viewport.asp" className="accent-color accent-hover" target="_blank" rel="noopener noreferrer">here</a>. It’s actually not that dense, so I suggest reading it. But a quick summary from <a href="https://teamtreehouse.com/community/what-is-meta-name-viewport-content-widthdevicewidth-initialscale10" className="accent-color accent-hover" target="_blank" rel="noopener noreferrer">here</a> does a great job of summarizing it as well so I’ll post it below.</p>
                        <p>Snippet Start</p>
                        <p>The viewport meta tag tells the browser that the width of the screen should be considered the "Full Width" of the page. Meaning no matter the width of the device you are on, whether on desktop or mobile. the website will follow the width of the device the user is on.</p>
                        <p>Snippet End</p>
                        <p>In summary, when screens first started, there were a limited number of screen sizes and there was a kind of understanding on screen dimensions. Therefore, developers could design pages based on those dimensions. This was fine in the beginning, but as screen sizes began to widely very and devices changed, this way of developing became obsolete or made for terrible user experience. This tag helps the developer adjust the screen size for any possible screen size and should almost always be included any application.</p>
                    </div>
                </div>
            </div>
        </section>
        {/* end section */}

    </div>
  );
}

export default ne4;
