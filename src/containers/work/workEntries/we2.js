import React from "react";

import HeroDiv from './subComps/heroDiv';
import OverView from './subComps/overview';
import Project from './subComps/project';
import Skills from './subComps/skills';
import Feedback from './subComps/feedback';

import { we2Data } from '../workData';

const we2 = () => {
  return (
    <div>
        <HeroDiv 
            hero={we2Data.heroDiv.hero}
            title={we2Data.heroDiv.title}
            subTile={we2Data.heroDiv.subTile}/>

        <OverView 
            summary={we2Data.overview.summary}
            clientName={we2Data.overview.clientName}
            clientIndustry={we2Data.overview.clientIndustry}
            services={we2Data.overview.services}
            date={we2Data.overview.date}
            clientWebsiteLink={we2Data.overview.clientWebsiteLink}/>

        <Project 
            projects={we2Data.projects}/>

        <Skills 
            skills={we2Data.skills}/>

        <Feedback 
            feedback={we2Data.feedback.feedback}
            feedbackAuth={we2Data.feedback.feedbackAuth}/>
    </div>
  );
}

export default we2;