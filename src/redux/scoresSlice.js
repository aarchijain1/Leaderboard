// src/redux/scoresSlice.js
import { createSlice } from '@reduxjs/toolkit';

const scoresSlice = createSlice({
  name: 'scores',
  initialState: {
    topScores: [
      { username: 'Alice', time: '02:30:123' },
      { username: 'Alice', time: '02:30:123' },
      { username: 'Alice', time: '02:30:123' },
      { username: 'Alice', time: '02:30:123' },
      { username: 'Alice', time: '02:30:123' },
      { username: 'Alice', time: '02:30:123' },
      { username: 'Bob', time: '02:45:789' },
      { username: 'Bob', time: '02:45:789' },
      { username: 'Bob', time: '02:45:789' },
      { username: 'Bob', time: '02:45:789' },
      { username: 'Bob', time: '02:45:789' },
      { username: 'Bob', time: '02:45:789' },
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
