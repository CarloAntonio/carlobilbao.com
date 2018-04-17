import React from "react";

const contact = () => {
  return (
    <div>

        {/* start contact info section */}
        <section class="wow fadeIn">
            <div class="container">
                <div class="row">

                    <div class="col-lg-6 col-md-6 col-sm-8 col-xs-12 margin-eight-bottom sm-margin-40px-bottom xs-margin-30px-bottom text-center last-paragraph-no-margin">
                        <h5 class="alt-font font-weight-700 text-extra-dark-gray text-uppercase">Let&#39;s talk about it</h5>
                        {/* start contact info item */}
                        <div class="col-md-6 col-sm-6 col-xs-12 text-center sm-margin-eight-bottom xs-margin-30px-bottom wow fadeInUp last-paragraph-no-margin" data-wow-delay="0.2s">
                            <div class="display-inline-block margin-20px-bottom">
                                <div class="bg-extra-dark-gray icon-round-medium"><i class="icon-chat icon-medium text-white"></i></div>
                            </div>
                            <div class="text-extra-dark-gray text-uppercase text-small font-weight-600 alt-font margin-5px-bottom">Lets Talk</div>
                            <p class="center-col">Phone: 1-510-253-3755</p>
                            <p class="c-strike accent-hover text-uppercase accent-color text-small margin-15px-top xs-margin-10px-top display-inline-block">call us</p>
                        </div>
                        {/* end contact info item */}
                        {/* start contact info item */}
                        <div class="col-md-6 col-sm-6 col-xs-12 text-center xs-margin-30px-bottom wow fadeInUp last-paragraph-no-margin" data-wow-delay="0.4s">
                            <div class="display-inline-block margin-20px-bottom">
                                <div class="bg-extra-dark-gray icon-round-medium"><i class="icon-envelope icon-medium text-white"></i></div>
                            </div>
                            <div class="text-extra-dark-gray text-uppercase text-small font-weight-600 alt-font margin-5px-bottom">E-mail Me</div>
                            <p class="center-col"><a href="mailto:cbilbao88@gmail.com">cbilbao88@gmail.com</a></p>
                            <p class="c-strike accent-hover text-uppercase accent-color text-small margin-15px-top xs-margin-10px-top display-inline-block">send e-mail</p>
                        </div>
                        {/* end contact info item */}
                    </div>

                    <div class="col-md-6 wow fadeIn bg-black">
                        <div class="padding-eleven-all text-center xs-no-padding-lr">
                            <div class="text-medium-gray alt-font text-small text-uppercase margin-5px-bottom xs-margin-three-bottom">Fill out the form and well be in touch soon!</div>
                            <h5 class="margin-55px-bottom text-white alt-font font-weight-700 text-uppercase xs-margin-ten-bottom">Ready to request a quote?</h5>
                            <form id="project-contact-form" action="javascript:void(0)" method="post">
                                <div class="row">
                                     <div class="col-md-12">
                                        <div id="success-project-contact-form" class="no-margin-lr"></div>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="text" name="name" id="name" placeholder="Name *" class="bg-transparent border-color-medium-dark-gray medium-input"/>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="text" name="phone" id="phone" placeholder="Phone" class="bg-transparent border-color-medium-dark-gray medium-input"/>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="text" name="email" id="email" placeholder="E-mail *" class="bg-transparent border-color-medium-dark-gray medium-input"/>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="select-style bg-transparent border-color-medium-dark-gray medium-select">
                                            <select name="budget" id="budget" class="bg-transparent no-margin-bottom">
                                                <option value="">Select your budget</option>
                                                <option value="$500 - $1000">$500 - $1000</option>
                                                <option value="$1000 - $2000">$1000 - $2000</option>
                                                <option value="$2000 - $5000">$2000 - $5000</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <textarea name="comment" id="comment" placeholder="Describe your project" rows="6" class="bg-transparent border-color-medium-dark-gray medium-textarea"></textarea>
                                    </div>
                                    <div class="col-md-12 text-center">
                                        <button id="project-contact-us-button" type="submit" class="btn btn-accent btn-medium margin-20px-top">send message</button>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* end contact info section */}

    </div>
  );
}

export default contact;
