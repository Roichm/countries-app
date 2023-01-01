import { useEffect, useState } from "react";

const CountryInformation = ({ countryName }) => {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const getCountryByName = async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
      );
      const foundCountry = await response.json();
      console.log(foundCountry[0]);
      setCountry(foundCountry[0]);
    };
    getCountryByName(countryName);
  }, [countryName]);

  console.log(country);

  if (!country) {
    return <p>loading</p>;
  }

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={country.flags.svg} className="card-img-top" alt={country.name.common} />
      <div className="card-body">
        <h5 className="card-title">{countryName}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
        <i className="bi bi-clock"></i>
        <span className="fw-bold mx-2">Time Zone:</span>
            {(country.timezones).join(", ")}</li>
        <li className="list-group-item">
        <i className="bi bi-people-fill"></i>
        <span className="fw-bold mx-2">Population: </span>
            {country.population.toLocaleString()}
        </li>

        <li className="list-group-item">
        <i className="bi bi-buildings"></i>
        <span className="fw-bold mx-2">Capital: </span>
            {country.capital}
        </li>

        <li className="list-group-item">
        <i className="bi bi-geo-alt-fill"></i>
        <span className="fw-bold mx-2">Area: </span>
            {country.area}
        </li>

        <li className="list-group-item">
        <i className="bi bi-translate"></i>
        <span className="fw-bold mx-2">Langueges: </span>

        {Object.values(country.languages).join(", ")}

        </li>

        <li className="list-group-item">
        <i className="bi bi-cash-coin"></i>
        <span className="fw-bold mx-2">Currencies: </span>
        {Object.values(country.currencies)[0].name}
        </li>
        
      </ul>
      <div className="card-body">
        <a href={country.maps.googleMaps} className="card-link" >
        googleMaps
        </a>
        <a href={country.maps.openStreetMaps} className="card-link">
        openStreetMaps
        </a>
      </div>
    </div>
  );
};
export default CountryInformation;
