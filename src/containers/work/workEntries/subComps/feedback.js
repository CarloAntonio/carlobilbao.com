import React from 'react';

const feedback = (props) => {
    return (
        <section className="wow fadeIn">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 center-col text-center">
                        <i className="fa fa-quote-left icon-small accent-color display-block margin-25px-bottom"></i>
                        <h6 className="alt-font text-extra-dark-gray">{props.feedback}</h6>
                        <span className="text-uppercase text-extra-small alt-font letter-spacing-3 text-medium-gray">{props.feedbackAuth}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default feedback;