import { useEffect, useState } from "react";
import CountryInformation from "./countryInformation";
const CountryList = () => {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    const getCountryList = async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/all?fields=name`
      );
      const body = await response.json();
     
      setCountryList(body);
    };
    getCountryList();
  }, []);

  const handleSelectedCountry = (e)=>{setSelectedCountry(e.target.value) };

  

  return (
    <div className="col-4">
      <select className="form-select" onInput={handleSelectedCountry} value = {selectedCountry}>
        {countryList
          .sort((a, b) => {
            return a.name.common < b.name.common ? -1 : 1;
          })
          .map((country) => {
            return (
              <option key={country.name.official} >{country.name.common}</option>
            );
          })}
      </select>
      { selectedCountry ? <CountryInformation countryName = {selectedCountry} /> : null}
    </div>
  );
};
export default CountryList;
