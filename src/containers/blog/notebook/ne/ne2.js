import React from "react";

const ne2 = () => {
  return (
    <div>
        {/* start page title section */}
        <section className="wow fadeIn cover-background background-position-top" style ={ { backgroundImage: "url(http://d1ty8z742i6uvq.cloudfront.net/carlobilbao/img/nImage/notebook-hero.jpeg)" } }>
            <div className="opacity-medium bg-extra-dark-gray"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12 display-table page-title-large">
                        <div className="display-table-cell vertical-align-middle text-center padding-30px-tb">
                            {/* start sub title */}
                            <span className="text-white opacity6 alt-font margin-10px-bottom display-block text-uppercase text-small">7 April 2018</span>
                            {/* end sub title */}
                            {/* start page title */}
                            <h1 className="text-white alt-font font-weight-600 margin-10px-bottom">Index.html Minimum Tags</h1>
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
                        <h5 className="font-weight-600 text-extra-dark-gray alt-font accent-color">"This first post looks at the parts of the html document that are require and expands from there."</h5>
                        <figure class="wp-caption alignright"><a href="http://d1ty8z742i6uvq.cloudfront.net/carlobilbao/img/nImage/ne2/ne2-snip1.png" target="_blank" rel="noopener noreferrer"><img className="alignright" src="http://d1ty8z742i6uvq.cloudfront.net/carlobilbao/img/nImage/ne2/ne2-snip1.png" alt=""/></a><figcaption class="wp-caption-text">Figure 1</figcaption></figure>
                        <p>When creating a website, there are three main components. They are HTML (hypertext markup language), CSS (cascading style sheets), and JS (javascript). HTML contains all of the information that viewers see on a webpage. It’s the meat of the content. It’s the words, titles, sentences, paragraphs. Every webpage has some and document called index.html. It is the document the web browser parses first. There’s a lot of things that go into an html document but not all those things are required. This first post looks at the parts of the html document that are require and expands from there.</p>
                        <p>The first set of tags we’ll go over are found on figure 1 and all these tags are require inside of an html document in order for the browser to properly render the document file.</p>
                        <p>The first is tag <b>!DOCTYPE html</b> is a preamble. It lets the browser know that the document that it receives is of type “html”.</p>
                        <p>The second are <b>html</b> tags. Most html tags, except for the <b>!DOCTYPE html</b> tag, will have a complementary complementary tags, one opens and the other closes. The “/” is the closing tag. The <b>html</b> tags are the largest tags and encapsulate all other tags.</p>
                        <p>The third set of tags are <b>head</b> tags. This contains information that the browser parses(reads) first. Much of this region will contain information about that sight that the user will never see, but is still important for the computer to read.</p>
                        <p>The fourth and final set of of required tags are <b>body</b> tags. This contain most of the information that the web user will see. After the browser finishes parsing the <b>head</b> tags, it will move to the body tags.</p>
                        <p>That’s it. If you plug this into the web browser in your computer it will read it, although nothing will show up on the screen since no information has been add for the browser to display.</p>
                        <p>A note on how the browser read a document. The browser reads from top to bottom and from left to right. If we apply that to the tags, we’ll get this order of how the browser will read the document: <b>!doctype html</b> then <b>html</b> tags. Since there are other tags inside of the html tags, it will read that in the same order as well: <b>head</b> then <b>body</b>.</p>
                        <p className="display-inline-block"></p>
                    </div>
                </div>
            </div>
        </section>
        {/* end section */}

    </div>
  );
}

export default ne2;
