import React from 'react';


const Quarter = props => {
    return (
        <div className ="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{props.oldQuarter}</div>
        </div>
    )
}

export default Quarter;