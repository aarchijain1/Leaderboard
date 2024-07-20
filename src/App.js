// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Wrapper from './components/Wrapper';
// import footerImage from './assets/footer-image.jpg';
import './App.css';

function App() {
 

  return (
    <Provider store={store}>
      <Wrapper/>
        <div className="footer">
        <img src="" alt="Footer" />
        </div>
      
    </Provider>
  );
};

export default App;

