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
    console.log(id);
    dispatch(getCategoryOfCountries(id));
  };

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
          </button>
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
