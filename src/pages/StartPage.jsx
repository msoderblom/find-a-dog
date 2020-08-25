import React, { useState } from "react";
import MyBtn from "../components/MyBtn";

export default function StartPage() {
  let [headline, setHeadline] = useState("Welcome to Find A Dog!");
  return (
    <div>
      <h2>{headline}</h2>
      <p>
        We hope we can help you to find the dog breed you want. Head over to the
        Breed List page to check out all the breeds.
      </p>
      <MyBtn
        setHeadline={setHeadline}
        setHeadlineTo="You just sent a function as a prop!"
        title="Click here!"
      ></MyBtn>
      <MyBtn
        setHeadline={setHeadline}
        setHeadlineTo="Welcome to Find A Dog!"
        title="Reset headline"
      ></MyBtn>
    </div>
  );
}
