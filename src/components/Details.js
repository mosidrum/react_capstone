import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { allCountries } from '../redux/categorySlice';
import '../css/details.css';

const Details = () => {
  const countries = useSelector(allCountries);
  const params = useParams();

  const filteredCountry = countries.find((country) => (
    country.name === params.name
  ));

  return (
    <div className="details-container">
      {filteredCountry && (
        <div className="each-details">
          <img src={filteredCountry.flag} alt={filteredCountry.name} />
          <h3>{filteredCountry.name}</h3>
          <p>
            Demonym:
            <span className="shift">
              {filteredCountry.demonym}
            </span>
          </p>
          <p>
            Area:
            <span className="shift">
              {filteredCountry.area}
            </span>
          </p>
          <p>
            Capital city:
            <span className="shift">
              {filteredCountry.capital}
            </span>
          </p>
          <p>
            Population:
            <span className="shift">
              {filteredCountry.population}
            </span>
          </p>
          <p>
            Cioc:
            <span className="shift">
              {filteredCountry.cioc}
            </span>
          </p>
          <p>
            Population:
            <span className="shift">
              {filteredCountry.population}
            </span>
          </p>
          <p>
            Time zone:
            <span className="shift">
              {filteredCountry.timezones}
            </span>
          </p>
          <p>
            Native name:
            <span className="shift">
              {filteredCountry.nativeName}
            </span>
          </p>
          <p>
            Currency:
            <span className="shift">
              {filteredCountry.currencies[0].name}
            </span>
          </p>
          <p>
            Language:
            <span className="shift">
              {filteredCountry.languages[0].name}
            </span>
          </p>
          <p>
            Region:
            <span className="shift">
              {filteredCountry.region}
            </span>
          </p>
          <p>
            Sub region:
            <span className="shift">
              {filteredCountry.subregion}
            </span>
          </p>
          <p>
            Numeric code:
            <span className="shift">
              {filteredCountry.numericCode}
            </span>
          </p>

        </div>
      )}
    </div>
  );
};

export default Details;
