// src/components/Leaderboard.js
import React from 'react';
import { useSelector } from 'react-redux';
import { FaCrown } from 'react-icons/fa';
// import bgimg from "../assets/bgimage.jpg"

const Leaderboard = () => {
  const scores = useSelector((state) => state.scores.topScores);
  const topScores = scores.slice(0, 10)

//   const bgImage = {
//     backgroundImage: `url(${bgimg})`,
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover",
//     height: "100%",
//     width: "100%",
//   };

  return (
    <>
    {/* <section
    style={bgImage}
  > */}
    <div className="leader" >
      <h1><FaCrown /> Leaderboard (TOP 10)</h1>
      </div>
    {/* <div className="leaderboard1" > */}
        <div className='leaderboard'>

        
    <ul>
        {topScores.map((score, index) => (
          <li key={index}>
            <span className="username">{score.username}</span>
            <span className="time">{score.time}</span>
          </li>
        ))}
      </ul>
      </div>
    {/* </div> */}
    {/* </section> */}
    </>
  );
};

export default Leaderboard;
