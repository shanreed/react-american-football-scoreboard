import React from 'react';
import Timer from "./timer";
import Home from './home';
import Away from './away'

const TopRow = (props) => {
    return (
        <div className="topRow">
          <Home homeScore = {props.homeScore} />
          <Timer />
          <Away awayScore = {props.awayScore} />
        </div>
    )
}

export default TopRow;