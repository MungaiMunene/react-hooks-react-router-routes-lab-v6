import NavBar from "./NavBar";

function Home() {
  return (
    <>
      <header>
        <NavBar /> {/* Include NavBar for navigation */}
      </header>
      <main>
        <h1>Welcome to the Movie App</h1>
        <p>Explore information about movies, actors, and directors.</p>
      </main>
    </>
  );
}

export default Home;