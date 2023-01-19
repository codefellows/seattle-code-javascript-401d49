import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { name: 'Peter', votes: 0 },
  { name: 'Paul', votes: 0 },
  { name: 'Mary', votes: 0 },
];

const candidateSlice = createSlice({
  name: 'candidates',
  initialState,
  reducers: {
    incrementVote: (state, action) => {
      return state.map(candidate => {
        if (candidate.name === action.payload.name) {
          return {
            name: candidate.name,
            votes: candidate.votes + 1,
          }
        }
        return candidate;
      });
    },
    decrementVote: (state, action) => {
      return state.map(candidate => candidate.name === action.payload.name ? {name: candidate.name, votes: candidate.votes - 1} : candidate);
    },
    reset: () => initialState,
  },
})

export const {incrementVote, decrementVote, reset } = candidateSlice.actions;
export default candidateSlice.reducer;
