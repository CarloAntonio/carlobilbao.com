import React from 'react'

const skillItem = (props) => {
    return (
        <div className="skillbar margin-45px-bottom" data-percent={props.percent}>
            <span className="skill-bar-text text-extra-small text-uppercase text-dark-gray">{props.skill} - {props.experience} Year(s) Experience</span>
            <p className="skillbar-bar"></p>
            <span className="skill-bar-percent text-small"></span>
        </div>
    );
}

export default skillItem;