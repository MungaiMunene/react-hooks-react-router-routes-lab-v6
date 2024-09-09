import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "../components/NavBar";

let container;

beforeEach(() => {
  // Render NavBar once before each test
  container = render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  ).container;
});

test('wraps content in a div with "navbar" class', () => {
  expect(container.querySelector(".navbar")).toBeInTheDocument();
});

test('renders a Home <Link>', () => {
  const link = screen.getByText(/Home/);
  expect(link).toBeInTheDocument();
  expect(link.tagName).toBe("A");
  expect(link).toHaveAttribute("href", "/");
});

test('renders an Actors <Link>', () => {
  const link = screen.getByText(/Actors/);
  expect(link).toBeInTheDocument();
  expect(link.tagName).toBe("A");
  expect(link).toHaveAttribute("href", "/actors");
});

test('renders a Directors <Link>', () => {
  const link = screen.getByText(/Directors/);
  expect(link).toBeInTheDocument();
  expect(link.tagName).toBe("A");
  expect(link).toHaveAttribute("href", "/directors");
});