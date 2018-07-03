import React from 'react';

const overview = (props) => {
    return (
        <section className="wow fadeIn big-section" id="down-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-11 center-col text-center margin-70px-bottom sm-margin-50px-bottom xs-margin-30px-bottom wow fadeInUp">
                        <h6 className="alt-font text-extra-dark-gray">{props.summary}</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12 no-padding margin-70px-bottom sm-margin-50px-bottom xs-margin-30px-bottom fadeInUp">
                        <div className="col-md-3 padding-30px-lr">
                            <ul className="list-style-6">
                                <li className="text-extra-small text-uppercase text-black font-weight-500 line-height-22">Client</li>
                                <li>{props.clientName}</li>
                            </ul>
                        </div>
                        <div className="col-md-3 padding-30px-lr">
                            <ul className="list-style-6">
                                <li className="text-extra-small text-uppercase text-black font-weight-500 line-height-22">Industry</li>
                                <li>{props.clientIndustry}</li>
                            </ul>
                        </div>
                        <div className="col-md-3 padding-30px-lr">
                            <ul className="list-style-6">
                                <li className="text-extra-small text-uppercase text-black font-weight-500 line-height-22">Services</li>
                                <li>{props.services}</li>
                            </ul>
                        </div>
                        <div className="col-md-3 padding-30px-lr">
                            <ul className="list-style-6">
                                <li className="text-extra-small text-uppercase text-black font-weight-500 line-height-22">Date</li>
                                <li>{props.date}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-10 center-col text-center wow fadeInUp" data-wow-delay="0.4s">
                        <a href={props.clientWebsiteLink} className="btn btn-transparent-dark-gray btn-large">Launch Website</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default overview;