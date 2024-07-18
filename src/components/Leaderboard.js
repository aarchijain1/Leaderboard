// src/components/Leaderboard.js
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FaCrown } from 'react-icons/fa';
// import './Leaderboard.css';

const Leaderboard = () => {
  const scores = useSelector((state) => state.scores.topScores);
const topScores = scores.slice(0, 10); // Get only the top 10 scores
const [newEntryIndex, setNewEntryIndex] = useState(null);

useEffect(() => {
  if (scores.length > 0) {
    const newIndex = topScores.findIndex(
      (score) => score.username === scores[0].username && score.time === scores[0].time
    );
    setNewEntryIndex(newIndex);
    const timer = setTimeout(() => setNewEntryIndex(null), 2000); // Clear the animation after 2 seconds
    return () => clearTimeout(timer);
  }
}, [scores, topScores]);

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
          <li
            key={index}
            className={newEntryIndex === index ? 'new-entry' : ''}
          >
            <span className="serial-number">{index + 1}.</span>
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
