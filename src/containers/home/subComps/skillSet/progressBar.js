import React from 'react';

const progressBar = (props) => {
    return (
        <div className="skillbar margin-45px-bottom" data-percent={props.percent}>
            <span className="skill-bar-text text-extra-small text-uppercase text-dark-gray">{props.item + " - " + props.experience}</span>
            <p className="skillbar-bar"></p>
            <span className="skill-bar-percent text-small"></span>
        </div>
    );
}

export default progressBar;