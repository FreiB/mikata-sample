import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';

// Use the initialState as a default value
const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
