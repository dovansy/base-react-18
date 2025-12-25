import { userReducer } from '@/store/user';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  user: userReducer,
});
