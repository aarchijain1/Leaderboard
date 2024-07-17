// src/components/ScoreForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addScore } from '../redux/scoresSlice';

const ScoreForm = ({ closeForm }) => {
  const [username, setUsername] = useState('');
  const [time, setTime] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addScore({ username, time }));
    setUsername('');
    setTime('');
    closeForm();
  };

  return (
    <div data-aos="zoom-in" className="score-form-overlay">
      <div className="score-form">
        <h3>Add New Score</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </label>
          <label>
            Time (MM:SS:MS):
            <input type="text" value={time} onChange={(e) => setTime(e.target.value)} required />
          </label>
          <button type="submit">Add Score</button>
          <button type="button" onClick={closeForm}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default ScoreForm;
