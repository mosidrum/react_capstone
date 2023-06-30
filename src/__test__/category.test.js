import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import Categories from '../components/Categories';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('Categories component', () => {
  it('should render categories correctly', () => {
    const allCategories = [
      { region: 'Asia' },
      { region: 'Europe' },
      { region: 'Africa' },
    ];
    const isLoading = false;

    useSelector.mockReturnValueOnce(allCategories);
    useSelector.mockReturnValueOnce(isLoading);
    useDispatch.mockReturnValue(jest.fn());

    const { container } = render(
      <MemoryRouter>
        <Categories />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });
});