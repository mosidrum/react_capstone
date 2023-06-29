import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { filteredCountries } from '../redux/categorySlice';
import Back from './Back';

const Countries = () => {
  const result = useSelector(filteredCountries);
  const saved = JSON.parse(localStorage.getItem('filteredCountries'));

  if (!result) {
    return (
      <div>
        <NavLink to="/">
          <button
            type="submit"
          >
            Back
          </button>
        </NavLink>
        {saved.map((each) => (
          <ul key={each.alpha3Code}>
            <li>{each.name}</li>
            <li>{each.population}</li>
          </ul>
        ))}
      </div>
    );
  }
  return (
    <div>
      <Back />
      {result.map((each) => (
        <ul key={each.alpha3Code}>
          <li>{each.name}</li>
          <li>{each.population}</li>
        </ul>
      ))}
    </div>
  );
};

export default Countries;
