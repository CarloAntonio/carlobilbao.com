import React from 'react';

const blogItem = (props) => {
    return (
        <div className="col-md-3 col-sm-6 col-xs-12 margin-30px-bottom xs-margin-15px-bottom wow fadeInUp" data-wow-delay={props.delay}>
            {/* fresh news item */}
            <a href={props.link}>
            <div className="blog-post blog-post-style7 border-all border-color-light-gray padding-fourteen-all md-padding-ten-all xs-padding-30px-all bg-white inner-match-height">
                <div className="post-details">
                    <span className="text-extra-small text-uppercase display-block margin-four-bottom sm-margin-two-bottom">{props.date}</span>
                    <span className="text-large alt-font margin-50px-bottom sm-margin-30px-bottom display-block">{props.title}</span>
                    <div className="author padding-10px-top position-relative">
                        <span className="text-uppercase text-extra-small">{props.subTitle}</span>
                    </div>
                </div>
            </div>
            </a>
            {/* end fresh news item */}
        </div>
    );
}

export default blogItem;