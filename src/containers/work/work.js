import React from "react";

import WorkItem from './subComps/workItem';

import workBg from '../../assets/img/work-filler.jpeg';

const work = () => {
  return (
    <div>
        <section className="wow fadeIn parallax" data-stellar-background-ratio="0.5" style ={ { backgroundImage: `url(${ workBg })` } }>
            <div className="opacity-medium bg-extra-dark-gray"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12 extra-small-screen display-table page-title-large">
                        <div className="display-table-cell vertical-align-middle text-center">
                            {/* start page title */}
                            <h1 className="text-white alt-font font-weight-600 letter-spacing-minus-1 margin-10px-bottom">Blog images</h1>
                            <span className="text-white opacity6 alt-font">Lorem Ipsum is simply dummy text printing</span>
                            {/* end page title */} 
                        </div>
                    </div>
                </div>
            </div>
        </section>


                <section className="wow fadeIn">
            <div className="container">
                <div className="row col-4-nth sm-col-2-nth">

                    <WorkItem 
                        image={ workBg }
                        date={"June 13 2018"}
                        title={"Darryl Jon Visuals"}
                        delay={"0.2s"}
                        link={"/work/we1"}/>


                </div>
            </div>
        </section>
        
    </div>
  );
}

export default work;
