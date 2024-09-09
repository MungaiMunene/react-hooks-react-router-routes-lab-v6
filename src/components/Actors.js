import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar"; // Updated import path

const Actors = () => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    // Fetch actor data from an API or some data source
    fetch('/api/actors') // Replace with your API endpoint
      .then(response => response.json())
      .then(data => setActors(data))
      .catch(error => console.error('Error fetching actors:', error));
  }, []);

  return (
    <>
      <header>
        <NavBar /> {/* Render the NavBar component */}
        <h1>Actors</h1> {/* Page title */}
      </header>
      <main>
        <ul>
          {actors.length > 0 ? (
            actors.map(actor => (
              <li key={actor.id}>
                <h2>{actor.name}</h2>
                <p>{actor.bio}</p>
                <Link to={`/actors/${actor.id}`}>More Details</Link> {/* Link to actor details */}
              </li>
            ))
          ) : (
            <p>No actors available.</p>
          )}
        </ul>
      </main>
    </>
  );
};

export default Actors;