// src/__tests__/ErrorPage.test.js

import { render } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from '../components/ErrorPage';

const routes = [
  { path: "*", element: <ErrorPage /> },
];

test('renders an error page when given a bad URL', () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ['/bad-route']
  });
  render(<RouterProvider router={router} />);
});