import { createSlice } from '@reduxjs/toolkit';

const currentCountries = JSON.parse(localStorage.getItem('filteredCountries'));

const initialState = {
  selectedCountry: [],
  isOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      const find = action.payload;
      // console.log(currentCountries);
      const findCountry = currentCountries.filter((each) => (
        each.alpha3Code === find
      ));
      console.log(findCountry);
      state.selectedCountry = findCountry;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
