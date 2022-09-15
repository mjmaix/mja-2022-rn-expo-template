import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

import { CounterState } from '../counterStateTypes';

export const increment: CaseReducer<CounterState, PayloadAction<number | undefined>> = (state, action) => {
  state.value += action.payload || 1;

  return state;
};
