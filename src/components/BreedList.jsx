import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function BreedList() {
  let [breedList, setBreedList] = useState({});

  function fetchBreeds() {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => res.json())
      .then((result) => setBreedList(result.message));
  }

  useEffect(() => {
    // Det som står här körs en gång så fort komponenten renderas
    fetchBreeds();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <ul className="list-group">
        {Object.keys(breedList).map((breed, index) => {
          return (
            <li className="list-group-item" key={index}>
              <Link to={`/breed/${breed}`}>{breed}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
