import React, {useState} from "react";
import "../App.css";


const Buttons = (props) => {
  return (
    <div>
        <section className="buttons">
        <button className="awayButtons__fieldGoal" onClick = {() => props.handleQuarter(8)}>Quarter</button>
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick = {() => props.handleScore("home", 7)} >Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick = {() => props.handleScore("home", 3)} >Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick = {() => props.handleScore("away", 7)} >Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick = {() => props.handleScore("away", 3)}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}
    
export default Buttons;