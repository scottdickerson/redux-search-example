import { useSelector } from "react-redux";
import isEmpty from "lodash/isEmpty";
const CountriesList = () => {
  const filteredCountries = useSelector((state) => {
    const selectedLetter = state.countriesPage.selectedLetter;
    const searchCountriesString = state.countriesPage.searchString;
    if (selectedLetter) {
      return state.countriesPage.countries.filter((country) =>
        country.startsWith(selectedLetter)
      );
    } else if (!isEmpty(searchCountriesString)) {
      return state.countriesPage.countries.filter((country) =>
        country.toLowerCase().includes(searchCountriesString)
      );
    } else return state.countriesPage.countries;
  });

  return (
    <div style={{ display: "flex", flexFlow: "row" }}>
      {filteredCountries.map((country) => (
        <div style={{ paddingRight: ".5rem" }}>
          <div key={country}>{country}</div>
        </div>
      ))}
    </div>
  );
};

export default CountriesList;
