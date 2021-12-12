import { useDispatch, useSelector } from "react-redux";
import { searchCountries } from "../countriesSlice";

const CountrySearch = () => {
  const dispatch = useDispatch();
  const searchString = useSelector(
    (state) => state.countriesPage?.searchString
  );
  return (
    <input
      type="search"
      onChange={(e) => dispatch(searchCountries(e.target.value))}
      value={searchString}
    />
  );
};

export default CountrySearch;
