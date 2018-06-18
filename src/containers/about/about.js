import React from "react";

//subcomponents
import HeroSlider from './subComp/heroSlider/heroSlider';
import Summary from './subComp/summary/summary';
import Interest from './subComp/interest/interest';
import Videos from './subComp/videos/videos';
import ShortContact from './subComp/shortContact/shortContact';

const about = () => {

    return (
    <div>
        <HeroSlider />
        <Summary />
        <Interest />
        <Videos />
        <ShortContact />
    </div>
  );
}

export default about;
