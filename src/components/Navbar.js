import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/"><h2>Math Magicians</h2></Link>
    <div className="links">
      <Link to="/">Home</Link>
      <Link to="/calc">Calculator</Link>
      <Link to="/quotes">Quotes</Link>
    </div>
  </nav>
);

export default Navbar;
