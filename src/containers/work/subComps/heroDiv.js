import React from 'react';

import workBg from '../../../assets/img/work-filler.jpeg';

const heroDiv = () => {
    return (
        <section className="wow fadeIn parallax" data-stellar-background-ratio="0.5" style ={ { backgroundImage: `url(${ workBg })` } }>
            <div className="opacity-medium bg-extra-dark-gray"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12 extra-small-screen display-table page-title-large">
                        <div className="display-table-cell vertical-align-middle text-center">
                            {/* start page title */}
                            <h1 className="text-white alt-font font-weight-600 letter-spacing-minus-1 margin-10px-bottom">Work Portfolio</h1>
                            <span className="text-white opacity6 alt-font">Case studies of various past projects</span>
                            {/* end page title */} 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default heroDiv;