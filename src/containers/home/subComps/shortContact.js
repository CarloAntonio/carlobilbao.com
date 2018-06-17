import React from 'react';

//assets
import workTogether from '../../../assets/img/workTogether.jpeg';

const shortContact = () => {
    return (
        <section className="wow fadeIn animated animated">
            <div className="container">
                <div className="row equalize sm-equalize-auto">
                    <div className="col-md-5 col-sm-12 col-xs-12 text-center sm-margin-30px-bottom wow fadeInLeft">
                        <div className="display-table width-100 height-100">
                            <div className="display-table-cell vertical-align-middle width-100 height-100">
                                <img src={ workTogether } alt="" className="border-radius-6 width-100"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 col-sm-12 col-xs-12 wow fadeInRight" data-wow-delay="0.2s">
                        <div className="display-table width-100 height-100">
                            <div className="display-table-cell vertical-align-middle padding-twelve-lr sm-text-center sm-no-padding width-100">
                                <span className="alt-font margin-10px-bottom display-inline-block text-medium accent-color">Let&#39;s build something together</span>
                                <h6 className="alt-font text-extra-dark-gray">If you are interested in a new project, collaboration, or a reason to get drinks don&#39;t hesitate to get in contact with me.</h6>
                                <p>I&#39;m currently available for freelance work, so if you fancy a chat, click the button below!</p>
                                <a href="/contact" className="btn btn-dark-gray btn-small text-extra-small btn-rounded margin-5px-top"><i className="fa fa-play-circle icon-very-small margin-5px-right no-margin-left" aria-hidden="true"></i>let&#39;s do it</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default shortContact;