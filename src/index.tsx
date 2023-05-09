import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import BookContextProvider from "./store/book-context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BookContextProvider>
    <App />
  </BookContextProvider>
);
