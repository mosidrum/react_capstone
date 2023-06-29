import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { allCountries, filteredCountries } from '../redux/categorySlice';
import Back from './Back';

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
      <>
        <div>
          <Back />
          {saved.map((each) => (
            <div
              key={each.alpha3Code}
              role="button"
              tabIndex={0}
              onClick={() => handleDetails(each.alpha3Code)}
              onKeyDown={() => handleDetails(each.alpha3Code)}
            >
              <li>{each.name}</li>
              <li>{each.population}</li>
            </div>
          ))}
          <div className="details">
            {selectedCountry && (
              <h1>
                {Object.values(selectedCountry).map((value) => (
                  <div
                    key={value.alpha3Code}
                  >
                    <h2>{value.name}</h2>
                    <li>{value.population}</li>
                    <li>{value.subregion}</li>
                  </div>
                ))}
              </h1>
            )}
          </div>
        </div>
      </>
    );
  }
  return (
    <div>
      <Back />
      {result.map((each) => (
        <div
          key={each.alpha3Code}
          role="button"
          tabIndex={0}
          onClick={() => handleDetails(each.alpha3Code)}
          onKeyDown={() => handleDetails(each.alpha3Code)}
        >
          <li>{each.name}</li>
          <li>{each.population}</li>
        </div>
      ))}
      <div className="details">
        {selectedCountry && (
        <h1>
          {Object.values(selectedCountry).map((value) => (
            <div
              key={value.alpha3Code}
            >
              <h2>{value.name}</h2>
              <li>{value.population}</li>
              <li>{value.subregion}</li>
            </div>
          ))}
        </h1>
        )}
      </div>
    </div>
  );
};

export default Countries;
