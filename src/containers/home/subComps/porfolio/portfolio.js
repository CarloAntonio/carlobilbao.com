import React from 'react';

//subcomponent
import PortfolioItem from './portfolioItem';

//assets
import { portfolioData } from '../../data';

const portfolio = () => {
    return (
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
                            
                            {portfolioData.map(portfolioItem => {
                                return <PortfolioItem 
                                            key={portfolioItem.link}
                                            link={portfolioItem.link} 
                                            image={portfolioItem.image} 
                                            title={portfolioItem.title} 
                                            service={portfolioItem.service} />
                            })}

                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default portfolio;