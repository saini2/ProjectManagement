import "react-app-polyfill/ie9";
import "./blobPolyfill";
// Polyfill For URL
import "./urlPolyfill";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./Project/components/App";

ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  document.getElementById("root")
);

