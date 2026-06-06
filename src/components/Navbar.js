import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <div className="navbar">

      <div className="logo">
        <Link to="/">FashionStore</Link>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">
          Cart ({cartCount})
        </Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/apicalling">Api Calling</Link>
        <Link to="/about">About Us</Link>
      </div>

      <input
        type="text"
        placeholder="Search Products..."
        className="search"
      />

    </div>
  );
}

export default Navbar;