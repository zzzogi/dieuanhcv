import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./i18n";
import { profileConfig } from "./profile";

// Role pages carry their own browser-tab title
if (profileConfig.title) {
  document.title = profileConfig.title;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
