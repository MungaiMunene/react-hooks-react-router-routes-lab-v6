import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar"; // Adjust path if needed

function Movie() {
  const { id } = useParams(); // Assuming you use an 'id' parameter in your route
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Fetch movie details based on the id parameter
    const fetchMovie = async () => {
      try {
        const response = await fetch(`/api/movies/${id}`);
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };

    fetchMovie();
  }, [id]);

  return (
    <>
      <header>
        <NavBar /> {/* Include NavBar for navigation */}
      </header>
      <main>
        {movie ? (
          <div>
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            {/* Add more movie details here */}
          </div>
        ) : (
          <p>Loading movie details...</p>
        )}
      </main>
    </>
  );
}

export default Movie;