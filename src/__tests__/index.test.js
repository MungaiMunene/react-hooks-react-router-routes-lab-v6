// src/__tests__/index.test.js

import { render } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movie from '../components/Movie';
import ErrorPage from '../components/ErrorPage';

const routes = [
  { path: "/", element: <Home /> },
  { path: "/actors", element: <Actors /> },
  { path: "/directors", element: <Directors /> },
  { path: "/movies", element: <Movie /> },
  { path: "*", element: <ErrorPage /> },
];

test('renders the Home component on route "/"', () => {
  const router = createMemoryRouter(routes, { initialEntries: [''] });
  render(<RouterProvider router={router} />);
});

test('renders the Actors component on route "/actors"', () => {
  const router = createMemoryRouter(routes, { initialEntries: ['/actors'] });
  render(<RouterProvider router={router} />);
});

test('renders the Directors component on route "/directors"', () => {
  const router = createMemoryRouter(routes, { initialEntries: ['/directors'] });
  render(<RouterProvider router={router} />);
});

test('renders the Movie component on route "/movies"', () => {
  const router = createMemoryRouter(routes, { initialEntries: ['/movies'] });
  render(<RouterProvider router={router} />);
});

test('renders an error page when given a bad URL', () => {
  const router = createMemoryRouter(routes, { initialEntries: ['/bad-route'] });
  render(<RouterProvider router={router} />);
});