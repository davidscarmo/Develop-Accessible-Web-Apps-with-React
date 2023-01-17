import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const config = {
  rules: [
    {
      id: 'radiogroup',
      enabled: true, // you can disable it by setting it to false
    }
  ]
}
if (process.env.NODE_ENV !== "production") {
  // eslint-disable-next-line
  const axe = require("@axe-core/react");
  axe(React, ReactDOM, 1000, config);
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
