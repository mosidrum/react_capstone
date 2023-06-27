import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://restcountries.com/v2/all';

const initialState = {
  countries: [],
  isLoading: false,
  error: false,
};

export const getCountries = createAsyncThunk('categories/getCountries', async () => {
  try {
    const response = await axios.get(url);
    const { data } = response;
    // const see = data.filter((each) => each.region === 'Africa');
    // console.log(see);
    return data;
  } catch (error) {
    return error;
  }
});

const countrySlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    getCategoryOfCountries: (state, action) => {
      const find = action.payload;
      const filteredCountries = state.countries.filter((each) => (
        each.region === find
      ));
      return {
        ...state,
        filteredCountries,
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getCountries.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCountries.fulfilled, (state, action) => {
        state.isLoading = false;
        state.countries = action.payload;
      })
      .addCase(getCountries, (state) => {
        state.error = true;
      });
  },
});

export const { getCategoryOfCountries } = countrySlice.actions;

export const allCountries = (state) => state.countries.countries;
export const filteredCountries = (state) => state.countries.filteredCountries;

export default countrySlice.reducer;
