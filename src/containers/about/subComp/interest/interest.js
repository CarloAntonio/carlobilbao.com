import React from 'react'

//subcomponents
import InterestItem from './interestItem';

//assets
import { interestData } from '../../data';

const interest = () => {
    return (
        <section className="wow fadeIn bg-light-gray">
            <div className="container">
                <div className="row">
                    <div className="col-md-7 col-sm-12 col-sm-12 center-col text-center margin-100px-bottom xs-margin-40px-bottom">
                        <div className="position-relative overflow-hidden width-100">
                            <span className="text-small text-outside-line-full alt-font font-weight-600 text-uppercase">Other Interest</span>
                        </div>
                    </div>
                </div>
                <div className="row equalize">

                    {interestData.map(interest => {
                        return <InterestItem 
                            key={interest.title}
                            title={interest.title} 
                            content={interest.content} 
                            delay={interest.delay} />
                    })}
                
                </div>
            </div>
        </section>
    );
}

export default interest;