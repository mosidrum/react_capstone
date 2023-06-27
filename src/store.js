import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './redux/categorySlice';
import modalReducer from './redux/modalSlice';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
    modal: modalReducer,
  },
});

export default store;
