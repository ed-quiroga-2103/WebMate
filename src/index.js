import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./index.scss";
import ScrollToTop from "./utils/ScrollToTop";
import Home from "./views/Home/Home";
import Profile from "./views/Profile/Profile";
import Register from "./views/Register/Register";
import Login from "./views/Login/Login";
import Courses from "./views/Courses/Courses";
import Course from "./views/Course/Course";
import About from "./views/About/About";
import Landing from "./views/Landing/Landing";
import Quiz from "./views/Quiz/Quiz";
import Admin from "./views/Admin/Admin";
import Record from "./views/Record/Record";
import QuizMaker from "./views/QuizMaker/QuizMaker";

import { MainProvider } from "./context/mainContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MainProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/record" element={<Record />} />
        <Route path="/quizMaker" element={<QuizMaker />} />
          <Route path="/" element={<App />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/course" element={<Course />} />
            <Route path="/about" element={<About />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/quiz" element={<Quiz />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </MainProvider>
  </React.StrictMode>
);