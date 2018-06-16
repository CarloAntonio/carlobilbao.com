import React from 'react';

const videoItem = (props) => {
    return (
        <div className="col-md-6 col-sm-12 sm-margin-15px-bottom ">
            <div className="text-center fit-videos sm-margin-30px-bottom">
                {/* start youtube video */}
                <iframe title={props.title} width="560" height="315" src={props.videoUrl} frameBorder="0" allowFullScreen></iframe>
                {/* end youtube video */}
            </div>
            <div className="bg-white padding-40px-all xs-padding-30px-all last-paragraph-no-margin bg-light-gray">
                {props.content}
            </div>
        </div>
    );
}

export default videoItem;