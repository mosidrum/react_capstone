import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { allCountries, filteredCountries } from '../redux/categorySlice';
import '../css/countries.css';

const Countries = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const countries = useSelector(allCountries);
  const result = useSelector(filteredCountries);
  const saved = JSON.parse(localStorage.getItem('filteredCountries'));

  const handleDetails = (id) => {
    const details = countries.filter((each) => (
      each.alpha3Code === id
    ));
    console.log(details);
    setSelectedCountry(details);
  };

  if (!result) {
    return (
      <div className="countries-container">
        <div className="countries">
          {saved.map((each) => (
            <div
              key={each.alpha3Code}
              role="button"
              className="country"
              tabIndex={0}
              onClick={() => handleDetails(each.alpha3Code)}
              onKeyDown={() => handleDetails(each.alpha3Code)}
            >
              <img src={each.flag} alt={each.name} />
              <h3>
                {each.name}
              </h3>
              <div
                className="bottom"
              >
                <li>
                  Demonym:
                  <span
                    className="value"
                  >
                    {each.demonym}
                  </span>
                </li>
                <li>
                  Population:
                  <span
                    className="value"
                  >
                    {each.population}
                  </span>
                </li>
                <button
                  type="submit"
                >
                  View more
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="details">
          {selectedCountry && (
            <>
              {Object.values(selectedCountry).map((value) => (
                <div
                  key={value.alpha3Code}
                  className="view-more"
                >
                  <img src={value.flag} alt={value.flag} />
                  <table className="table">
                    <td className="info">
                      <span>Name:</span>
                      {value.name}
                    </td>
                    <td className="info">
                      <span>Area:</span>
                      {value.area}
                    </td>
                    <td className="info">
                      <span>Capital city:</span>
                      {value.capital}
                    </td>
                    <td className="info">
                      <span>Demonym:</span>
                      {value.demonym}
                    </td>
                    <td className="info">
                      <span>Region:</span>
                      {value.region}
                    </td>
                    <td className="info">
                      <span>Subregion:</span>
                      {value.subregion}
                    </td>
                    <td className="info">
                      {value.currencies && value.currencies.length > 0 && (
                        <>
                          <span>Currency:</span>
                          {value.currencies[0].name}
                        </>
                      )}
                    </td>
                    <td className="info">
                      {value.currencies && value.currencies.length > 0 && (
                        <>
                          <span>Currency symbol:</span>
                          {value.currencies[0].symbol}
                        </>
                      )}
                    </td>
                    <td className="info">
                      <span>Population:</span>
                      {value.population}
                    </td>
                    <td className="info">
                      <span>Native name:</span>
                      {value.nativeName}
                    </td>
                    <td className="info">
                      <span>Time zone:</span>
                      {value.timezones}
                    </td>
                    <td className="info">
                      {value.languages && value.languages.length > 0 && (
                        <>
                          <span>Language:</span>
                          {value.languages[0].name}
                        </>
                      )}
                    </td>
                    <td className="info">
                      {value.regionalBlocs && value.regionalBlocs.length > 0 && (
                        <>
                          <tr>Regional blocs:</tr>
                          {value.regionalBlocs[0].name}
                        </>
                      )}
                    </td>
                  </table>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    );
  }
  return (
    <div className="countries-container">
      <div className="countries">
        {saved.map((each) => (
          <div
            key={each.alpha3Code}
            role="button"
            className="country"
            tabIndex={0}
            onClick={() => handleDetails(each.alpha3Code)}
            onKeyDown={() => handleDetails(each.alpha3Code)}
          >
            <img src={each.flag} alt={each.name} />
            <h3>
              {each.name}
            </h3>
            <div
              className="bottom"
            >
              <li>
                Demonym:
                <span
                  className="value"
                >
                  {each.demonym}
                </span>
              </li>
              <li>
                Population:
                <span
                  className="value"
                >
                  {each.population}
                </span>
              </li>
              <button
                type="submit"
              >
                View more
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="details">
        {selectedCountry && (
        <>
          {Object.values(selectedCountry).map((value) => (
            <div
              key={value.alpha3Code}
              className="view-more"
            >
              <img src={value.flag} alt={value.flag} />
              <table className="table">
                <td className="info">
                  <span>Name:</span>
                  {value.name}
                </td>
                <td className="info">
                  <span>Area:</span>
                  {value.area}
                </td>
                <td className="info">
                  <span>Capital city:</span>
                  {value.capital}
                </td>
                <td className="info">
                  <span>Demonym:</span>
                  {value.demonym}
                </td>
                <td className="info">
                  <span>Region:</span>
                  {value.region}
                </td>
                <td className="info">
                  <span>Subregion:</span>
                  {value.subregion}
                </td>
                <td className="info">
                  {value.currencies && value.currencies.length > 0 && (
                  <>
                    <span>Currency:</span>
                    {value.currencies[0].name}
                  </>
                  )}
                </td>
                <td className="info">
                  {value.currencies && value.currencies.length > 0 && (
                  <>
                    <span>Currency symbol:</span>
                    {value.currencies[0].symbol}
                  </>
                  )}
                </td>
                <td className="info">
                  <span>Population:</span>
                  {value.population}
                </td>
                <td className="info">
                  <span>Native name:</span>
                  {value.nativeName}
                </td>
                <td className="info">
                  <span>Time zone:</span>
                  {value.timezones}
                </td>
                <td className="info">
                  {value.languages && value.languages.length > 0 && (
                  <>
                    <span>Language:</span>
                    {value.languages[0].name}
                  </>
                  )}
                </td>
                <td className="info">
                  {value.regionalBlocs && value.regionalBlocs.length > 0 && (
                  <>
                    <tr>Regional blocs:</tr>
                    {value.regionalBlocs[0].name}
                  </>
                  )}
                </td>
              </table>
            </div>
          ))}
        </>
        )}
      </div>
    </div>
  );
};

export default Countries;
