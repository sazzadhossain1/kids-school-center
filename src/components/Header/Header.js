import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/classes">Classes</Link>
      <Link to="/teachers">Teachers</Link>
      <Link to="/blog">Blog</Link>
    </nav>
  );
};

export default Header;
