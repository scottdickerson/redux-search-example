import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "./countriesSlice";

const store = configureStore({ reducer: { countriesPage: countriesReducer } });

export default store;
