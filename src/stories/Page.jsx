import React from "react";
import "./page.css";

export const Page = ({ name }) => {
  return (
    <div className="background">
      <h1>Welcome to Uikit! {name}</h1>
    </div>
  );
};
