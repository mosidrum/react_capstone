import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import configureStore from 'redux-mock-store';
import Search from '../components/Search';

const mockStore = configureStore([]);

describe('Search component', () => {
  test('renders correctly', () => {
    const store = mockStore({
      countries: {
        countries: [],
      },
    });

    render(
      <Provider store={store}>
        <Router>
          <Search />
        </Router>
      </Provider>
    );

    // Assert that the search input is rendered
    const searchInput = screen.getByPlaceholderText('search country');
    expect(searchInput).toBeInTheDocument();

    // Add more assertions if needed
  });
});
