import { useDispatch } from "react-redux";
import { searchCountries } from "../countriesSlice";

const CountrySearch = () => {
  const dispatch = useDispatch();
  return (
    <input
      type="search"
      onChange={(e) => dispatch(searchCountries(e.target.value))}
    />
  );
};

export default CountrySearch;
