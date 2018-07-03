import React from 'react';

const projectItem = (props) => {
    return (
        <div className="panel">
            <div className="panel-heading">
                <a data-toggle="collapse" data-parent="#accordion-design" href={"#design" + props.index } className="collapsed" aria-expanded="false"><div className="panel-title font-weight-500 text-white text-uppercase">{props.question}<span className="pull-right"><i className="ti-minus"></i></span></div></a>
            </div>
            <div 
                id={"design" + props.index} 
                className={props.index === 1 
                    ? "panel-collapse collapse in"
                    : "panel-collapse collapse"}>
                <div className="panel-body">
                    {props.answer} 
                </div>
            </div>
        </div>
    );
}

export default projectItem;
