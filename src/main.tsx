import "./styles/index.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import App from "./Pages/AppPage.tsx";
import Dashboard from "./Pages/DashboardPage.tsx";
import Login from "./Pages/LoginPage.tsx";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
