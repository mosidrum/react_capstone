import React from 'react';
import { useSelector } from 'react-redux';
// import { v4 as uuidv4 } from 'uuid';
import { allCountries } from '../redux/countrySlice';

const Categories = () => {
  const allCategories = useSelector(allCountries);
  const cat = allCategories.map((each) => (each.region));
  const categories = [...new Set(cat)];
  return (
    <div className="category">
      {categories.map((category) => (
        <ul key={category}>
          <li>{category}</li>
        </ul>
      ))}
    </div>
  );
};

export default Categories;
