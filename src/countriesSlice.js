import { createSlice } from "@reduxjs/toolkit";
import isEmpty from "lodash/isEmpty";

const initialState = { countries: [], selectedLetter: "A", searchString: "" };

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    fetchCountries(state, action) {
      state.countries = action.payload;
    },
    selectLetter(state, action) {
      state.selectedLetter = action.payload;
      delete state.searchString;
    },
    searchCountries(state, action) {
      if (!isEmpty(action.payload)) {
        state.searchString = action.payload;
        // remove letter selection when searching
        delete state.selectedLetter;
      } else {
        // or if clearing search reselect the letter a countries
        state.selectedLetter = "A";
      }
    },
    selectCountry(state, action) {
      state.selectedCountry = action.payload;
    },
  },
});

export const { fetchCountries, selectLetter, searchCountries, selectCountry } =
  countriesSlice.actions;

export default countriesSlice.reducer;
