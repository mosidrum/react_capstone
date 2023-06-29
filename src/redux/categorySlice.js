import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://restcountries.com/v2/all';

const initialState = {
  countries: [],
  isLoading: false,
  error: false,
};

export const getCategory = createAsyncThunk('categories/getCategory', async () => {
  try {
    const response = await axios.get(url);
    const { data } = response;
    return data;
  } catch (error) {
    return error;
  }
});

const categorySlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    getCategoryOfCountries: (state, action) => {
      const find = action.payload;
      const filteredCountries = state.countries.filter((each) => (
        each.region === find
      ));
      localStorage.setItem('filteredCountries', JSON.stringify(filteredCountries));
      return {
        ...state,
        filteredCountries,
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.countries = action.payload;
      })
      .addCase(getCategory, (state) => {
        state.error = true;
      });
  },
});

export const { getCategoryOfCountries } = categorySlice.actions;

export const allCountries = (state) => state.countries.countries;
export const filteredCountries = (state) => state.countries.filteredCountries;

export default categorySlice.reducer;
