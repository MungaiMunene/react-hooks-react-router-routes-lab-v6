import { Link } from "react-router-dom";

const NavBar = () => (
  <nav className="navbar">  {/* Added className="navbar" */}
    <Link to="/">Home</Link>
    <Link to="/actors">Actors</Link>
    <Link to="/directors">Directors</Link>
  </nav>
);

export default NavBar;