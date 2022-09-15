import { combineReducers } from '@reduxjs/toolkit';

import counterSliceReducer from '../modules/counter/store/counterSlice';

export const rootReducer = combineReducers({
  counter: counterSliceReducer,
});
