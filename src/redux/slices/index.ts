import userSlice from './userSlice';
import loaderSlice from './loaderSlice';
import { baseApi } from '../services/baseApi';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  [userSlice.name]: userSlice.reducer,
  [loaderSlice.name]: loaderSlice.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

export default rootReducer;
