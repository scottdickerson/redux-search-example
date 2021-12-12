import { useSelector, useDispatch } from "react-redux";
import { selectCountry } from "../countriesSlice";
import isEmpty from "lodash/isEmpty";
const CountriesList = () => {
  const filteredCountries = useSelector((state) => {
    const selectedLetter = state.countriesPage.selectedLetter;
    const searchCountriesString = state.countriesPage.searchString;
    if (selectedLetter) {
      return Object.keys(state.countriesPage.countries).filter(
        (
          country // ["Afghanistan", "AAA","AAA2",..]
        ) => country.startsWith(selectedLetter)
      );
    } else if (!isEmpty(searchCountriesString)) {
      return Object.keys(state.countriesPage.countries).filter((country) =>
        country.toLowerCase().includes(searchCountriesString)
      );
    } else return Object.keys(state.countriesPage.countries);
  });
  const dispatch = useDispatch();

  return (
    <div style={{ display: "flex", flexFlow: "row" }}>
      {filteredCountries.map((country) => (
        <div style={{ paddingRight: ".5rem" }}>
          <button
            key={country}
            onClick={() => {
              dispatch(selectCountry(country));
              console.log("country selected", country);
            }}
          >
            {country}
          </button>
        </div>
      ))}
    </div>
  );
};

export default CountriesList;
