import React from "react";

import notebookHero from '../../../../assets/img/notebook-hero.jpg';
import ne1s1 from '../../../../assets/img/nImage/ne1/ne1-snip1.png';
import ne1s2 from '../../../../assets/img/nImage/ne1/ne1-snip2.png';

const ne1 = () => {
  return (
    <div>
        {/* start page title section */}
        <section className="wow fadeIn cover-background background-position-top" style ={ { backgroundImage: `url(${ notebookHero })` } }>
            <div className="opacity-medium bg-extra-dark-gray"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12 display-table page-title-large">
                        <div className="display-table-cell vertical-align-middle text-center padding-30px-tb">
                            {/* start sub title */}
                            <span className="text-white opacity6 alt-font margin-10px-bottom display-block text-uppercase text-small">29 March 2018</span>
                            {/* end sub title */}
                            {/* start page title */}
                            <h1 className="text-white alt-font font-weight-600 margin-10px-bottom">Hello Notebook.</h1>
                            {/* end page title */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* end page title section */}

        {/* start section */}
        <section className="wow fadeIn">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-sm-12 col-xs-12 center-col xs-text-center">
                        <h5 className="font-weight-600 text-extra-dark-gray alt-font accent-color">"...one of the things I love about the computer science community is its history of sharing information and encouraging growth..."</h5>
                        <a href={ ne1s1 } target="_blank" rel="noopener noreferrer"><img className="alignright" src={ ne1s1 } alt="" style= {{width: "50%"}} /></a>
                        <p>This blog is named Notebook and will be the complete opposite of Journal. (Journal is a free flowing, open subject blog where I talk about things that are interesting and thought provoking to me.) Notebook will be a structured blog dedicated to programming, for people to reference, but mostly to help me remember the things I learn during my programming career. Subject matter will be about programming code, design, code snippets, references, and techniques. Ironically, this first post will not stick to the previously described description of this post. No one tells me what to do, not even me! Jokes aside, this post describes resources that I have used or currently use as reference for programming. Going forward, my blogs will be self contained and will go over some concepts but assumes the reader knows the rest.</p>
                        <p>If you’re just getting started with programming, I suggest <a href="https://www.udacity.com/" target="_blank" className="accent-hover accent-color" rel="noopener noreferrer">Udacity</a> and <a href="https://teamtreehouse.com" target="_blank" className="accent-hover accent-color" rel="noopener noreferrer">Treehouse</a> together. From my experience, they are the two best online teaching platforms for programming. They are relatively new and each has their own strengths and weaknesses. Whenever I got stuck learning in one platform, I’d jump over to the other and they’d explain it another way.  If you’re curious or looking for a starting point in developing web pages my suggestion would be to start <a href="https://teamtreehouse.com/tracks/web-design" target="_blank" className="accent-hover accent-color" rel="noopener noreferrer">here</a>. One thing to keep in mind with both services: Treehouse doesn’t really let you learn for free, you’ll get the first 5 minutes and then the video stops if you try the free route. Udacity on the other hand is free. Well, the videos are free to watch, but the order in which you should watch the videos is hidden from you, so you’ll have to do some hunting. Chances are you’re already leaning towards going to Udacity because it’s free, especially if you’re just “test the programming waters.” However, starting there could ultimately be discouraging as there is a bit of a steeper curve when they teach. That’s why I suggested Treehouse first. Plus, it’s $25 a month and lets you cancel anytime. That's why I think it's very well worth the cost, especially if you are committed. (No, they are not paying me to say that, that's just my experience). I wouldn’t be surprised if you finished the course I suggested in that one month.</p>
                    </div>
                    <div className="col-md-10 center-col xs-text-center">
                        <a href={ ne1s2 } target="_blank" rel="noopener noreferrer"><img className="alignleft" src={ ne1s2 } alt="" style= {{width: "50%"}} /></a>
                        <p>If going back and forth between those two platforms still leaves you confused about a concept, let me re-introduce you to your new best friend (if it wasn’t already). Google and Youtube. I’m a visual learner, so I usually lean towards asking youtube first, then google after. After some time, you’ll realize that it’s easier to skip over parts of the content as an article vs a vlog, so google will start to be your go to. Just a heads up to beginners, a lot of parts will seem like greek to you, that’s pretty normal, I’m still coming across articles that don’t completely make sense at first. It’s part of the learning process so don’t get discouraged.</p>
                        <p>On a final note, one of the things I love about the computer science community is its history of sharing information and encouraging growth. If you’ve ever taken a introduction to computer science class, you’ll know that a good amount of the foundations in computers was built on open source and I’m proud to say that that mostly continues today. <a href="https://www.youtube.com/watch?v=XMm0HsmOTFI" className="accent-color accent-hover" target="_blank" rel="noopener noreferrer">Here’s a link</a> to a youtube video of one person who helped and still helps pave the way for that kind of culture.</p>
                        <p className="display-inline-block"></p>
                    </div>
                </div>
            </div>
        </section>
        {/* end section */}

    </div>
  );
}

export default ne1;
