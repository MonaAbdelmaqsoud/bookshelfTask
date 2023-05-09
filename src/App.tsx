import "./App.css";
import SearchPage from "./Pages/Search";
import HomePage from "./Pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";

function App() {

  

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <HomePage />
      ),
    },
    {
      path: "/search",
      element: (
        <SearchPage />
      ),
    },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
