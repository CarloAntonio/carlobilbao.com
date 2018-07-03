import React from 'react';

import SkillItem from './skillItem';

const skills = (props) => {
    return (
        <section className="wow fadeIn bg-light-gray">
            <div className="container">
                <div className="row equalize sm-equalize-auto">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 display-table wow fadeIn last-paragraph-no-margin">
                        <div className="display-table-cell vertical-align-middle padding-seventeen-right sm-no-padding-lr sm-text-center sm-padding-30px-bottom">
                            <h6 className="text-extra-dark-gray width-90 alt-font sm-width-100 margin-15px-bottom">Project skills & expertise</h6>
                            <p className="width-90 margin-30px-bottom sm-width-100">Top four skills used to execute this project and level of competency during the development of this project</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 display-table sm-no-margin-bottom wow fadeIn">
                        <div className="display-table-cell vertical-align-middle">
                            <div className="skillbar-bar-main skillbar-bar-style2">

                                {props.skills.map((skill, index) => {
                                    return <SkillItem 
                                                key={index}
                                                percent={skill.percent}
                                                skill={skill.skill}
                                                experience={skill.experience} />
                                })}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default skills;