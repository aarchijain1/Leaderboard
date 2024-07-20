// src/redux/scoresSlice.js
import { createSlice } from '@reduxjs/toolkit';

const scoresSlice = createSlice({
  name: 'scores',
  initialState: {
    topScores: [
      { username: 'M.S. Dhoni', time: '02:30:123' },
      { username: 'Virat Kohli', time: '03:30:123' },
      { username: 'Sachin Tendulkar', time: '03:33:123' },
      { username: 'Rahul Dravid', time: '04:30:123' },
      { username: 'KL Rahul', time: '04:05:789' },
      { username: 'Rohit Sharma', time: '04:04:444' },
      { username: 'Bumrah', time: '05:45:789' },
      { username: 'Hardik Pandaya', time: '06:45:789' },
     
      // Add more dummy data as needed
    ]
  },
  reducers: {
    addScore: (state, action) => {
      state.topScores.push(action.payload);
      state.topScores.sort((a, b) => a.time.localeCompare(b.time)).slice(0, 10);
    }
  }
});

export const { addScore } = scoresSlice.actions;
export default scoresSlice.reducer;
