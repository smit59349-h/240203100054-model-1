import { Link } from "react-router-dom";
import './App.css';

function Header(props) {
  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo">
          <span className="header-title">React Demo</span>
        </Link>

        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/signup" className="cta">
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;