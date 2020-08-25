import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function BreedList() {
  let [breedList, setBreedList] = useState({});

  function fetchBreeds() {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => res.json())
      .then((result) => setBreedList(result.message));
  }

  function renderList(list) {
    console.log(list);

    const listJsx = Object.entries(list).map((breed, index) => {
      let jsx;
      if (breed[1].length !== 0) {
        let subBreedList = breed[1].map((subBreed, i) => {
          const breedURL = `${breed[0]}/${subBreed}`;

          return (
            <li className="list-group-item" key={index + "." + i}>
              <Link to={`/breed/${breedURL}`}>
                {subBreed} {breed[0]}
              </Link>
            </li>
          );
        });

        jsx = (
          <li className="list-group-item" key={index}>
            <Link to={`/breed/${breed[0]}`}>{breed[0]}</Link>
            <ul className="list-group">{subBreedList}</ul>
          </li>
        );
      } else {
        jsx = (
          <li className="list-group-item" key={index}>
            <Link to={`/breed/${breed}`}>{breed}</Link>
          </li>
        );
      }

      return jsx;
    });

    console.log(listJsx);
    return listJsx;
  }

  useEffect(() => {
    // Det som står här körs en gång så fort komponenten renderas
    fetchBreeds();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {console.log(breedList)}
      <ul className="list-group ">
        {renderList(breedList)}

        {/* {Object.keys(breedList).map((breed, index) => {
          return (
            <li className="list-group-item" key={index}>
              <Link to={`/breed/${breed}`}>{breed}</Link>
            </li>
          );
        })} */}
      </ul>
    </div>
  );
}

/* 

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function BreedList() {
  let [breedList, setBreedList] = useState([]);

  const request = async (endpoint) => {
    const response = await fetch(endpoint);
    const json = await response.json();

    return json;
  };

  async function fetchBreeds() {
    const data = await request("https://dog.ceo/api/breeds/list/all");
    console.log(data);
    setBreedList(Object.entries(data.message));

     fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => res.json())
      .then((result) => {
        setBreedList(Object.entries(result.message));
      }); 
    }

    function renderList(list) {
      console.log(list);
      list.map((breed, index) => {
        console.log(index + ": " + breed); 
        console.log(index, breed[0]);
        if ((breed[1].length = !0)) {
             console.log(index + ": " + breed); 
          breed[1].map((subBreed, i) => {
            console.log(i, subBreed, breed[0]);
          });
        }
        return breed;
      });
    }
  
    useEffect(() => {
      // Det som står här körs en gång så fort komponenten renderas
      fetchBreeds().then(console.log(breedList));
      // eslint-disable-next-line
    }, []);
  
    return (
      <div>
        <ul className="list-group">
          {
             {renderList()}
         
         Object.keys(breedList)
  
            console.log(breedList)
          }
  
          {renderList(breedList)}
  
          {  {
         
          breedList.map((breed, index) => {
            return (
              <li className="list-group-item" key={index}>
                <Link to={`/breed/${breed}`}>{breed}</Link>
              </li>
            );
          })} }
        </ul>
      </div>
    );
  }
  

*/
