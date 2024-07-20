import React, { useState } from 'react';
import Leaderboard from './Leaderboard';
import ScoreForm from './ScoreForm';
// import footerImage from './assets/footer-image.jpg';
import '../App.css';

const Wrapper = () => {
    const [showForm, setShowForm] = useState(false);
  
    const openForm = () => setShowForm(true);
    const closeForm = () => setShowForm(false);

  return (
    <div className="app">
        <div className="content-wrapper">
          <Leaderboard />
          <div className="button-container">
            <button onClick={openForm}>Add Score</button>
          </div>
          {showForm && <ScoreForm closeForm={closeForm} />}
        </div>
        </div>
  )

}

export default Wrapper