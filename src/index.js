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
import QuestionsTest from './views/QuestionsTest/QuestionsTest';
import { Provider } from 'react-redux';
import store from './redux/store';
import Admin from './views/Admin/Admin';
import Record from './views/Record/Record';
import Students from './views/Students/Students';
import QuizMaker from './views/QuizMaker/QuizMaker';
import Navbar from './components/Navbar/Navbar';
import axios from 'axios';
import QuestionAdmin from './views/QuestionAdmin/QuestionAdmin';
import QuestionEditor from './components/QuestionEditor/QuestionEditor';

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
        <Provider store={store}>
            <MainProvider>
                <BrowserRouter>
                    <ScrollToTop />
                    <Navbar />
                    <Routes>
                        {/* <Route path="/" element={<Home />} /> */}
                        <Route path="/register" element={<Register />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/courses" element={<Courses />} />
                        <Route path="/course" element={<GraphView />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/" element={<Landing />} />
                        <Route path="/quiz" element={<Quiz />} />
                        <Route path="/quizLatex" element={<QuizLatex />} />
                        <Route
                            path="/questionsTest"
                            element={<QuestionsTest />}
                        />
                        <Route path="/graph" element={<GraphView />} />
                        <Route path="/admin" element={<Admin />} />
                        <Route
                            path="/admin/questions"
                            element={<QuestionAdmin />}
                        />

                        <Route path="/admin/students" element={<Students />} />

                        <Route path="/record" element={<Record />} />
                        <Route path="/quizMaker" element={<QuizMaker />} />
                        <Route
                            path="/questionEditor"
                            element={<QuestionEditor />}
                        />

                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </BrowserRouter>
            </MainProvider>
        </Provider>
    </React.StrictMode>
);
