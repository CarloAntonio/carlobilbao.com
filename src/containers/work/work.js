import React from "react";

import HeroDiv from './subComps/heroDiv';
import WorkItem from './subComps/workItem';

import { workItemsData } from './workData';

const work = () => {
  return (
    <div>
        
        <HeroDiv />

        <section className="wow fadeIn">
            <div className="container">
                <div className="row col-4-nth sm-col-2-nth">

                    {workItemsData.map((workItem, index) => {
                        return <WorkItem 
                                    key={ index }
                                    image={ workItem.image }
                                    date={ workItem.date }
                                    title={ workItem.title }
                                    delay={ workItem.delay }
                                    link={ workItem.link }/>
                    })}

                </div>
            </div>
        </section>
        
    </div>
  );
}

export default work;