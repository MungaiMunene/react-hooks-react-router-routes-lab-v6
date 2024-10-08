// src/__tests__/Actors.test.js

import { render } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import Actors from '../components/Actors';
import ErrorPage from '../components/ErrorPage';

const routes = [
  { path: "/actors", element: <Actors /> },
  { path: "*", element: <ErrorPage /> },
];

test('renders the Actors component on route "/actors"', () => {
  const router = createMemoryRouter(routes, { initialEntries: ['/actors'] });
  render(<RouterProvider router={router} />);
});