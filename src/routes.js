// src/routes.js

import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Actors from "./components/Actors";
import Directors from "./components/Directors";
import Movie from "./components/Movie";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/actors",
    element: <Actors />,
  },
  {
    path: "/directors",
    element: <Directors />,
  },
  {
    path: "/movies",
    element: <Movie />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;