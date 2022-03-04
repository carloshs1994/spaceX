import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../components/NavBar';

test('renders to Nav', () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>,
  );
  const navText = screen.getByText('Space Travelers Hub');
  expect(navText).toMatchSnapshot();
});
