import React from "react";
import profilePic from "../../assets/profile.jpg";
import courses from "../../assets/cursos.json"; //QUIROGA: cursos con notas, info de base de datos
import currentUser from "../../assets/currentUser.json"; //QUIROGA: usuario, info de base de datos
import plus from "../../assets/add.png";
import minus from "../../assets/minus.png";
function Profile() {
    const base = "profile";
    //const currentUser = JSON.parse(window.localStorage.getItem("user"));
    //Id photo {currentUser.idPhoto.substring(61)}

    const showInfo = (event) => {
        
        event.stopPropagation();
        event.preventDefault();
        let temp = event.target.nextElementSibling;
        if (temp.style.display === "block") { 
            temp.style.display = "none";
            event.target.children[1].children[1].src = plus;
        }
        else {
            if(temp.className==="profile__courses__wrapper__container"){

                temp.style.display = "block";
                event.target.children[1].children[1].src = minus;
            }
        }
    }
    return (
        <main className={`${base}__root`}>
            <div className={`${base}__wrapper`}>
                <div className={`${base}__info`}>
                    <div className={`${base}__image`}>
                        <div className={`${base}__image__container`}>
                            <img
                                alt="profile"
                                src={profilePic}
                                className={`${base}__image__container__img`}
                            />
                        </div>
                    </div>
                    <div className={`${base}__info__wrapper`}>
                        <div className={`${base}__info__name`}>
                            <h1 className={`${base}__info__name__fullName`}>
                                {currentUser.fullName}
                            </h1>
                            <p className={`${base}__info__name__id`}>Carnet:  {currentUser.carnet}</p>
                        </div>
                        <div className={`${base}__info__other`}>
                            <h2 className={`${base}__info__other__title`}>
                                Tu información
                                
                            </h2>
                            <div className={`${base}__info__other__container`}>
                                <p className={`${base}__info__other__container__email`}>
                                    Email: {currentUser.email}
                                </p>
                            </div>
                            <div className={`${base}__info__other__container`}>
                                <p className={`${base}__info__other__container__email`}>
                                    Carrera: {currentUser.career}
                                </p>
                            </div>
                            <div className={`${base}__info__other__container`}>
                                <p className={`${base}__info__other__container__email`}>
                                    Curso Actual: {currentUser.currenCourse}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${base}__courses`}>
                    <h1 className={`${base}__courses__title`}>
                        Tus cursos
                    </h1>
                    <div className={`${base}__courses__wrapper`}>
                        {courses.map((course, i) => {
                            return (<>
                                <div key={i} className={`${base}__courses__wrapper__course`} onClick={event => { showInfo(event) }}>
                                    <p className={`${base}__courses__wrapper__course__field`} >{course.name}</p>
                                    <div className={`${base}__courses__wrapper__course__container`}>
                                        <p className={`${base}__courses__wrapper__course__field`} >{course.grade}</p>
                                        <img
                                            src={plus}
                                            className={`${base}__courses__wrapper__course__img`}
                                            alt="Toggle field visibility"
                                        />
                                    </div>

                                </div>

                                <div className={`${base}__courses__wrapper__container`} >
                                    {course.fields.map((field, j) => {
                                        return (
                                            <>
                                                <div className={`${base}__courses__wrapper__field`}>
                                                    <p className={`${base}__courses__wrapper__field__field`}>{field.name}</p>
                                                    <p className={`${base}__courses__wrapper__field__field`}>{field.grade} {`(${field.value})`}</p>
                                                </div>
                                                <div className={`${base}__courses__wrapper__info`}>
                                                    <p className={`${base}__courses__wrapper__info__field`}>Estado: {field.status}</p>
                                                    <p className={`${base}__courses__wrapper__info__field`}>Fecha: {field.date}</p>
                                                </div>
                                            </>
                                        )
                                    })}
                                </div>
                            </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Profile;