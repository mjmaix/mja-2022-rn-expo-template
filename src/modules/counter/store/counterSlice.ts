import { createSlice } from '@reduxjs/toolkit';

import { decrement } from './actions/decrement';
import { increment } from './actions/increment';
import { CounterState } from './counterStateTypes';
import { thunkCounterDelayedIncrement } from './thunks/counterThunks';

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
  error: null,
};

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    actionCounterIncrement: increment,
    actionCounterDecrement: decrement,
  },
  extraReducers: (builder) => {
    // NOTE: put async actions here (thunks)
    builder
      .addCase(thunkCounterDelayedIncrement.fulfilled, (state, action) => {
        state.value += Number.parseInt(action.payload.delay, 10);
      })
      .addCase(thunkCounterDelayedIncrement.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { actionCounterIncrement, actionCounterDecrement } = counterSlice.actions;

export default counterSlice.reducer;
