import React from "react";

export default function MyBtn({ setHeadline, title, setHeadlineTo }) {
  function handleOnClick() {
    setHeadline(setHeadlineTo);
  }
  return (
    <button className="btn btn-primary mr-1" onClick={handleOnClick}>
      {title}
    </button>
  );
}
