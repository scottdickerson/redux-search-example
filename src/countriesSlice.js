import { createSlice } from "@reduxjs/toolkit";
import isEmpty from "lodash/isEmpty";

const initialState = { countries: [], selectedLetter: "A", searchString: "" };

/**
 * state = {
 * countries:
 *  {
 *    Afghanistan: { description: '', flag: ''},
 *    Zimbabwe: { description: '', flag: ''}
 *  },
 *  selectedCountry: 'Afghanistan'
 * }
 *
 * getCountryDetails(country) => countries[country]
 */

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    // page startup
    fetchCountries(state, action) {
      state.countries = action.payload;
    },
    // user selection
    selectLetter(state, action) {
      state.selectedLetter = action.payload;
      state.searchString = "";
      // also clear country
      delete state.selectedCountry;
    },
    // user types search
    searchCountries(state, action) {
      console.log("searchin string", action.payload);
      state.searchString = action.payload;
      // remove letter selection when searching
      delete state.selectedLetter;

      // or if clearing search reselect the letter a countries
      if (isEmpty(action.payload)) {
        state.selectedLetter = "A";
      }
      // also clear country
      delete state.selectedCountry;
    },
    // user clicks country tab
    selectCountry(state, action) {
      state.selectedCountry = action.payload;
    },
  },
});

export const { fetchCountries, selectLetter, searchCountries, selectCountry } =
  countriesSlice.actions;

export default countriesSlice.reducer;
