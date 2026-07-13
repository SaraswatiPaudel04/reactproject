import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>My Website</h2>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <button>Login</button>
    </nav>
  );
}

export default Navbar;