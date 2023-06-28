import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { allCountries } from '../redux/categorySlice';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const Countries = useSelector(allCountries);
  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const searchCountry = Countries.filter((each) => (
    each.name.toLowerCase().includes(searchTerm.toLowerCase())
  ));

  return (
    <div className="search">
      <NavLink to="/search">
        <input
          type="text"
          placeholder="search country"
          value={searchTerm}
          onChange={handleSearch}
        />
      </NavLink>
      <div>
        {searchTerm && (
          <ul>
            {searchCountry.map((each) => (
              <li key={each.alpha3Code}>{each.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Search;
