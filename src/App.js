import "./App.css";
import { useEffect } from "react";
import AlphabetSelector from "./components/AlphabetSelector";
import CountrySearch from "./components/CountrySearch";
import CountriesList from "./components/CountriesList";
import { fetchCountries } from "./countriesSlice";
import { useDispatch } from "react-redux";
import CountryDetails from "./components/CountryDetails";

function App() {
  const dispatch = useDispatch();
  // pretend to fetch the countries up front real fetch here
  useEffect(() =>
    dispatch(
      fetchCountries({
        Afghanistan: {
          description: "A wartorn country",
          flag: "afghanistan.jpg",
        },
        AAA: { description: "AAA details", flag: "afghanistan.jpg" },
        AAA2: { description: "AAA2 details", flag: "afghanistan.jpg" },
        Zimbabwe: {
          description: "A beautiful country",
          flag: "afghanistan.jpg",
        },
      })
    )
  );
  return (
    <div style={{ display: "flex", flexFlow: "column" }}>
      <CountrySearch />
      <AlphabetSelector />
      <CountriesList />
      <CountryDetails />
    </div>
  );
}

export default App;
