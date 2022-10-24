import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/" className="linkName">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="linkName">
            About
          </Link>
        </li>
        <li>
          <Link to="/calculator" className="linkName">
            Calculator
          </Link>
        </li>
        <li>
          <Link to="/pokemon" className="linkName">
            Pokemon API
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Header;
