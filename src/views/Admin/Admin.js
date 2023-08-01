import React from "react";
import { useNavigate } from "react-router-dom";
function Admin(){
  const base = "admin";
  const navigate = useNavigate();
  const goTo = (event,where) => {
    event.stopPropagation();
    navigate(`/${where}`);
  };
  return (
    <main className={`${base}__root`}>
      <div className={`${base}__wrapper`}>
        <h1 className={`${base}__wrapper__title`}>Administrador</h1>
        <div className={`${base}__wrapper__container`}>
            
                <div onClick={(event)=>goTo(event,"quizMaker")} className={`${base}__card`} >
                    <h2 className={`${base}__card__name`}>Quiz Maker </h2>
                </div>
                <div onClick={(event)=>goTo(event,"record")} className={`${base}__card`}>
                    <h2 className={`${base}__card__name`}>Registro de Notas </h2>
                </div>
                <div onClick={(event)=>goTo(event,"")} className={`${base}__card`} >
                    <h2 className={`${base}__card__name`}>Cerrar Sesion </h2>
                </div>
              
          </div>
      </div>
    </main>
    );
    
}

export default Admin;