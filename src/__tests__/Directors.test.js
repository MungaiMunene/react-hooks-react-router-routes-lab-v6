// src/__tests__/Directors.test.js

import { render } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import Directors from '../components/Directors';
import ErrorPage from '../components/ErrorPage';

const routes = [
  { path: "/directors", element: <Directors /> },
  { path: "*", element: <ErrorPage /> },
];

test('renders the Directors component on route "/directors"', () => {
  const router = createMemoryRouter(routes, { initialEntries: ['/directors'] });
  render(<RouterProvider router={router} />);
});