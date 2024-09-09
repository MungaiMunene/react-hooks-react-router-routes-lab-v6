import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar"; // Updated import path

const Directors = () => {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    // Fetch director data from an API or some data source
    fetch('/api/directors') // Replace with your API endpoint
      .then(response => response.json())
      .then(data => setDirectors(data))
      .catch(error => console.error('Error fetching directors:', error));
  }, []);

  return (
    <>
      <header>
        <NavBar /> {/* Render the NavBar component */}
        <h1>Directors</h1> {/* Page title */}
      </header>
      <main>
        <ul>
          {directors.length > 0 ? (
            directors.map(director => (
              <li key={director.id}>
                <h2>{director.name}</h2>
                <p>{director.bio}</p>
                <Link to={`/directors/${director.id}`}>More Details</Link> {/* Link to director details */}
              </li>
            ))
          ) : (
            <p>No directors available.</p>
          )}
        </ul>
      </main>
    </>
  );
};

export default Directors;