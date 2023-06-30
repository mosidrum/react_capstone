import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Navbar from '../components/Navbar';
import renderer from 'react-test-renderer';

describe('Navbar', () => {
  it('renders the Navbar component', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const logoElement = screen.getByAltText('planet');
    expect(logoElement).toBeInTheDocument();

    const homeLink = screen.getByText('Home');
    expect(homeLink).toBeInTheDocument();

    const searchLink = screen.getByText('Search');
    expect(searchLink).toBeInTheDocument();

    const backLink = screen.getByText('Back');
    expect(backLink).toBeInTheDocument();

    const tree = renderer.create(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    ).toJSON();

    // Assert the snapshot
    expect(tree).toMatchSnapshot();
  });
});
