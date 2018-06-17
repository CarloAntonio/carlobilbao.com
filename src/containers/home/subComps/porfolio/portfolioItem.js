import React from 'react';

const portfolioItem = (props) => {
    return (
        <li className="grid-item wow fadeInUp last-paragraph-no-margin">
            <figure>
                <div className="portfolio-img accent-bg position-relative text-center overflow-hidden">
                    <img src={ props.image } alt=""/>
                    <div className="portfolio-icon">
                        <a href={ props.link }><i className="fa fa-link text-extra-dark-gray" aria-hidden="true"></i></a>
                        <a className="gallery-link" title="Project Magnolia Guest Home LLC" href={ props.image }><i className="fa fa-search text-extra-dark-gray" aria-hidden="true"></i></a
                        ></div>
                </div>
                <figcaption className="bg-white">
                    <div className="portfolio-hover-main text-center">
                        <div className="portfolio-hover-box vertical-align-middle">
                            <div className="portfolio-hover-content position-relative">
                                <a href={ props.link }><span className="line-height-normal font-weight-600 text-small alt-font margin-5px-bottom text-extra-dark-gray text-uppercase display-block">{ props.title }</span></a>
                                <p className="text-medium-gray text-extra-small text-uppercase">{ props.service }</p>
                            </div>
                        </div>
                    </div>
                </figcaption>
            </figure>
        </li>
    );
}

export default portfolioItem;