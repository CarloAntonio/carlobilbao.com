import React from 'react';

//image assets
import profileImg from '../../../../assets/img/profile.jpg'

const summary = () => {
    return (
        <section className="wow fadeIn">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12 xs-text-center">

                        <figure className="wp-caption alignright">
                            <img alt="" src={ profileImg }/>
                            <figcaption className="wp-caption-text">You&#39;re looking at my portfolio page, that&#39;s awesome :)</figcaption>
                        </figure>
                        <span className="text-medium alt-font font-weight-600 margin-20px-bottom display-block accent-color">
                            "When figuring what type of work you should do, treat it much like the rest of life, find things that make you lose track of time."
                        </span>
                        <p>
                            I am both a software developer and biotech professional based in the San Francisco Bay Area. 
                            I&#39;m passionate about using current and emerging technologies to help solve old problems. 
                            Specifically, problems that plague those that are less fortunate, marginalized, or in situations where they are not able to fix their predicament. 
                            It’s these problems and the avenues that new technology creates, that motivates me to learn and develop new skills and technologies.
                        </p>
                        <p>
                            Currently, I work as a freelance web developer helping businesses and individuals expand their market by create an online presence. 
                            Additionally, I partner up with other developers to tackle larger web applications and projects. 
                            The rest of my time is spent taking classNamees to earn my master&#39;s degree in Computer Science.
                        </p>
                        <p>
                            In the past, I earned my bachelor&#39;s degree in biochemistry and molecular biology at the University of California, Davis. 
                            (Go Aggies!) Professionally, I worked at a biotech company manufacturing DNA sequences for research and applied use for nearly 4 years. 
                            My love for science did not give way to technology, rather, I hope to combine them and, hopefully, 
                            have them compliment each other as I strive to help solve interesting problems that will hopefully help make people&#39;s lives better. 
                            If you&#39;d like a more detailed view of my work history feel free to check out my LinkedIn: 
                            <a href="https://www.linkedin.com/in/carlo-bilbao/" className="accent-hover" target="_blank" rel="noopener noreferrer">Here</a>.
                        </p>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default summary;