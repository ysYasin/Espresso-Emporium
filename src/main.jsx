import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UpdateCofee from "./Components/UpdateCoffee/UpdateCofee.jsx";
import AddCoffee from "./Components/AddCoffee/AddCoffee.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "add-coffee",
    element: <AddCoffee />,
  },
  {
    path: "update-coffee/:id",
    element: <UpdateCofee />,
    loader: ({ params }) => fetch(`http://localhost:5300/coffee/${params.id}`),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
