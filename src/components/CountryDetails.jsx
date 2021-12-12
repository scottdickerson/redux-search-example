import { useSelector } from "react-redux";
const CountryDetails = () => {
  const countryDetails = useSelector((state) => {
    // return Boolean(state.countriesPage.selectedCountry);
    return state.countriesPage.countries[state.countriesPage.selectedCountry];
  });
  return countryDetails ? (
    <div>
      {countryDetails.description} {countryDetails.flag}
    </div>
  ) : null;
};
export default CountryDetails;
