import React from 'react';

import ProjectItem from './projectItem';

const projectDetails = (props) => {
    return (
        <section class="bg-extra-dark-gray wow fadeIn">
            <div class="container-fluid">
                <div class="row equalize sm-equalize-auto">
                    <div class="col-md-12 col-sm-12 col-xs-12 display-table wow fadeIn">
                        <div class="display-table-cell-vertical-middle padding-thirteen-all md-padding-ten-all sm-padding-six-all xs-padding-50px-tb xs-no-padding-lr">
                            <h5 class="alt-font text-white sm-text-center margin-eight-bottom font-weight-600">Project Challenges and Goals.</h5>
                            <div class="panel-group accordion-style1" id="accordion-design">

                                {props.projects.map(project => {
                                    return <ProjectItem 
                                                question={project.question}
                                                answer={project.answer}/>
                                })}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default projectDetails;