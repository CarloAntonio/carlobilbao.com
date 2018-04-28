import React from "react";
import hero from "../../../../images/nImage/notebook-hero.jpeg";
import snip1 from "../../../../images/nImage/ne3/ne3-snip1.png";

const ne3 = () => {
  return (
    <div>
        {/* start page title section */}
        <section className="wow fadeIn cover-background background-position-top" style ={ { backgroundImage: `url(${ hero })` } }>
            <div className="opacity-medium bg-extra-dark-gray"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12 display-table page-title-large">
                        <div className="display-table-cell vertical-align-middle text-center padding-30px-tb">
                            {/* start sub title */}
                            <span className="text-white opacity6 alt-font margin-10px-bottom display-block text-uppercase text-small">18 April 2018</span>
                            {/* end sub title */}
                            {/* start page title */}
                            <h1 className="text-white alt-font font-weight-600 margin-10px-bottom">Head Tags Series: "charset=utf-8"</h1>
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
                        <h5 className="font-weight-600 text-extra-dark-gray alt-font accent-color">"In the (not too) early days, all that existed was ASCII."</h5>
                        <figure class="wp-caption alignright"><a href={ snip1 } target="_blank"><img className="alignright" src={ snip1 } alt=""/></a><figcaption class="wp-caption-text">Figure 1</figcaption></figure>
                        <p>Starting out our head tags series is the first meta tag that should be included in the head tag. For a comprehensive understanding of this tag (or unicode in general) <a href="https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/" className="accent-color accent-hover" target="_blank">this article</a> does an amazing job. I suggest reading it if you have some prior knowledge with unicode and designing websites. However, it is a bit dense, so in the following paragraphs I will try to explain it in simpler terms (with a lot less history).</p>
                        <p>If you look at figure 1, there is only one new tag added from the previous lesson. It’s a meta tag. A quick reference of what a meta tag can be found <a href="https://www.wordstream.com/meta-tags" className="accent-color accent-hover" target="_blank">here</a>. But quickly, meta tags are snippets of text that describe a page’s content; the meta tags don’t appear on the page itself, but only in the page’s code. Meta tags are also read by the browser and helps it make some decision on how to read and implement the code in the document (your html file). Inside the meta tag, we find a set of attribute/value pairs. The attribute “charset” and value “UTF-8” tells the browser how to interpret the document. Specifically, the content of the document that gets displayed to the end user.</p>
                        <p>I was going to explain how this work for our code, but this explanation from <a href="https://stackoverflow.com/questions/2241348/what-is-unicode-utf-8-utf-16/15128103#15128103" className="accent-hover accent-color" target="_blank">this stack overflow post</a> does an amazing job of summarizing the key concepts, so I’ll just post it below.</p>
                        <p>Snippet Start</p>
                        <p>In the (not too) early days, all that existed was ASCII. This was okay, as all that would ever be needed were a few control characters, punctuation, numbers and letters like the ones in this sentence. Unfortunately, today's strange world of global intercommunication and social media was not foreseen, and it is not too unusual to see English, العربية, 汉语, עִבְרִית, ελληνικά, and ភាសាខ្មែរ in the same document (I hope I didn't break any old browsers).</p>
                        <p>But for argument&#39;s sake, lets say Joe Average is a software developer. He insists that he will only ever need English, and as such only wants to use ASCII. This might be fine for Joe the user, but this is not fine for Joe the software developer. Approximately half the world uses non-Latin characters and using ASCII is arguably inconsiderate to these people, and on top of that, he is closing off his software to a large and growing economy.</p>
                        <p>Therefore, an encompassing character set including all languages is needed. Thus came Unicode. It assigns every character a unique number called a code point. One advantage of Unicode over other possible sets is that the first 256 code points are identical to ISO-8859-1, and hence also ASCII. In addition, the vast majority of commonly used characters are representable by only two bytes, in a region called the Basic Multilingual Plane (BMP). Now a character encoding is needed to access this character set, and as the question asks, I will concentrate on UTF-8 and UTF-16.</p>
                        <p>Snippet End</p>
                        <p>To summarize, the meta tag <b>charset=”UTF-8”</b> helps the browser to correctly interpret the content of the page we designed and display it to user in the correct format. </p>
                        <p className="display-inline-block"></p>
                    </div>
                </div>
            </div>
        </section>
        {/* end section */}

    </div>
  );
}

export default ne3;
