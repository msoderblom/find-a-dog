import React from "react";
import MainHeader from "./MainHeader";

export default function LayoutSimple({ children }) {
  return (
    <div>
      <MainHeader></MainHeader>
      {children}
    </div>
  );
}
