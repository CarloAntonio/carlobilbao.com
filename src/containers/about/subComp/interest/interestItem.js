import React from 'react';

const interestItem = (props) => {
    return (
        <div className="col-md-4 col-sm-6 col-xs-12 text-center last-paragraph-no-margin margin-70px-bottom sm-margin-40px-bottom xs-margin-30px-bottom wow fadeInUp" data-wow-delay={props.delay}>
            <i className="ti-video-camera icon-extra-medium accent-color margin-20px-bottom"></i>
            <div className="text-extra-dark-gray margin-10px-bottom sm-margin-5px-bottom alt-font font-weight-600">{props.title}</div>
            <p className="width-80 xs-width-100 center-col">{props.content}</p>
        </div>
    );
}

export default interestItem;