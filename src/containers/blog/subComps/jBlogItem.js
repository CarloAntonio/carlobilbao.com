import React from 'react';

const jBlogItem = (props) => {
    return (
        <div className="col-md-3 col-sm-6 col-xs-12 margin-50px-bottom last-paragraph-no-margin xs-margin-30px-bottom wow fadeInUp" data-wow-delay={props.delay}>
            <div className="blog-post blog-post-style1 xs-text-center">
                <div className="blog-post-images overflow-hidden margin-25px-bottom sm-margin-20px-bottom">
                    <a href={props.link}>
                        <img src={ props.image } alt=""/>
                    </a>
                </div>
                <div className="post-details">
                    <span className="post-author text-extra-small text-medium-gray text-uppercase display-block margin-10px-bottom xs-margin-5px-bottom">{props.date}</span>
                    <a href={props.link} className="post-title text-medium text-extra-dark-gray width-90 display-block sm-width-100 accent-hover">{props.title}</a>
                    <div className="separator-line-horrizontal-full bg-medium-light-gray margin-20px-tb sm-margin-15px-tb"></div>
                    <p className="width-90 xs-width-100">{props.subTitle}</p>
                </div>
            </div>
        </div>
    );
} 

export default jBlogItem;