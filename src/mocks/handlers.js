// src/mocks/handlers.js
import { rest } from 'msw';

export const handlers = [
  rest.get('/api/movies', (req, res, ctx) => {
    return res(ctx.json({ /* mock movie data */ }));
  }),
  rest.get('/api/actors', (req, res, ctx) => {
    return res(ctx.json({ /* mock actor data */ }));
  }),
  rest.get('/api/directors', (req, res, ctx) => {
    return res(ctx.json({ /* mock director data */ }));
  }),
];

// src/setupTests.js
import { server } from './mocks/server';
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());