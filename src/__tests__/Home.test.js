// src/__tests__/Home.test.js

import { render } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import Home from '../components/Home';
import ErrorPage from '../components/ErrorPage';

const routes = [
  { path: "/", element: <Home /> },
  { path: "*", element: <ErrorPage /> },
];

test('renders the Home component on route "/"', () => {
  const router = createMemoryRouter(routes, { initialEntries: ['/'] });
  render(<RouterProvider router={router} />);
});