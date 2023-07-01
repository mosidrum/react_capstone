import React from 'react';
import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import Countries from '../components/Countries';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

const mockedCountries = [
  {
    alpha3Code: 'ABC',
    name: 'Country 1',
    flag: 'flag1.png',
    demonym: 'Demonym 1',
    population: 1000,
  },
];

const mockedLocalStorageData = JSON.stringify(mockedCountries);

beforeEach(() => {
  useSelector.mockReturnValue(mockedCountries);
  window.localStorage.__proto__.getItem = jest.fn(() => mockedLocalStorageData);
});

describe('Countries Component', () => {
  test('renders countries correctly', () => {
    render(<Countries />);
    expect(screen.getByText('Country 1')).toBeInTheDocument();
  });

  test('handles country selection', () => {
    render(<Countries />);
    screen.getByText('Country 1').click();
    expect(screen.getByText('Demonym:')).toBeInTheDocument();
  });
});
