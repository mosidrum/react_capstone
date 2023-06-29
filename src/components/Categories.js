import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { allCountries, getCategoryOfCountries } from '../redux/categorySlice';
import '../css/categories.css';

const Categories = () => {
  const allCategories = useSelector(allCountries);
  const dispatch = useDispatch();
  const cat = allCategories.map((each) => (each.region));
  const categories = [...new Set(cat)];

  const handleSubmit = (id) => {
    dispatch(getCategoryOfCountries(id));
  };

  const images = [
    'https://i.ibb.co/zZ16v9B/Asia.png',
    'https://i.ibb.co/3fLsYTF/Europe.png',
    'https://i.ibb.co/9tHqvcc/Africa.png',
    'https://i.ibb.co/ZN1sYPg/Oceania.png',
    'https://i.ibb.co/yNb2x44/Americas.png',
    'https://i.ibb.co/7rNfzyr/Polar.png',
    'https://i.ibb.co/mJ7TR65/Antarctic.png',
    'https://i.ibb.co/mJ7TR65/Antarctic.png',
  ];

  const categoryImage = categories.reduce((imageMaped, category, index) => {
    imageMaped[category] = images[index];
    return imageMaped;
  }, {});

  const categoryCounts = categories.reduce((counts, category) => {
    const count = allCategories.filter((item) => item.region === category).length;
    counts[category] = count;
    return counts;
  }, {});

  return (
    <div className="categories">
      {categories.map((category) => (
        <button
          type="submit"
          className="category"
          key={category}
          onClick={() => handleSubmit(category)}
        >
          <img src={categoryImage[category]} alt={category} />
          <NavLink
            to="/countries"
          >
            <p className="cat">
              {category}
              (
              {categoryCounts[category]}
              country
              )
            </p>
          </NavLink>
        </button>
      ))}
    </div>
  );
};

export default Categories;
