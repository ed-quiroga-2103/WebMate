import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import About from './views/About';
import Contact from './views/Contact';
import Courses from './views/Courses';
import Evaluations from './views/Evaluations';
import Home from './views/Home';
import SignIn from './views/SignIn';
import SingleCourse from './views/SingleCourse';
import Units from './views/Profile';

import { EvaluationsData } from './views/Evaluations/EvaluationsData';
import { GradesData } from './views/Profile/GradesData';
import { GraphView } from './views/Graph';
import { ProfileData } from './views/Profile/ProfileData';
import { Questions } from './views/Questions/';
import { QuizView } from './views/Quiz';
import { Test } from './views/AddCourse';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route
                        path="/courses/:id"
                        element={<GraphView threeD={true} />}
                    />
                    <Route
                        path="/evaluation"
                        element={<Evaluations list={EvaluationsData} />}
                    />
                    <Route path="/quiz/:id" element={<QuizView />} />
                    <Route
                        path="/profile"
                        element={
                            <Units data={ProfileData} grades={GradesData} />
                        }
                    />
                    {/* ADMIN */}
                    <Route path="/adminQuestions" element={<Questions />} />
                    <Route path="/adminCourses" element={<Test />} />
                    {/* COURSES */}
                    <Route
                        path="/courses/mategeneral"
                        element={<SingleCourse />}
                    />
                    <Route path="/courses/calculo" element={<SingleCourse />} />
                    <Route path="/courses/algebra" element={<SingleCourse />} />
                    <Route
                        path="/courses/superior"
                        element={<SingleCourse />}
                    />
                    <Route
                        path="/courses/probabilidad"
                        element={<SingleCourse />}
                    />
                    <Route
                        path="/courses/ecuaciones"
                        element={<SingleCourse />}
                    />
                    <Route
                        path="/courses/discreta"
                        element={<SingleCourse />}
                    />
                    <Route
                        path="/courses/geometria"
                        element={<SingleCourse />}
                    />
                </Routes>
            </Router>
        </>
    );
}

export default App;
