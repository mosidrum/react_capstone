import React from 'react';
import { useSelector } from 'react-redux';
import { filteredCountries } from '../redux/categorySlice';

const Countries = () => {
  const Countries = useSelector(filteredCountries);
  console.log(Countries);
  return (
    <div>
      Countries
    </div>
  );
};

export default Countries;
