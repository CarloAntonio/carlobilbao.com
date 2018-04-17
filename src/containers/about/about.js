import React from "react";

const about = () => {
  return (
    <div>

        {/* start hero section */}
        <section class="custom-pt pb-no wow fadeIn main-slider mobile-height content-right-slider">
            <div class="container-fluid">
                <div class="row equalize sm-equalize-auto">
                    <div class="col-md-6 cover-background sm-height-500px xs-height-350px wow fadeIn padding-twenty-five-top padding-five-left" style ={ { backgroundImage: "url('http://placehold.it/1200x854')" } }>
                        <h4 className="text-medium-gray display-block margin-5px-bottom alt-font">Hello,</h4>
                        <h6 className="text-medium-gray font-weight-300 margin-20px-bottom alt-font">I&#39;m Darryl Baello</h6>
                        <p className="text-large dispaly-block pull-left font-weight-300 width-90 margin-35px-bottom">I design thoughtful digital experiences & beautiful brand aesthetics. I provide high quality web design services.</p>
                        <img src="images/signature.png" className="width-60 signature" alt=""/>
                    </div>
                    <div class="swiper-full-screen swiper-container col-md-6 no-padding-lr white-move bg-extra-dark-gray text-center xs-padding-20px-tb wow fadeIn">
                        <div class="swiper-wrapper">

                            {/* start slider item */}
                            <div class="swiper-slide last-paragraph-no-margin padding-fifteen-top padding-ten-bottom">
                                <div class="padding-eighteen-all md-padding-eight-all sm-padding-thirteen-all xs-padding-15px-lr">
                                    <div class="margin-100px-bottom text-center position-relative">
                                        <span class="title-large alt-font font-weight-100 text-dark-gray opacity4">01</span>
                                        <p class="alt-font font-weight-600 accent-color text-uppercase position-absolute left-0 right-0 top-35 sm-top-25 xs-top-12">Hawaii Beach Bumming</p>
                                    </div>

                                </div>
                            </div>
                            {/* end slider item */}

                            {/* start slider item */}
                            <div class="swiper-slide last-paragraph-no-margin padding-fifteen-top padding-ten-bottom">
                                <div class="padding-eighteen-all md-padding-eight-all sm-padding-thirteen-all xs-padding-15px-lr">
                                    <div class="margin-100px-bottom text-center position-relative">
                                        <span class="title-large alt-font font-weight-100 text-dark-gray opacity4">02</span>
                                        <p class="alt-font font-weight-600 accent-color text-uppercase position-absolute left-0 right-0 top-35 sm-top-25 xs-top-12">Costa Rica Chillin</p>
                                    </div>

                                </div>
                            </div>
                            {/* end slider item */}

                            {/* start slider item */}
                            <div class="swiper-slide last-paragraph-no-margin padding-fifteen-top padding-ten-bottom">
                                <div class="padding-eighteen-all md-padding-eight-all sm-padding-thirteen-all xs-padding-15px-lr">
                                    <div class="margin-100px-bottom text-center position-relative">
                                        <span class="title-large alt-font font-weight-100 text-dark-gray opacity4">02</span>
                                        <p class="alt-font font-weight-600 accent-color text-uppercase position-absolute left-0 right-0 top-35 sm-top-25 xs-top-12">Summit Hammock Sunset</p>
                                    </div>

                                </div>
                            </div>
                            {/* end slider item */}

                        </div>
                        {/* start slider pagination */}
                        <div class="swiper-button-next slider-long-arrow-white"></div>
                        <div class="swiper-button-prev slider-long-arrow-white"></div>
                        {/* end slider pagination */}
                    </div>
                </div>
            </div>
        </section>
        {/* end hero section */}

        {/* start interest section */}
        <section class="wow fadeIn">
            <div class="container">
                <div class="row equalize">
                    {/* start service item  */}
                    <div class="col-md-4 col-sm-6 col-xs-12 text-center last-paragraph-no-margin margin-70px-bottom sm-margin-40px-bottom xs-margin-30px-bottom wow fadeInUp">
                        <i class="icon-desktop icon-extra-medium accent-color margin-20px-bottom"></i>
                        <div class="text-extra-dark-gray margin-10px-bottom sm-margin-5px-bottom alt-font font-weight-600">Web Development</div>
                        <p class="width-80 xs-width-100 center-col">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.</p>
                    </div>
                    {/* end service item */}
                    {/* start service item */}
                    <div class="col-md-4 col-sm-6 col-xs-12 text-center last-paragraph-no-margin margin-70px-bottom sm-margin-40px-bottom xs-margin-30px-bottom wow fadeInUp" data-wow-delay="0.2s">
                        <i class="icon-tools icon-extra-medium accent-color margin-20px-bottom"></i>
                        <div class="text-extra-dark-gray margin-10px-bottom sm-margin-5px-bottom alt-font font-weight-600">Logo &amp; Identity</div>
                        <p class="width-80 xs-width-100 center-col">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.</p>
                    </div>
                    {/* end service item */}
                    {/* start service item */}
                    <div class="col-md-4 col-sm-6 col-xs-12 text-center last-paragraph-no-margin margin-70px-bottom sm-margin-40px-bottom xs-margin-30px-bottom wow fadeInUp" data-wow-delay="0.4s">
                        <i class="icon-hotairballoon icon-extra-medium accent-color margin-20px-bottom"></i>
                        <div class="text-extra-dark-gray margin-10px-bottom sm-margin-5px-bottom alt-font font-weight-600">Graphics Design</div>
                        <p class="width-80 xs-width-100 center-col">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.</p>
                    </div>
                    {/* end service item */}
                    {/* start service item */}
                    <div class="col-md-4 col-sm-6 col-xs-12 text-center last-paragraph-no-margin sm-margin-40px-bottom xs-margin-30px-bottom wow fadeInUp">
                        <i class="icon-target icon-extra-medium accent-color margin-20px-bottom"></i>
                        <div class="text-extra-dark-gray margin-10px-bottom sm-margin-5px-bottom alt-font font-weight-600">App Development</div>
                        <p class="width-80 xs-width-100 center-col">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.</p>
                    </div>
                    {/* end service item */}
                    {/* start service item */}
                    <div class="col-md-4 col-sm-6 col-xs-12 text-center last-paragraph-no-margin xs-margin-30px-bottom wow fadeInUp" data-wow-delay="0.2s">
                        <i class="icon-scissors icon-extra-medium accent-color margin-20px-bottom"></i>
                        <div class="text-extra-dark-gray margin-10px-bottom alt-font font-weight-600">Social Marketing</div>
                        <p class="width-80 xs-width-100 center-col">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.</p>
                    </div>
                    {/* end service item */}
                    {/* start service item */}
                    <div class="col-md-4 col-sm-6 col-xs-12 text-center last-paragraph-no-margin wow fadeInUp" data-wow-delay="0.6s">
                        <i class="icon-laptop icon-extra-medium accent-color margin-20px-bottom"></i>
                        <div class="text-extra-dark-gray margin-10px-bottom alt-font font-weight-600">Content Creation</div>
                        <p class="width-85 xs-width-100 center-col">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.</p>
                    </div>
                    {/* end service item */}
                </div>
            </div>
        </section>
        {/* end interest section */}

        {/* start parallax section */}
        <section class="wow fadeIn parallax big-section" data-stellar-background-ratio="0.4" style ={ { backgroundImage: "url('http://placehold.it/1920x1100')" } }>
            <div class="opacity-medium bg-extra-dark-gray"></div>
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-sm-10 col-xs-12 center-col">
                        <div class="bg-white padding-nine-all text-center">
                            <div class="alt-font text-medium-gray margin-15px-bottom text-uppercase text-small">About restaurants Photography</div>
                            <h5 class="font-weight-600 alt-font text-extra-dark-gray">Taking an image, freezing a moment, reveals how rich reality truly</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            <a href="/work" class="btn btn-small btn-dark-gray margin-10px-top xs-no-margin-top">Explore Photography</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* end parallax section */}

        {/* start blog section */}
        <section class="wow fadeIn">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12 xs-text-center">

                        <figure class="wp-caption alignright"><img alt="" src="http://placehold.it/500x389"/><figcaption class="wp-caption-text">There is no sincerer love than the love of food.</figcaption></figure>
                        <span class="text-medium alt-font font-weight-600 margin-20px-bottom display-block accent-color">You dont need a silver fork to eat good food</span>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour.</p>

                        <figure class="wp-caption alignleft"><img alt="" src="http://placehold.it/500x700"/><figcaption class="wp-caption-text">There is no sincerer love than the love of food.</figcaption></figure>
                        <span class="text-medium alt-font font-weight-600 margin-20px-bottom display-block accent-color">You dont need a silver fork to eat good food</span>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour.</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

                    </div>
                </div>
            </div>
        </section>
        {/* end blog section */}

        {/* start cta section */}
        <section class="padding-ten-tb wow fadeIn bg-dark-gray text-white">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-sm-12 col-xs-12 text-center center-col">
                        <span class="alt-font text-small text-uppercase">I would love to work with you</span>
                        <h5 class="alt-font font-weight-700 letter-spacing-minus-1 text-extra-dark-gray accent-color">Should I grab my camera?</h5>
                        <a href="#" class="btn btn-large btn-transparent-dark-gray margin-10px-top inner-link">Let&#39;s get started</a>
                    </div>
                </div>
            </div>
        </section>
        {/* end cta section */}

    </div>
  );
}

export default about;
