// src/api/api.js

const BASE_URL = 'http://localhost:4000';

// Utility function to handle fetch requests
const fetchData = async (endpoint) => {
  const response = await fetch(`${BASE_URL}${endpoint}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

// Fetch movies
export const fetchMovies = () => {
  return fetchData('/movies');
};

// Fetch actors
export const fetchActors = () => {
  return fetchData('/actors');
};

// Fetch directors
export const fetchDirectors = () => {
  return fetchData('/directors');
};

// Example of a POST request if needed
export const addMovie = async (movie) => {
  const response = await fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(movie),
  });

  if (!response.ok) {
    throw new Error('Failed to add movie');
  }

  return response.json();
};

// Example of a DELETE request if needed
export const deleteMovie = async (id) => {
  const response = await fetch(`${BASE_URL}/movies/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Failed to delete movie');
  }
};