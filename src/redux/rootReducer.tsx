import { combineReducers } from '@reduxjs/toolkit';
import exampleReducer from './slice'; // Assumindo que você tenha um slice chamado exampleSlice

const rootReducer = combineReducers({
  example: exampleReducer,
});

export default rootReducer;
