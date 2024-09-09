// src/__tests__/Movie.test.js

import { render } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import Movie from '../components/Movie';
import ErrorPage from '../components/ErrorPage';

const routes = [
  { path: "/movies", element: <Movie /> },
  { path: "*", element: <ErrorPage /> },
];

test('renders the Movie component on route "/movies"', () => {
  const router = createMemoryRouter(routes, { initialEntries: ['/movies'] });
  render(<RouterProvider router={router} />);
});