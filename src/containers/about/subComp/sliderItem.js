import React from 'react';

const sliderItem = (props) => {
    return (
        <div className="swiper-slide last-paragraph-no-margin padding-twenty-five-top cover-background"style ={ { backgroundImage: `url(${ props.slider })` } }>
            <div className="padding-eighteen-lr padding-twenty-five-top margin-ten-top md-padding-eight-lr sm-padding-thirteen-lr xs-padding-15px-lr">
                <div className="margin-100px-bottom text-center position-relative">
                    <span className="title-large alt-font font-weight-100 text-dark-gray opacity4 text-standout">{props.num}</span>
                </div>
            </div>
        </div>
    )
}

export default sliderItem;