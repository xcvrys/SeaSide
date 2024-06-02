import "./styles/index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./Pages/AppPage.tsx";
import Dashboard from "./Pages/DashboardPage.tsx";
import Login from "./Pages/LoginPage.tsx";
import React from "react";
import ReactDOM from "react-dom/client";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
