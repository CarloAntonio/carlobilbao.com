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
                        <h6 className="text-medium-gray font-weight-300 margin-20px-bottom alt-font">I&#39;m Carlo Bilbao</h6>
                        <p className="text-large dispaly-block pull-left font-weight-300 width-90 margin-35px-bottom">I design and implement thoughtful websites for companies, businesses, and various events. I love being outdoors, creating videos, and being a gym rat.</p>
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

        {/* start summary section */}
        <section class="wow fadeIn">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12 xs-text-center">

                        <figure class="wp-caption alignright"><img alt="" src="http://placehold.it/500x700"/><figcaption class="wp-caption-text">There is no sincerer love than the love of food.</figcaption></figure>
                        <span class="text-medium alt-font font-weight-600 margin-20px-bottom display-block accent-color">"When figuring what type of work you should do, treat it much like the rest of life, find things that make you lose track of time."</span>
                        <p>I am both a software developer and biotech professional based in the San Francisco Bay Area. I&#39;m passionate about using current and emerging technologies to help solve old problems. Specifically, problems that plague those that are less fortunate, marginalized, and/or in situations where they are not able to fix their predicament. It’s this opportunity and the avenues that new technology creates, that motivates me to learn and develop new skills and technologies.</p>
                        <p>Currently, I work as a freelance web developer helping businesses and individuals expand their market by create an online presence. Additionally, I partner up with other developers to tackle larger web applications and projects. The rest of my time is spent taking classes to earn my master&#39;s degree in Computer Science.</p>
                        <p>In the past, I earned my bachelor&#39;s degree in biochemistry and molecular biology at the University of California, Davis. (Go Aggies!) Professionally, I worked at a biotech company manufacturing DNA sequences for research and applied use for nearly 4 years. My love for science did not give way to technology, rather, I hope to combine them and, hopefully, have them compliment each other as I strive to help solve interesting problems that will hopefully help make people&#39;s lives better. If you&#39;d like a more detailed view of my work history feel free to check out my LinkedIn: <a href="https://www.linkedin.com/in/carlo-bilbao/" className="accent-hover" target="_blank">Here</a>.</p>


                    </div>
                </div>
            </div>
        </section>
        {/* end summary section */}

        {/* start interest section */}
        <section class="wow fadeIn bg-light-gray">
            <div class="container">
                <div class="row">
                    <div class="col-md-7 col-sm-12 col-sm-12 center-col text-center margin-100px-bottom xs-margin-40px-bottom">
                        <div class="position-relative overflow-hidden width-100">
                            <span class="text-small text-outside-line-full alt-font font-weight-600 text-uppercase">Other Interest</span>
                        </div>
                    </div>
                </div>
                <div class="row equalize">
                    {/* start service item  */}
                    <div class="col-md-4 col-sm-6 col-xs-12 text-center last-paragraph-no-margin margin-70px-bottom sm-margin-40px-bottom xs-margin-30px-bottom wow fadeInUp">
                        <i class="icon-desktop icon-extra-medium accent-color margin-20px-bottom"></i>
                        <div class="text-extra-dark-gray margin-10px-bottom sm-margin-5px-bottom alt-font font-weight-600">Videography</div>
                        <p class="width-80 xs-width-100 center-col">I love making videos, almost as much as I love developing applications. I gravitate towards videography over photography because it limits interpretation, in that, context is created by the very nature of time elapsing. You can either create a narrative or capture one, conversely it is far more difficult to do so in photographs. Often times, pictures require background knowlege of context, creator intention, etc. Videos much less so, a trait I love exploring when I&#39;m creating content.</p>
                    </div>
                    {/* end service item */}
                    {/* start service item */}
                    <div class="col-md-4 col-sm-6 col-xs-12 text-center last-paragraph-no-margin margin-70px-bottom sm-margin-40px-bottom xs-margin-30px-bottom wow fadeInUp" data-wow-delay="0.2s">
                        <i class="icon-tools icon-extra-medium accent-color margin-20px-bottom"></i>
                        <div class="text-extra-dark-gray margin-10px-bottom sm-margin-5px-bottom alt-font font-weight-600">Hiking/Camping</div>
                        <p class="width-80 xs-width-100 center-col">I can think of few places I&#39;d rather be than being with my friends around the campfire telling stores miles away from civilian disconneted from the digital world. There&#39;s also nothing like hiking miles of trails to arrive at a destination only a those who have persisted the same path have been. Some people think it&#39;s contrary to be both passionate about technology and nature, but in my opinion, it&#39;s a necessary balance.</p>
                    </div>
                    {/* end service item */}
                    {/* start service item */}
                    <div class="col-md-4 col-sm-6 col-xs-12 text-center last-paragraph-no-margin margin-70px-bottom sm-margin-40px-bottom xs-margin-30px-bottom wow fadeInUp" data-wow-delay="0.4s">
                        <i class="icon-hotairballoon icon-extra-medium accent-color margin-20px-bottom"></i>
                        <div class="text-extra-dark-gray margin-10px-bottom sm-margin-5px-bottom alt-font font-weight-600">Basketball</div>
                        <p class="width-80 xs-width-100 center-col">Basketball is an old friend. I&#39;ve known it since I was 9 years old, and even though I&#39;m no Kobe Bryant and this isn&#39;t a <a href="https://www.youtube.com/watch?v=Hr3dX6__-hU" target="_blank" className="accent-hover">Dear Basketball</a> ripoff, I can and have always had basketball to help clear my head. Big decisions, breakups, fights, anxiety, impatience, grudges and just about anything else seem a little easier to deal with after running up and down the court and having a silent conversation with the hoop.</p>
                    </div>
                    {/* end service item */}
                    {/* start service item */}
                    <div class="col-md-4 col-sm-6 col-xs-12 text-center last-paragraph-no-margin sm-margin-40px-bottom xs-margin-30px-bottom wow fadeInUp">
                        <i class="icon-target icon-extra-medium accent-color margin-20px-bottom"></i>
                        <div class="text-extra-dark-gray margin-10px-bottom sm-margin-5px-bottom alt-font font-weight-600">Gym/Working Out</div>
                        <p class="width-80 xs-width-100 center-col">"Going to the gym after studying and working in front of a computer, is like taking a shower after going to the gym." -Carlo B. I literally just thought of this right now. There&#39;s something so satisfying about tearing it in the brain department, then doing the same in the body department. Putting on wireless headphones and going in on the workouts is the most zen you can get on a work day.</p>
                    </div>
                    {/* end service item */}
                    {/* start service item */}
                    <div class="col-md-4 col-sm-6 col-xs-12 text-center last-paragraph-no-margin xs-margin-30px-bottom wow fadeInUp" data-wow-delay="0.2s">
                        <i class="icon-scissors icon-extra-medium accent-color margin-20px-bottom"></i>
                        <div class="text-extra-dark-gray margin-10px-bottom alt-font font-weight-600">Bachata/Salsa</div>
                        <p class="width-80 xs-width-100 center-col">I don&#39;t even know why I like doing this, but I blame my college roommates for this hobby. Now I listen to bachata and salsa music and I have no idea what they&#39;re saying but that beat and base are next level. I&#39;m not even good at it, but it&#39;s one of the funnest things to do on a night out.</p>
                    </div>
                    {/* end service item */}
                    {/* start service item */}
                    <div class="col-md-4 col-sm-6 col-xs-12 text-center last-paragraph-no-margin wow fadeInUp" data-wow-delay="0.6s">
                        <i class="icon-laptop icon-extra-medium accent-color margin-20px-bottom"></i>
                        <div class="text-extra-dark-gray margin-10px-bottom alt-font font-weight-600">Finding new places to be/eat</div>
                        <p class="width-85 xs-width-100 center-col">I mean, who doesn&#39;t like eating new kinds of food and being in new places? This is a pretty cop-out answer. This item shouldn&#39;t even be on this list. But little know fact: I like even and symmetrical things.</p>
                    </div>
                    {/* end service item */}
                </div>
            </div>
        </section>
        {/* end interest section */}

        {/* start one half column section */}
        <section class="wow fadeIn">
            <div class="container">
                <div class="row">
                    <div class="col-md-7 col-sm-12 col-sm-12 center-col text-center margin-100px-bottom xs-margin-40px-bottom">
                        <div class="position-relative overflow-hidden width-100">
                            <span class="text-small text-outside-line-full alt-font font-weight-600 text-uppercase">When I&#39;m AFK (Away From Keyboard)</span>
                        </div>
                    </div>
                </div>
                <div class="row">

                    {/* start column */}
                    <div class="col-md-6 col-sm-12 sm-margin-15px-bottom ">
                        <div class="text-center fit-videos sm-margin-30px-bottom">
                            {/* start youtube video */}
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/jXOKEFBRAEs" frameborder="0" allowFullScreen></iframe>
                            {/* end youtube video */}
                        </div>
                        <div class="bg-white padding-40px-all xs-padding-30px-all last-paragraph-no-margin bg-light-gray">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
                        </div>
                    </div>
                    {/* end column */}

                    {/* start column */}
                    <div class="col-md-6 col-sm-12 sm-margin-15px-bottom ">
                        <div class="text-center fit-videos sm-margin-30px-bottom">
                            {/* start youtube video */}
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/6gZz12nXJpM" frameborder="0" allowFullScreen></iframe>
                            {/* end youtube video */}
                        </div>
                        <div class="bg-white padding-40px-all last-paragraph-no-margin bg-light-gray">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
                        </div>
                    </div>
                    {/* end column */}

                </div>

                <div class="row">

                    {/* start column */}
                    <div class="col-md-6 col-sm-12 sm-margin-15px-bottom ">
                        <div class="text-center fit-videos sm-margin-30px-bottom">
                            {/* start youtube video */}
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/dnA_7n4dHx4" frameborder="0" allowFullScreen></iframe>
                            {/* end youtube video */}
                        </div>
                        <div class="bg-white padding-40px-all last-paragraph-no-margin bg-light-gray">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
                        </div>
                    </div>
                    {/* end column */}

                    {/* start column */}
                    <div class="col-md-6 col-sm-12 sm-margin-15px-bottom ">
                        <div class="text-center fit-videos sm-margin-30px-bottom">
                            {/* start youtube video */}
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/Wh-huDNXTws" frameborder="0" allowFullScreen></iframe>
                            {/* end youtube video */}
                        </div>
                        <div class="bg-white padding-40px-all xs-padding-30px-all last-paragraph-no-margin bg-light-gray">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
                        </div>
                    </div>
                    {/* end column */}

                </div>
            </div>
        </section>
        {/* end one half column section */}

        {/* start cta section */}
        <section class="padding-ten-tb wow fadeIn bg-light-gray text-white">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-sm-12 col-xs-12 text-center center-col">
                        <span class="alt-font text-small text-uppercase text-extra-dark-gray">I would love to work with you</span>
                        <h5 class="alt-font font-weight-700 letter-spacing-minus-1 accent-color">Brainstorm over some coffee?</h5>
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
