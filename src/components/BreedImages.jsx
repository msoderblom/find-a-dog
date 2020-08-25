import React from "react";

export default function BreedImages({ imageLinks }) {
  return (
    <div className="gallery">
      {console.log(imageLinks)}
      {imageLinks.map((image, index) => {
        return (
          <div key={index} className="img-wrapper">
            <img src={image} alt="" />
          </div>
        );
      })}
    </div>
  );
}
