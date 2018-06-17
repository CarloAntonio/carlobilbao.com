import React from 'react';

//subcomponents
import ProgressBar from './progressBar';

//assets
import { progressData } from '../../data';

const skillSet = () => {
    return (
        <section className="wow fadeIn">
            <div className="container">
                <div className="row">
                    <div className="col-md-7 col-sm-12 col-xs-12 center-col text-center margin-100px-bottom xs-margin-40px-bottom">
                        <div className="position-relative overflow-hidden width-100">
                            <span className="text-small text-outside-line-full alt-font font-weight-600 text-uppercase">Skill Set</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/* technologies section */}
                    <div className="col-md-6 col-sm-10 text-center margin-50px-bottom">
                        {/* start progress bar section */}
                        <div className="skillbar-bar-main skillbar-bar-style-custom">
                            <p className="text-small alt-font font-weight-600 text-uppercase">Technologies</p>

                            {progressData.technologies.map(techItem => {
                                return <ProgressBar 
                                            key={techItem.item}
                                            item={techItem.item} 
                                            experience={techItem.experience} 
                                            percent={techItem.percent} />
                            })}
 
                        </div>
                        {/* end progress bar section*/}
                    </div>

                    {/* frameworks and libraries section */}
                    <div className="col-md-6 col-sm-10 text-center margin-50px-bottom">
                        {/* start progress bar section */}
                        <div className="skillbar-bar-main skillbar-bar-style-custom">
                            <p className="text-small alt-font font-weight-600 text-uppercase">Libraries &amp; Frameworks</p>
                            
                            {progressData.libraries.map(libItem => {
                                return <ProgressBar 
                                            key={libItem.item}
                                            item={libItem.item}
                                            experience={libItem.experience}
                                            percent={libItem.percent}/>
                            })}

                        </div>
                        {/* end progress bar */}
                    </div>

                    {/* tools section */}
                    <div className="col-md-6 col-sm-10 text-center margin-50px-bottom">
                        {/* start progress bar */}
                        <div className="skillbar-bar-main skillbar-bar-style-custom">
                            <p className="text-small alt-font font-weight-600 text-uppercase">Tools</p>
                           
                            {progressData.tools.map(toolItem => {
                                return <ProgressBar 
                                            key={toolItem.item}
                                            item={toolItem.item}
                                            experience={toolItem.experience}
                                            percent={toolItem.percent}/>
                            })}

                        </div>
                        {/* end progress bar */}
                    </div>

                    {/* other section */}
                    <div className="col-md-6 col-sm-10 text-center margin-50px-bottom">
                        {/* start progress bar */}
                        <div className="skillbar-bar-main skillbar-bar-style-custom">
                            <p className="text-small alt-font font-weight-600 text-uppercase">Other</p>
                           
                            {progressData.other.map(otherItem => {
                                return <ProgressBar 
                                            key={otherItem.item}
                                            item={otherItem.item}
                                            experience={otherItem.experience}
                                            percent={otherItem.percent}/>
                            })}

                        </div>
                        {/* end progress bar */}
                    </div>

                </div>
            </div>
        </section>
    );
}

export default skillSet;