import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { allCountries } from '../redux/countrySlice';
import Asia from '../assets/Asia.png';
import Europe from '../assets/Europe.png';
import Africa from '../assets/Africa1.png';
import Oceania from '../assets/Oceania.png';
import Americas from '../assets/Americas.jpg';
import Polar from '../assets/polar.jpg';
import Antarctic from '../assets/Antarctic.png';

const Categories = () => {
  const images = [Asia, Europe, Africa, Oceania, Americas, Polar, Antarctic];
  const allCategories = useSelector(allCountries);
  const cat = allCategories.map((each) => (each.region));
  const categories = [...new Set(cat)];
  return (
    <div className="category">
      {categories.map((category, index) => {
        const pics = images[index];
        <ul key={uuidv4()}>
          <img src={pics} alt="map" />
          <li>{category}</li>
        </ul>
      })}
    </div>
  );
};

export default Categories;
