//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import Buttons from "./buttons";


//MVP
// function App() {
//   //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
// const [homeScore, setHomeScore] = useState(22);
// const [awayScore, setAwayScore] = useState(22);


//   return (
//     <div className="container">
//       <section className="scoreboard">
//         <div className="topRow">
//           <div className="home">
//             <h2 className="home__name">Lions</h2>

//             {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

//             <div className="home__score">{homeScore}</div>
//           </div>
//           <div className="timer">00:03</div>
//           <div className="away">
//             <h2 className="away__name">Tigers</h2>
//             <div className="away__score">{awayScore}</div>
//           </div>
//         </div>
//         <BottomRow />
//       </section>
//       <section className="buttons">
//         <div className="homeButtons">
//           {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
//           <button className="homeButtons__touchdown" onClick = {() => setHomeScore(homeScore + 7)}>Home Touchdown</button>
//           <button className="homeButtons__fieldGoal" onClick = {() => setHomeScore(homeScore + 3)}>Home Field Goal</button>
//         </div>
//         <div className="awayButtons">
//           <button className="awayButtons__touchdown" onClick = {() => setAwayScore(awayScore + 7)}>Away Touchdown</button>
//           <button className="awayButtons__fieldGoal" onClick = {() => setAwayScore(awayScore + 3)}>Away Field Goal</button>
//         </div>
//       </section>
//     </div>
//   );
// }




// Stretch....Write a "handler" function in the component that takes in a team name and an amount. 
// This function will then be passed to each button's click handler. It will increment the correct team's
//  score by the passed in amount

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(22);
  const [awayScore, setAwayScore] = useState(22);
  
const handleScore = (team, score) => {
  if (team === 'home') {
    setHomeScore(homeScore + score)
  } else if(team === 'away') {
    setAwayScore(awayScore + score)
  }
}


  return (
    <div className="container">
      <section className="scoreboard">
        <h1>Lambda Project Rating Score</h1>
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Girls</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Boys</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick = {() => handleScore("home", 7)} >Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick = {() => handleScore("home", 3)} >Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick = {() => handleScore("away", 7)} >Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick = {() => handleScore("away", 3)}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}



// const App = (props) => {
//   //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
// //   const [homeScore, setHomeScore] = useState(22);
// //   const [awayScore, setAwayScore] = useState(22);
  
// // const handleScore = (team, score) => {
// //   if (team === 'home') {
// //     setHomeScore(homeScore + score)
// //   } else if(team === 'away') {
// //     setAwayScore(awayScore + score)
// //   }
// // }


//   return (
//     <div className="container">
//       <section className="scoreboard">
//         <div className="topRow">
//           <div className="home">
//             <h2 className="home__name">Lions</h2>

//             {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

//             <div className="home__score">{homeScore}</div>
//           </div>
//           <div className="timer">00:03</div>
//           <div className="away">
//             <h2 className="away__name">Tigers</h2>
//             <div className="away__score">{awayScore}</div>
//           </div>
//         </div>
//         <BottomRow />
//       </section>
//      <Buttons />
//     </div>
//   );
// }



export default App;
