// src/App.js
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Leaderboard from './components/Leaderboard';
import ScoreForm from './components/ScoreForm';
// import footerImage from './assets/footer-image.jpg';
import './App.css';

const App = () => {
  const [showForm, setShowForm] = useState(false);

  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

  return (
    <Provider store={store}>
      <div className="app">
        <div className="content-wrapper">
          <Leaderboard />
          <div className="button-container">
            <button onClick={openForm}>Add Score</button>
          </div>
          {showForm && <ScoreForm closeForm={closeForm} />}
        </div>
        <div className="footer">
        <img src="" alt="Footer" />
        </div>
      </div>
    </Provider>
  );
};

export default App;
