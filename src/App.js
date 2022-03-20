import React from "react";
import "./style.css";
import New from "./New.js"
export default function App() {

  let name = 'Biswajit'
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <New name={name} / >
    </div>
  );
}
