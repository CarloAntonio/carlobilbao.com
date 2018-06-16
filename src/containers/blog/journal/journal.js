import React from "react";

//subcomponents
import HeroDiv from '../subComps/heroDiv';
import BlogItem from '../subComps/jBlogItem';

//image assets
import journalHero from '../../../assets/img/journal-hero.jpeg';
import je1tb from '../../../assets/img/jImage/je1/je1-tb.jpg';
import je2tb from '../../../assets/img/jImage/je2/je2-tb.jpeg';
import je3tb from '../../../assets/img/jImage/je3/je3-tb.jpeg';
import je4tb from '../../../assets/img/jImage/je4/je4-tb.jpeg';

const journal = () => {
  return (
    <div>
        <HeroDiv 
            heroBg={ journalHero } 
            header={"Journal"} 
            subHeader={"A free flowing, open subject blog where I talk about things that are interesting and thought provoking to me."}/>
  
        {/* start post content section */}
        <section className="wow fadeIn">
            <div className="container">
                <div className="row col-4-nth sm-col-2-nth">

                    <BlogItem 
                        image={ je1tb }
                        date={"07 April 2018"}
                        title={"Hello Journal."}
                        subTitle={"Exploring the decision to start journaling (again) and my personal pitfalls of keeping a journal."}
                        delay={"0.2s"}
                        link={"/blog/journal/je/je1"}/>

                    <BlogItem 
                        image={ je2tb }
                        date={"16 April 2018"}
                        title={"Hello World. (Repost)"}
                        subTitle={"Exploring the origins of the very first program most people will create (Repost from Medium - Oct. 24, 2017)"}
                        delay={"0.4s"}
                        link={"/blog/journal/je/je2"}/>

                    <BlogItem 
                        image={ je3tb }
                        date={"25 April 2018"}
                        title={"My First Tech Meet-Up. (Repost)"}
                        subTitle={"Recounting the first time I went to a tech meet-up, reasons to go, and what I learned (Repost from Medium - Nov. 01, 2017)"}
                        delay={"0.6s"}
                        link={"/blog/journal/je/je3"}/>

                    <BlogItem 
                        image={ je4tb }
                        date={"29 April 2018"}
                        title={"Court Therapy."}
                        subTitle={"How a story that happened decades ago, told during my birthday dinner, helped me appreciate my access to the game of basketball."}
                        delay={"0.8s"}
                        link={"/blog/journal/je/je4"}/>

                </div>
            </div>
        </section>
        {/* end blog content section */}

    </div>
  );
}

export default journal;
