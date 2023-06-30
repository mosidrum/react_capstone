import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { allCountries, getCategoryOfCountries, isLoading } from '../redux/categorySlice';
import '../css/categories.css';
import loadingImage from '../assets/loading_3.gif';

const Categories = () => {
  const allCategories = useSelector(allCountries);
  const loading = useSelector(isLoading);
  const dispatch = useDispatch();
  const cat = allCategories.map((each) => (each.region));
  const categories = [...new Set(cat)];
  console.log(categories);

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
      {loading && (
        <img
          src={loadingImage}
          alt="loading gif"
          className="loading"
        />
      )}
      {!loading && categories.map((category) => (
        <div
          type="submit"
          className="category"
          key={category}
        >
          <img src={categoryImage[category]} alt={category} />
          <NavLink
            to="/countries"
          >
            <button
              className="cat"
              onClick={() => handleSubmit(category)}
              type="submit"
            >
              {category}
              (
              {categoryCounts[category]}
              country
              )
            </button>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Categories;
