import {React} from "react";
function About(){
  const base = "about";
  return (
    <div className={`${base}__root`}>
      <div className={`${base}__body`}>
          <div className={`${base}__body__titleContainer`}>
            <h1 className={`${base}__body__titleContainer__title`}>Mate App</h1>
          </div>
          <div className={`${base}__body__info`}>
            <div className={`${base}__body__info__col1`}>
              <p className={`${base}__body__info__col1__mainText`}>
                Mate App, es una aplicacion que te permitira consultar de forma mas sencilla la materia de tus cursos.
                De una forma bastante accesible podras acceder a practicas, quices, lecturas y tareas, asi como podras tambien
                realizar tus evaluaciones en un ambiente especial para los cursos de matematica. Esta iniciativa fue dada por 
                el profesor XX y realizada por estudiantes del ITCR de forma que conocemos de primera mano las necesidades principales
                para poder llevar tu curso de la mejor manera.
                Mate App, es una aplicacion que te permitira consultar de forma mas sencilla la materia de tus cursos.
                De una forma bastante accesible podras acceder a practicas, quices, lecturas y tareas, asi como podras tambien
                realizar tus evaluaciones en un ambiente especial para los cursos de matematica. Esta iniciativa fue dada por 
                el profesor XX y realizada por estudiantes del ITCR de forma que conocemos de primera mano las necesidades principales
                para poder llevar tu curso de la mejor manera.
                
              </p>
            </div>
            <div className={`${base}__body__info__col2`}>
              <h2 className={`${base}__body__info__col2__subtitle`}>Dudas o consultas? Escribenos</h2>
              <p className={`${base}__body__info__col2__info`}>Escuela de Matemtica ITCR</p>
              <p className={`${base}__body__info__col2__info`}>Tel: 86263988</p>
            </div>
        </div>
      </div>
    </div>
  );
    
}

export default About;