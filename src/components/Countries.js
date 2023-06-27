import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filteredCountries } from '../redux/categorySlice';
import { openModal } from '../redux/modalSlice';

const Countries = () => {
  const result = useSelector(filteredCountries);
  const dispatch = useDispatch();
  const saved = JSON.parse(localStorage.getItem('filteredCountries'));

  const handleSubmit = (id) => {
    dispatch(openModal(id));
  };

  if (!result) {
    return (
      <div>
        {saved.map((each) => (
          <ul key={each.alpha3Code}>
            <li>{each.name}</li>
            <button
              type="submit"
              onClick={() => handleSubmit(each.alpha3Code)}
            >
              View more
            </button>
          </ul>
        ))}
      </div>
    );
  }
  return (
    <div>
      {result.map((each) => (
        <ul key={each.alpha3Code}>
          <li>{each.name}</li>
          <button
            type="submit"
            onClick={() => handleSubmit(each.alpha3Code)}
          >
            View more
          </button>
        </ul>
      ))}
    </div>
  );
};

export default Countries;
