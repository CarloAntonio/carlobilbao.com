import React from "react";
import hero from "../../../../images/je3-hero.jpeg";

const je3 = () => {
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
                            <span className="text-white opacity6 alt-font margin-10px-bottom display-block text-uppercase text-small">25 April 2018</span>
                            {/* end sub title */}
                            {/* start page title */}
                            <h1 className="text-white alt-font font-weight-600 margin-10px-bottom">My First Tech Meet-Up (Repost)</h1>
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
                        <h5 className="font-weight-600 text-extra-dark-gray alt-font accent-color">"..the main reason people like doing new things [is because of] the duality of both fear and excitement happening simultaneously.."</h5>
                        <img className="alignright" src="http://placehold.it/400x267" alt=""/>
                        <p>This is the second and last repost from an older blog. I know that&#39;s two out of the first three blogs, but I thought I&#39;d get it out of the way instead of plugging it in elsewhere in my timeline of post. I promise a fresh one on the next post. Here&#39;s "My First Tech Meet-Up."</p>
                        <p>Why go to a meet-up? It’s a great place to learn from industry leaders about cutting-edge trends and technologies. It’s also perfect for networking and getting your name out there, especially if you are new to the industry. And, from what I experienced at my first meet up, a great place to meet like-minded people.</p>
                        <p>Back story: When I completed my Android Developer program at Udacity, one advice for finding a job that stuck out above all the others was to network. Network, network, network! One way to do that is to go to developer meet-ups and join in on the discussions and have conversations with people there. This isn’t a time to be shy or reserved. So I looked on meetup.com and searched for “Android developers” and signed up for the nearest event.</p>
                        <p>How it went: The event I went to was called PizzaBeerMobile by Flurry and hosted at Yahoo SF headquarters. On the way to the event, I was both excited and nervous. I was excited because I was doing something new, going to see a real-life tech work floor, and going to meet new people with the same interest. I was nervous because I was doing something new (yes, the same reason for why I was excited; I think, if I could ponder on this for a bit, that’s the main reason people who like doing new things, like doing new things, the duality of both fear and excitement happening simultaneously) and a bit worried that I was way out of my league when it comes to understanding the content people were going to be talking about (Impostor Syndrome, more on this in a future post).</p>
                    </div>
                    <div className="col-md-10 center-col xs-text-center">
                        <img className="alignleft" src="http://placehold.it/400x267" alt=""/>
                        <p>I took Bart so I had time to give myself a little bit of a pep talk. I told myself to be confident and to not be so reserved. Growing up, I learned to imitate the cool kids at school by being nonchalant and paying no mind to other people, in return, I thought people will want to come over and talk to me. Not only does that not work, it doesn’t even make sense. The best way to meet new people and create new relationships is by being open and welcoming, there’s no reverse psychology involved. But “acting cool” was a habit I picked up growing up and I’ve had to mentally remind myself to get out of that mindset. I gave myself plenty of time to make it to the event on time, so naturally, I completely walk by the building resulting in me making it just in time. I checked in with the security guard and met a few people in the lobby. After some small talk, we were led up to the meeting floor.</p>
                        <p>The floor plan was exactly what I imaged it to be, or at least how I saw it in the movies. I know now that not every tech company is like this, but the openness of the floor plan made me really excited. There were whiteboards and glass boards with writing on it, possibly ideas for a new product, refining the user experience, or a friendly note. I loved every part of it. I had a huge smile on my face and I’m pretty sure I started to move not in the direction of the meeting area but towards one of the workstations. I could tell that made the security person a little nervous so I hurried back to the rest of the group towards the meeting floor.</p>
                    </div>
                    <div className="col-md-10 center-col xs-text-center">
                        <img className="alignright" src="http://placehold.it/400x267" alt=""/>
                        <p>Near the meeting area are people already chatting and the nerves started to kick up. Who to talk to first? People are already in groups, and those are always the hardest and most awkward to enter. So I found a person who was going in on the free pizza. He had like 3 slices on his plate, so it felt like it was a good warm up. My opening line, “Hey, been to one of these before?” Turns out, it was his second time going to this specific event. We started to talk about what projects we were working on and that’s when the conversation really took off. He was an iOS developer so he showed me the apps he’s made, how long he’s been coding, and the some of the struggles and achievements he’s had during his coding career. I did the same and we really hit it off. We talked a bit longer and I ended up getting his contact information and interest in working together on a future app.</p>
                        <p>I went and met more people and had a range of conversations, from business to mobile development and even retirement. The conversations focused on mobile development always had more substance to me since it was a subject I was most interested in but the other topics were interesting as well. The panel presentation was really interesting. They talked about app lifecycles, challenges to retaining users, keeping loyal and active users, increasing app rating, and techniques to building a solid user following. They gave great insights to a side of app development I hadn’t even thought of. One concept that really stuck out to me was advice from a product manager at PicsArt. He advised app developers to gain users even before finishing the app. I later asked him how that was possible seeing as there was no product to justify their loyalty. But his response was to create teasers, updates, and mailing list so when the app is complete, you already have users from the get-go.</p>
                        <p>Near the end of the event, I ended up talking to two people who I had met earlier in the night and we ended up grabbing drinking at a nearby bar. We talked about our current and future projects and then drifted into other interest. It was great, I felt like I had a lot of things in common with these two people and it all branched out from our shared interest in mobile development. </p>
                        <p>Overall, it was a great first experience and for those thinking about going to their first meet up. Definitely do so. You’ll meet lots of great people and learn new things to help you grow in your career.</p>
                        <p className="display-inline-block"></p>
                    </div>
                </div>
            </div>
        </section>
        {/* end section */}

    </div>
  );
}

export default je3;
