// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Wrapper from './components/Wrapper';
import './App.css';

function App() {
 

  return (
    <Provider store={store}>
      <Wrapper/>
        <div className="footer">
        </div>
        <div className="marquee">
          <span>Get your name on the leaderboard and win exciting prizes.Join and show off your skills!</span>
        </div>
      
    </Provider>
  );
};

export default App;