import React from "react";
import hero from "../../../../images/je4-hero.jpeg";

const je4 = () => {
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
                            <span className="text-white opacity6 alt-font margin-10px-bottom display-block text-uppercase text-small">29 April 2018</span>
                            {/* end sub title */}
                            {/* start page title */}
                            <h1 className="text-white alt-font font-weight-600 margin-10px-bottom">Interesting Problems.</h1>
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
                        <h5 className="font-weight-600 text-extra-dark-gray alt-font accent-color">"Journaling about a problem and solution is a way for me to develop and wrestle with my ideas..."</h5>
                        <img className="alignright" src="http://placehold.it/400x267" alt=""/>
                        <p>This blog is named Journal and will be the complete opposite of Notebook. (Notebook is a blog completely devoted to programming hints, techniques, solutions, pitfalls, etc.) Journal will be a free flowing, open subject blog where I talk about things that are interesting and thought provoking to me. Subjects will probably be comprised mostly of thoughts that have been simmering in my head, projects I want to undertake, ideas I have, problems I see in the world, and values I hold. It’s also a place where I can work on my written voice, writing skills, and personal brand. It’s a place that I hope the reader, whomever they may be, can have a clearer understanding of who I am. And lastly, it’s also a time capsule of who I am on the date I wrote the article, serving as a reminded to my future self of who I was, who I hope to be, or who I hope to become. I’ve journaled before and have stopped after two or three entries, but like every good habit I’ve picked up in the past, the solution is: start again, remember the reasons for why it’s worth doing, and figuring out why last time was a failure.</p>
                        <p>Why journal&#63; There are a lot of <a className="accent-color accent-hover" href="https://lifehacker.com/why-you-should-keep-a-journal-and-how-to-start-yours-1547057185" target="_blank" rel="noopener noreferrer">reasons to journal</a>, but two main reasons I want to keep a written record is because I want to remember the ideas I&#39;ve had and to think deeply about them. I want to remember my ideas because they usually pertain to a problem that I think is important and worth solving. I won’t go into detail about what problems interest me the most in this journal entry, but I will write about it in a future journal post. Regardless, the first step to solving a problem is coming up with a solution, or rather, a hypothesis about the solution. Ok, that’s sort a lie, technically, the first step is understanding the problem, but I think these two steps are not linear, but rather cyclical, ebbing and flowing until a refined hypothesis is reached. Understanding the problem is to think deeply about the problem and how a current hypothesis can possibly solve it. Journaling about a problem and solution is a way for me to develop and wrestle with my ideas and ultimately help me decide whether to launch my solution into the real world. Although those are the reasons I journal, it doesn’t mean that writing comes easy. I’ve had a love/hate relationship with writing, that’s probably why I’ve had an inconsistent past when writing a journal.</p>
                    </div>
                    <div className="col-md-10 center-col xs-text-center">
                        <img className="alignleft" src="http://placehold.it/400x267" alt=""/>
                        <p>Writing is a frienemy (friend/enemy). It’s something like going to the gym. I’ve never regretted doing it when I finish, but it’s always hard getting started. They say the best way of writing is just to write. Write, what’s on your mind, and worry about the structure, punctuation, and flow later. I think they say that because ideas are hard to come by, and that writing ideas out first and creating a structure around it is the most efficient way to write thought provoking script. I can’t seem to do that. I always end up writing 90% unusable content and 10% undeveloped thoughts. I always come back to the “hamburger” analogy of writing structure before I start writing a single word. Where the top bun is the introduction, bottom bun is the conclusion, and the meat (middle) holds the body. The first sentence of the body should transition smoothly from the last sentence in the previous paragraph and introduce the first sentence of the next paragraph. I’ve read that other writers think this is prison, like how some poets think haiku rules are constraints for expression. I disagree, I think it forces the writer to focus and write purposeful and succinct content. The downside is that progress is slow and can be discouraging from the start. But I find myself being satisfied with the content of the paragraphs I finish and rarely find unusable content. In the end, even if starting essays this way is difficult, I’m more satisfied with the end content. I just have to keep that in mind when I don’t feel like writing anymore.</p>
                        <p>I’ve always enjoyed writing and there’s a lot of benefits to starting a journal. I definitely don’t enjoy the begin parts of writing a essay, it always seem to take forever to make a little bit of progress. That’s probably due to my writing style or rather the style at which I choose to develop my essay. But in the end, I’m more satisfied with the content of the prose and feel like I made content worth reading. Here’s to more entries to come.</p>
                        <p className="display-inline-block"></p>
                    </div>
                </div>
            </div>
        </section>
        {/* end section */}

    </div>
  );
}

export default je4;
