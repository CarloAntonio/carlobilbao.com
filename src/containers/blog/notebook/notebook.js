import React from "react";

//subcomponents
import HeroDiv from '../subComps/heroDiv';
import BlogItem from '../subComps/nBlogItem';

//image assets
import notebookHero from '../../../assets/img/notebook-hero.jpg';

const notebook = () => {
  return (
    <div>

        <HeroDiv 
            heroBg={ notebookHero } 
            header={"Notebook"}    
            subHeader={"A structured blog dedicated to programming, for people to reference, but mostly to help me remember the things I learned during my programming career."}/>

        {/* start post content section */}
        <section className="wow fadeIn bg-light-gray">
            <div className="container-fluid">
                <div className="row padding-15px-lr xs-no-padding equalize xs-equalize-auto">

                    <BlogItem 
                        delay={"0.2s"} 
                        date={"29 March 2018"} 
                        title={"Hello Notebook."} 
                        subTitle={"What to expect from this blog and tips on learning how to program."}
                        link={"/blog/notebook/ne/ne1"}/>

                    <BlogItem 
                        delay={"0.4s"} 
                        date={"7 April 2018"} 
                        title={"Index.html Minimum Tags"} 
                        subTitle={"Explaining the minimum required html tags required to create a website"}
                        link={"/blog/notebook/ne/ne2"}/>

                    <BlogItem 
                        delay={"0.6s"} 
                        date={"18 April 2018"} 
                        title={`Head Tags Series: "charset=utf-8"`} 
                        subTitle={`Explaining the reasoning behind including the "charset=utf-8" meta tag`}
                        link={"/blog/notebook/ne/ne3"}/>
                    
                    <BlogItem 
                        delay={"0.8s"} 
                        date={"28 April 2018"} 
                        title={`Head Tags Series: name="viewport"`} 
                        subTitle={`Explaining the reasoning behind including the "name=viewport" meta tag`}
                        link={"/blog/notebook/ne/ne4"}/>

                </div>
            </div>
        </section>
        {/* end blog content section */}

    </div>
  );
}

export default notebook;
