import React from "react";
import { Link } from "react-router-dom";

export default function MainHeader() {
  return (
    <header className="">
      <h1>Find A Dog</h1>
      <nav className="sticky-top">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/breed-list">
              Breed List
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
