import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./index.scss";
import ScrollToTop from "./utils/ScrollToTop";
import Home from "./views/Home/Home";
import Profile from "./views/Profile/Profile";
import Register from "./views/Register/Register";
import Login from "./views/Login/Login";
import { MainProvider } from "./context/mainContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MainProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </MainProvider>
  </React.StrictMode>
);