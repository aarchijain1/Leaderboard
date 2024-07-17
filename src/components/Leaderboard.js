// src/components/Leaderboard.js
import React from 'react';
import { useSelector } from 'react-redux';
import { FaCrown } from 'react-icons/fa';

const Leaderboard = () => {
  const scores = useSelector((state) => state.scores.topScores);

  return (
    <div className="leaderboard">
      <h2><FaCrown /> Leaderboard</h2>
      <ul>
        {scores.map((score, index) => (
          <li key={index}>
            {score.username}: {score.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
