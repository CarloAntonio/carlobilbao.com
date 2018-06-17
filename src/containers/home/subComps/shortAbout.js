import React from 'react';

const shortAbout = () => {
    return (
        <section className="big-section wow fadeIn bg-black" id="about">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-5 col-md-8 col-sm-10 col-xs-12 center-col text-center">
                        <div className="alt-font margin-20px-bottom sm-margin-20px-bottom text-uppercase text-extra-small letter-spacing-2">About Me</div>
                        <h4 className="alt-font font-weight-600 text-white no-margin-bottom">Hi, I&#39;m Carlo, a web developer based in SF. I&#39;m passionate about using new technology to solve old problems.</h4>
                        <div className="alt-font text-right margin-40px-top sm-margin-20px-bottom text-uppercase text-extra-small letter-spacing-2"><a className="accent-hover" href="/about">Learn More</a></div>
                    </div>
                </div>
            </div>
        </section>
    );
} 

export default shortAbout;