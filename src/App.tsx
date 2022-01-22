import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./views/About";
import Contact from "./views/Contact";
import Courses from "./views/Courses";
import Home from "./views/Home";
import SignIn from "./views/SignIn";
import Units from "./views/Profile";
import { CoursesData } from "./views/Courses/CoursesData";
import { ProfileData } from "./views/Profile/ProfileData";
import { GradesData } from "./views/Profile/GradesData";
import { EvaluationsData } from "./views/Evaluations/EvaluationsData";
import SingleCourse from "./views/SingleCourse";
import Evaluations from "./views/Evaluations";
import AddTest from "./views/AddTest";
import { QuizData } from "./views/AddTest/Quiz";
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {} /*
  let xx = document.getElementById("header")!.style.backgroundColor;
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    xx = "white";
  } else {
    xx = "gray";
  }
}*/

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />

          <Route path="/home" element={<Home />} />
          <Route path="/cursos" element={<Courses data={CoursesData} />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/sobre" element={<About />} />

          <Route path="/admin" element={<AddTest list={QuizData} />} />

          <Route
            path="/evaluacion"
            element={<Evaluations list={EvaluationsData} />}
          />

          <Route path="/cursos/mategeneral" element={<SingleCourse />} />
          <Route path="/cursos/calculo" element={<SingleCourse />} />
          <Route path="/cursos/algebra" element={<SingleCourse />} />
          <Route path="/cursos/superior" element={<SingleCourse />} />
          <Route path="/cursos/probabilidad" element={<SingleCourse />} />
          <Route path="/cursos/ecuaciones" element={<SingleCourse />} />
          <Route path="/cursos/discreta" element={<SingleCourse />} />
          <Route path="/cursos/geometria" element={<SingleCourse />} />

          <Route
            path="/perfil"
            element={<Units data={ProfileData} grades={GradesData} />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
