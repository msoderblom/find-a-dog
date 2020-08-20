import React, { useEffect, useState } from "react";
import BreedImages from "../components/BreedImages";

export default function BreedImagesPage(props) {
  let [imageList, setImageList] = useState([]);

  const breed = props.match.params.breed;
  function fetchImages() {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random/5`)
      .then((res) => res.json())
      .then((result) => setImageList(result.message));
  }

  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <h2>{breed}</h2>
      <BreedImages imageLinks={imageList}></BreedImages>
    </div>
  );
}
