import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Lista from "./Lista";
import Lista2 from "./Lista2";
import Lista3 from "./Lista3";
import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <Lista />
    <Lista2 />
    <Lista3 />
  </StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
