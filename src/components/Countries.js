import React from 'react';
import { useSelector } from 'react-redux';
import { filteredCountries } from '../redux/categorySlice';

const Countries = () => {
  const result = useSelector(filteredCountries);
  const saved = JSON.parse(localStorage.getItem('filteredCountries'));
  if (!result) {
    return (
      <div>
        {saved.map((each) => (
          <ul key={each.alpha3Code}>
            <li>{each.name}</li>
          </ul>
        ))}
      </div>
    );
  }
  return (
    <div>
      {result.map((each) => (
        <ul key={each.alpha3Code}>
          <li>{each.name}</li>
        </ul>
      ))}
    </div>
  );
};

export default Countries;
