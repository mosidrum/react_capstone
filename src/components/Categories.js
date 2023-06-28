import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { allCountries, getCategoryOfCountries } from '../redux/categorySlice';

const Categories = () => {
  const allCategories = useSelector(allCountries);
  const dispatch = useDispatch();
  const cat = allCategories.map((each) => (each.region));
  const categories = [...new Set(cat)];

  const handleSubmit = (id) => {
    dispatch(getCategoryOfCountries(id));
  };

  const categoryCounts = categories.reduce((counts, category) => {
    const count = allCategories.filter((item) => item.region === category).length;
    counts[category] = count;
    return counts;
  }, {});

  return (
    <div className="category">
      {categories.map((category) => (
        <NavLink
          to="/countries"
          key={category}
        >
          <button
            type="submit"
            onClick={() => handleSubmit(category)}
          >
            {category}
            (
            {categoryCounts[category]}
            country
            )
          </button>
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
