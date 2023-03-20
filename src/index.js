import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './index.scss';
import ScrollToTop from './utils/ScrollToTop';
import Home from './views/Home/Home';
import Profile from './views/Profile/Profile';
import Register from './views/Register/Register';
import Login from './views/Login/Login';
import Courses from './views/Courses/Courses';
import About from './views/About/About';
import Landing from './views/Landing/Landing';
import Quiz from './views/Quiz/Quiz';
import { MainProvider } from './context/mainContext';
import { GraphView } from './views/Graph';
import { QuizLatex } from './views/QuizLatex/QuizLatex';

import Navbar from './components/Navbar/Navbar';
import axios from 'axios';

axios.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        if (error.response.status === 403) {
            window.location.replace('/login');
        }

        return Promise.reject(error);
    }
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <MainProvider>
            <BrowserRouter>
                <ScrollToTop />
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/course" element={<GraphView />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/landing" element={<Landing />} />
                    <Route path="/quiz" element={<Quiz />} />
                    <Route path="/quizLatex" element={<QuizLatex />} />
                    <Route path="/graph" element={<GraphView />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </BrowserRouter>
        </MainProvider>
    </React.StrictMode>
);
