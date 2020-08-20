import React from "react";
import { Link } from "react-router-dom";

export default function MainHeader() {
  return (
    <header>
      <h1>Find A Dog</h1>
      <nav>
        <ul>
          <li className="">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/breed-list">Breed List</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
