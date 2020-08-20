import React from "react";

export default function BreedImages({ imageLinks }) {
  return (
    <div>
      {imageLinks.map((image, index) => {
        return <img key={index} src={image} alt="" />;
      })}
    </div>
  );
}
