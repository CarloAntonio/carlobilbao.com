import React from 'react';

const projectItem = (props) => {
    return (
        <div class="panel">
            <div class="panel-heading">
                <a data-toggle="collapse" data-parent="#accordion-design" href="#design1" class="collapsed" aria-expanded="false"><div class="panel-title font-weight-500 text-white text-uppercase">{props.question}<span class="pull-right"><i class="ti-minus"></i></span></div></a>
            </div>
            <div id="design1" class="panel-collapse collapse in">
                <div class="panel-body">
                    {props.answer} 
                </div>
            </div>
        </div>
    );
}

export default projectItem;