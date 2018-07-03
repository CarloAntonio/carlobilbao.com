import React from "react";

import HeroDiv from './subComps/heroDiv';
import OverView from './subComps/overview';
import Project from './subComps/project';
import Skills from './subComps/skills';
import Feedback from './subComps/feedback';

import { we1Data } from '../workData';

const we1 = () => {
  return (
    <div>
        <HeroDiv 
            hero={we1Data.heroDiv.hero}
            title={we1Data.heroDiv.title}
            subTitle={we1Data.heroDiv.subTitle}/>

        <OverView 
            summary={we1Data.overview.summary}
            clientName={we1Data.overview.clientName}
            clientIndustry={we1Data.overview.clientIndustry}
            services={we1Data.overview.services}
            date={we1Data.overview.date}
            clientWebsiteLink={we1Data.overview.clientWebsiteLink}/>

        <Project 
            projects={we1Data.projects}/>

        <Skills 
            skills={we1Data.skills}/>

        <Feedback 
            feedback={we1Data.feedback.feedback}
            feedbackAuth={we1Data.feedback.feedbackAuth}/>
    </div>
  );
}

export default we1;