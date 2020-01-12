import React from "react";
import ReactDOM from "react-dom";
//import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  // Browser Router gives our application the functionality react-router-dom provides
  //<BrowserRouter>
  <App />,
  //</BrowserRouter>
  document.getElementById("root")
);
