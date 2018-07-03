import React from "react";

import HeroDiv from './subComps/heroDiv';
import OverView from './subComps/overview';
import Project from './subComps/project';
import Skills from './subComps/skills';
import Feedback from './subComps/feedback';

import { we3Data } from '../workData';

const we3 = () => {
  return (
    <div>
        <HeroDiv 
            hero={we3Data.heroDiv.hero}
            title={we3Data.heroDiv.title}
            subTitle={we3Data.heroDiv.subTitle}/>

        <OverView 
            summary={we3Data.overview.summary}
            clientName={we3Data.overview.clientName}
            clientIndustry={we3Data.overview.clientIndustry}
            services={we3Data.overview.services}
            date={we3Data.overview.date}
            clientWebsiteLink={we3Data.overview.clientWebsiteLink}/>

        <Project 
            projects={we3Data.projects}/>

        <Skills 
            skills={we3Data.skills}/>

        <Feedback 
            feedback={we3Data.feedback.feedback}
            feedbackAuth={we3Data.feedback.feedbackAuth}/>
    </div>
  );
}

export default we3;