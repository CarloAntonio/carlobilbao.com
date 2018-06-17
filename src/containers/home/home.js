import React from "react";

//subcomponents
import HeroBanner from './subComps/heroBanner';
import ProgressBar from './subComps/progressBar';

//assets
import homeHero from '../../assets/img/home-hero.jpg';
import workTogether from '../../assets/img/workTogether.jpeg';
import magnolia from '../../assets/img/magnoliaDotCom.jpg';
import { progressData } from './data';

const home = () => {
  return (
    <div>
        <HeroBanner />

        {/* about agency section */}
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
        {/* end about agency section */}

        {/* start progress bar section */}
        <section className="wow fadeIn">
            <div className="container">
                <div className="row">
                    <div className="col-md-7 col-sm-12 col-xs-12 center-col text-center margin-100px-bottom xs-margin-40px-bottom">
                        <div className="position-relative overflow-hidden width-100">
                            <span className="text-small text-outside-line-full alt-font font-weight-600 text-uppercase">Skill Set</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/* technologies section */}
                    <div className="col-md-6 col-sm-10 text-center margin-50px-bottom">
                        {/* start progress bar section */}
                        <div className="skillbar-bar-main skillbar-bar-style-custom">
                            <p className="text-small alt-font font-weight-600 text-uppercase">Technologies</p>

                            {progressData.technologies.map(techItem => {
                                return <ProgressBar 
                                            key={techItem.item}
                                            item={techItem.item} 
                                            experience={techItem.experience} 
                                            percent={techItem.percent} />
                            })}
 
                        </div>
                        {/* end progress bar section*/}
                    </div>

                    {/* frameworks and libraries section */}
                    <div className="col-md-6 col-sm-10 text-center margin-50px-bottom">
                        {/* start progress bar section */}
                        <div className="skillbar-bar-main skillbar-bar-style-custom">
                            <p className="text-small alt-font font-weight-600 text-uppercase">Libraries &amp; Frameworks</p>
                            
                            {progressData.libraries.map(libItem => {
                                return <ProgressBar 
                                            key={libItem.item}
                                            item={libItem.item}
                                            experience={libItem.experience}
                                            percent={libItem.percent}/>
                            })}

                        </div>
                        {/* end progress bar */}
                    </div>

                    {/* tools section */}
                    <div className="col-md-6 col-sm-10 text-center margin-50px-bottom">
                        {/* start progress bar */}
                        <div className="skillbar-bar-main skillbar-bar-style-custom">
                            <p className="text-small alt-font font-weight-600 text-uppercase">Tools</p>
                           
                            {progressData.tools.map(toolItem => {
                                return <ProgressBar 
                                            key={toolItem.item}
                                            item={toolItem.item}
                                            experience={toolItem.experience}
                                            percent={toolItem.percent}/>
                            })}

                        </div>
                        {/* end progress bar */}
                    </div>

                    {/* other section */}
                    <div className="col-md-6 col-sm-10 text-center margin-50px-bottom">
                        {/* start progress bar */}
                        <div className="skillbar-bar-main skillbar-bar-style-custom">
                            <p className="text-small alt-font font-weight-600 text-uppercase">Other</p>
                           
                            {progressData.other.map(otherItem => {
                                return <ProgressBar 
                                            key={otherItem.item}
                                            item={otherItem.item}
                                            experience={otherItem.experience}
                                            percent={otherItem.percent}/>
                            })}

                        </div>
                        {/* end progress bar */}
                    </div>

                </div>
            </div>
        </section>
        {/* start progress bar section */}

        {/* start portfolio section */}
        <section className="wow fadeIn border-bottom border-color-extra-light-gray bg-light-gray">
            <div className="container-fluid">
                <div className="row text-center">
                    <div className="col-md-12">
                        <p className="alt-font text-medium-gray margin-5px-bottom text-uppercase text-small">Selected Work</p>
                        <h5 className="text-uppercase alt-font text-extra-dark-gray margin-20px-bottom font-weight-700 sm-width-100 xs-width-100">Latest Projects</h5>
                        <span className="separator-line-horrizontal-medium-light2 bg-deep-pink accent-bg display-table margin-auto width-100px"></span>
                    </div>
                </div>
                <div className="row">
                    <div className="filter-content overflow-hidden margin-100px-top sm-margin-70px-top xs-margin-50px-top xs-margin-15px-lr">
                        <ul className="portfolio-grid work-4col gutter-large hover-option6 lightbox-portfolio">
                            <li className="grid-sizer"></li>
                            {/* start portfolio item */}
                            <li className="grid-item wow fadeInUp last-paragraph-no-margin">
                                <figure>
                                    <div className="portfolio-img accent-bg position-relative text-center overflow-hidden">
                                        <img src={ magnolia } alt=""/>
                                        <div className="portfolio-icon">
                                            <a href="http://www.magnoliaghllc.com"><i className="fa fa-link text-extra-dark-gray" aria-hidden="true"></i></a>
                                            <a className="gallery-link" title="Project Magnolia Guest Home LLC" href={ magnolia }><i className="fa fa-search text-extra-dark-gray" aria-hidden="true"></i></a
                                            ></div>
                                    </div>
                                    <figcaption className="bg-white">
                                        <div className="portfolio-hover-main text-center">
                                            <div className="portfolio-hover-box vertical-align-middle">
                                                <div className="portfolio-hover-content position-relative">
                                                    <a href="http://www.magnoliaghllc.com"><span className="line-height-normal font-weight-600 text-small alt-font margin-5px-bottom text-extra-dark-gray text-uppercase display-block">Magnolia Guest Home LLC</span></a>
                                                    <p className="text-medium-gray text-extra-small text-uppercase">Website | Photography</p>
                                                </div>
                                            </div>
                                        </div>
                                    </figcaption>
                                </figure>
                            </li>
                            {/* end portfolio item */}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        {/* end portfolio section */}

        {/* start contact section */}
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
        {/* end contact section */}

    </div>
  );
}

export default home;
