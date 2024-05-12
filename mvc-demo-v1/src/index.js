// index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { UniversityProvider } from "./context/UniversityContext";

ReactDOM.render(
  <React.StrictMode>
    <UniversityProvider>
      <App />
    </UniversityProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
