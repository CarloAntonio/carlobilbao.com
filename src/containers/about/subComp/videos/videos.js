import React from 'react';

//subcomponents
import VideoItem from './videoItem';

//assets
import { videoData } from '../../data';

const videos = () => {
    return (
        <section className="wow fadeIn">
            <div className="container">
                <div className="row">
                    <div className="col-md-7 col-sm-12 col-sm-12 center-col text-center margin-100px-bottom xs-margin-40px-bottom">
                        <div className="position-relative overflow-hidden width-100">
                            <span className="text-small text-outside-line-full alt-font font-weight-600 text-uppercase">When I&#39;m Away From the Keyboard</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <VideoItem videoUrl={videoData[0].videoUrl} title={videoData[0].title} content={videoData[0].content} />
                    <VideoItem videoUrl={videoData[1].videoUrl} title={videoData[1].title} content={videoData[1].content} />
                </div>
                <div className="row">
                    <VideoItem videoUrl={videoData[2].videoUrl} title={videoData[2].title} content={videoData[2].content} />
                    <VideoItem videoUrl={videoData[3].videoUrl} title={videoData[3].title} content={videoData[3].content} />
                </div>
            </div>
        </section>
    );
}

export default videos;