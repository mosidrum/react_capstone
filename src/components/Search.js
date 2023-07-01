import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { allCountries } from '../redux/categorySlice';
import '../css/search.css';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const Countries = useSelector(allCountries);
  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const searchCountry = Countries.filter((each) => (
    each.name.toLowerCase().includes(searchTerm.toLowerCase())
  ));

  const handleDetails = (id) => {
    const details = Countries.filter((each) => (
      each.alpha3Code === id
    ));
    if (details) {
      navigate(`/details/${details[0].name}`);
    }
  };

  return (
    <>
      <div className="search-component">
        <div className="search">
          <NavLink to="/search">
            <input
              type="text"
              placeholder="search country"
              value={searchTerm}
              onChange={handleSearch}
            />
          </NavLink>
        </div>
        <div>
          {searchTerm && (
            <div className="result">
              {searchCountry.map((each) => (
                <div
                  key={each.alpha3Code}
                  className="each-result"
                  role="button"
                  tabIndex={0}
                  onClick={() => handleDetails(each.alpha3Code)}
                  onKeyDown={() => handleDetails(each.alpha3Code)}
                >
                  <img src={each.flag} alt={each.name} />
                  <h3>{each.name}</h3>
                  <div className="bottom">
                    <li>
                      Demonym:
                      <span
                        className="value"
                      >
                        {each.demonym}
                      </span>
                    </li>
                    <li>
                      Population:
                      <span
                        className="value"
                      >
                        {each.population}
                      </span>
                    </li>
                    <li>
                      Region:
                      <span
                        className="value"
                      >
                        {each.region}
                      </span>
                    </li>
                    <li>
                      Subregion:
                      <span
                        className="value"
                      >
                        {each.subregion}
                      </span>
                    </li>
                    <button
                      type="submit"
                    >
                      View more
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
