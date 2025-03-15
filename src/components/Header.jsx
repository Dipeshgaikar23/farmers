import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="d-flex justify-content-between align-items-center p-3 shadow fixed-top"
      style={{ backgroundColor: "#0E9900" }}>
      
      <div className="d-flex align-items-center">
        <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current text-white">
          <circle cx="20" cy="20" r="18" />
          <path d="M20 5 L20 35 M5 20 L35 20" stroke="white" strokeWidth="3" />
          <path d="M12 12 A 10 10 0 0 1 28 12" stroke="white" fill="transparent" strokeWidth="2" />
          <path d="M12 28 A 10 10 0 0 0 28 28" stroke="white" fill="transparent" strokeWidth="2" />
        </svg>
        <h1 className="ms-2 text-white">HarvestTrace</h1>
      </div>

      <nav>
        <ul className="nav">
          <li className="nav-item"><Link to="/" className="nav-link text-white">Home</Link></li>
          <li className="nav-item"><a href="#how-it-works" className="nav-link text-white">How It Works</a></li>
          <li className="nav-item"><a href="#farmers" className="nav-link text-white">For Farmers</a></li>
          <li className="nav-item"><a href="#consumers" className="nav-link text-white">For Consumers</a></li>
          <li className="nav-item"><a href="#about" className="nav-link text-white">About Us</a></li>
          <li className="nav-item"><Link to="/marketplace" className="nav-link text-white">Marketplace</Link></li>
        </ul>
      </nav>

      <div>
        <Link to="/login" className="btn btn-outline-light rounded-pill me-2">Log In</Link>
        <Link to="/register" className="btn btn-light text-dark rounded-pill">Sign Up</Link> 
      </div>
    </header>
  );
};

export default Header;
