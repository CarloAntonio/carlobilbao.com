import React from "react";

//subcomponents
import HeroBanner from './subComps/heroBanner';
import ShortAbout from './subComps/shortAbout';
import SkillSet from './subComps/skillSet/skillSet';
import Porfolio from './subComps/porfolio/portfolio';
import ShortContact from './subComps/shortContact';

//assets
import magnolia from '../../assets/img/magnoliaDotCom.jpg';

const home = () => {
  return (
    <div>
        <HeroBanner />
        <ShortAbout />
        <SkillSet />
        <Porfolio />
        <ShortContact />
    </div>
  );
}

export default home;
