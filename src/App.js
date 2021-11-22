import "./App.css";
import { useEffect } from "react";
import AlphabetSelector from "./components/AlphabetSelector";
import CountrySearch from "./components/CountrySearch";
import CountriesList from "./components/CountriesList";
import { fetchCountries } from "./countriesSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  // pretend to fetch the countries up front real fetch here
  useEffect(() => dispatch(fetchCountries(["Afghanistan", "Zimbabwe"])));
  return (
    <div style={{ display: "flex", flexFlow: "column" }}>
      <CountrySearch />
      <AlphabetSelector />
      <CountriesList />
    </div>
  );
}

export default App;
