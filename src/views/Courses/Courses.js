import React from "react";
import { useNavigate } from "react-router-dom";
import courses from "../../assets/courses.json"; //QUIROGA: cursos, info de base de datos
function Courses(){
  const base = "courses";
  const navigate = useNavigate();
  const goTo = (event,course) => {
    event.stopPropagation();
    navigate("/course");
  };
  return (
    <main className={`${base}__root`}>
      <div className={`${base}__wrapper`}>
        <h1 className={`${base}__wrapper__title`}>Tus Cursos</h1>
        <div className={`${base}__wrapper__container`}>
            {courses.map((course,index) => {
              return (
                <div onClick={(event)=>goTo(event,course.name)} className={`${base}__card`} key={index}>
                    <h2 className={`${base}__card__name`}>{course.name} </h2>
                      <div className={`${base}__card__container`}>
                          <p className={`${base}__card__container__tag`}>Código: {course.code}</p>
                      </div>
                </div>
              );
          })}
          </div>
      </div>
    </main>
    );
    
}

export default Courses;