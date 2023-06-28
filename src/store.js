import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './redux/categorySlice';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
});

export default store;
