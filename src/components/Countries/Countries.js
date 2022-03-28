import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const url = `https://restcountries.com/v3.1/all`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h2>Welcome to my world: {countries.length}</h2>
      <ul>
        {countries.map((country) => (
          <li key={country.cca3}>
            <Link to={`/country/${country.name?.common}`}>
              {country.name?.common}
            </Link>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;
