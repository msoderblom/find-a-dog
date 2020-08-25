import React, { useEffect, useState } from "react";
import BreedImages from "../components/BreedImages";

export default function BreedImagesPage(props) {
  let [imageList, setImageList] = useState([]);

  const breed = props.match.params.breed;
  const subBreed = props.match.params.subBreed;
  console.log(breed);
  console.log(subBreed);
  function fetchImages() {
    /*  https://dog.ceo/api/breed/bulldog/boston/images/random/5 */
    /* 
    Jag kan ha breedName= Boston Bulldog
    och breedURL = bulldog/boston
    */

    let endpoint = `https://dog.ceo/api/breed/${breed}/images/random/5`;
    if (subBreed) {
      console.log("subbreed hittades/ inne från if");
      endpoint = `https://dog.ceo/api/breed/${breed}/${subBreed}/images/random/5`;
    }

    console.log(endpoint);
    fetch(endpoint)
      .then((res) => res.json())
      .then((result) => setImageList(result.message));
  }

  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      {console.log(imageList)}
      <h2 style={headingStyle}>
        {subBreed} {breed}
      </h2>
      <BreedImages imageLinks={imageList}></BreedImages>
    </div>
  );
}

const headingStyle = {
  textTransform: "capitalize",
};
