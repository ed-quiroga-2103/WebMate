import React, { useEffect, useState } from 'react';
import profilePic from '../../assets/blank-user.png';
// import courses from '../../assets/cursos.json'; //QUIROGA: cursos con notas, info de base de datos
import currentUser from '../../assets/currentUser.json'; //QUIROGA: usuario, info de base de datos
import plus from '../../assets/add.png';
import minus from '../../assets/minus.png';
import auth from '../../api/auth';
function Profile() {
    const base = 'profile';
    //const currentUser = JSON.parse(window.localStorage.getItem("user"));
    //Id photo {currentUser.idPhoto.substring(61)}

    const [me, setMe] = useState(undefined);
    const [user, setUser] = useState(undefined);

    const [grades, setGrades] = useState({});
    const [courses, setCourses] = useState({});

    const sortCourses = (grades) => {
        const filteredCourses = {};

        grades.forEach((grade) => {
            const course = grade.quiz.course;

            if (filteredCourses[course.id]) {
                if (
                    course.name.length > filteredCourses[course.id].name.length
                ) {
                    filteredCourses[course.id].name = course.name;
                }

                filteredCourses[course.id].grades.push({
                    percentage: grade.percentage.toFixed(2),
                    subject: grade.quiz.subject
                        ? grade.quiz.subject.name
                        : 'Diagnostico de curso',
                    date: new Date(grade.date).toLocaleString(),
                });
            } else {
                filteredCourses[course.id] = {
                    ...course,
                    grades: [
                        {
                            percentage: grade.percentage.toFixed(2),
                            subject: grade.quiz.subject
                                ? grade.quiz.subject.name
                                : 'Diagnostico de curso',
                            date: new Date(grade.date).toLocaleString(),
                        },
                    ],
                };
            }

            // if(filteredCourses[grade.])
        });

        setCourses(filteredCourses);
        return filteredCourses;
    };

    useEffect(() => {
        const fetchMe = async () => {
            const meResponse = await auth.me();
            setMe(meResponse);
            setUser(meResponse.user);
            sortCourses(meResponse.user.grades);
        };
        fetchMe();
    }, []);

    const showInfo = (event) => {
        event.stopPropagation();
        event.preventDefault();
        let temp = event.target.nextElementSibling;
        if (temp.style.display === 'block') {
            temp.style.display = 'none';
            event.target.children[1].children[1].src = plus;
        } else {
            if (temp.className === 'profile__courses__wrapper__container') {
                temp.style.display = 'block';
                event.target.children[1].children[1].src = minus;
            }
        }
    };
    return (
        <main className={`${base}__root`}>
            <div className={`${base}__wrapper`}>
                {me ? (
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
                                    {user.name} {user.lastName}
                                </h1>
                                <p className={`${base}__info__name__id`}>
                                    Carnet: {user.dni}
                                </p>
                            </div>
                            <div className={`${base}__info__other`}>
                                <h2 className={`${base}__info__other__title`}>
                                    Tu información
                                </h2>
                                <div
                                    className={`${base}__info__other__container`}
                                >
                                    <p
                                        className={`${base}__info__other__container__email`}
                                    >
                                        Email: {user.email}
                                    </p>
                                </div>
                                <div
                                    className={`${base}__info__other__container`}
                                >
                                    <p
                                        className={`${base}__info__other__container__email`}
                                    >
                                        Carrera: {currentUser.career}
                                    </p>
                                </div>
                                <div
                                    className={`${base}__info__other__container`}
                                >
                                    <p
                                        className={`${base}__info__other__container__email`}
                                    >
                                        Cantidad de evaluaciones:{' '}
                                        {user.evaluationQty}
                                    </p>
                                    <p
                                        className={`${base}__info__other__container__email`}
                                    >
                                        Promedio de evaluaciones:{' '}
                                        {user.averageGrade.toFixed(2)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null}
                {me ? (
                    <div className={`${base}__courses`}>
                        <h1 className={`${base}__courses__title`}>
                            Tus cursos
                        </h1>
                        <div className={`${base}__courses__wrapper`}>
                            {Object.entries(courses).map(
                                ([courseId, course], i) => {
                                    return (
                                        <>
                                            <div
                                                key={i}
                                                className={`${base}__courses__wrapper__course`}
                                                onClick={(event) => {
                                                    showInfo(event);
                                                }}
                                            >
                                                <p
                                                    className={`${base}__courses__wrapper__course__field`}
                                                >
                                                    {course.name}
                                                </p>
                                                <div
                                                    className={`${base}__courses__wrapper__course__container`}
                                                >
                                                    <p
                                                        className={`${base}__courses__wrapper__course__field`}
                                                    >
                                                        {course.grade}
                                                    </p>
                                                    <img
                                                        src={plus}
                                                        className={`${base}__courses__wrapper__course__img`}
                                                        alt="Toggle field visibility"
                                                    />
                                                </div>
                                            </div>

                                            <div
                                                className={`${base}__courses__wrapper__container`}
                                            >
                                                {course.grades.map(
                                                    (field, j) => {
                                                        return (
                                                            <>
                                                                <div
                                                                    className={`${base}__courses__wrapper__field`}
                                                                >
                                                                    <p
                                                                        className={`${base}__courses__wrapper__field__field`}
                                                                    >
                                                                        {
                                                                            field.subject
                                                                        }
                                                                    </p>
                                                                    <p
                                                                        className={`${base}__courses__wrapper__field__field`}
                                                                    >
                                                                        {
                                                                            field.percentage
                                                                        }{' '}
                                                                    </p>
                                                                </div>
                                                                <div
                                                                    className={`${base}__courses__wrapper__info`}
                                                                >
                                                                    <p
                                                                        className={`${base}__courses__wrapper__info__field`}
                                                                    >
                                                                        Estado:
                                                                        {field.percentage >
                                                                        70
                                                                            ? ' Aprobado'
                                                                            : ' Reprobado'}
                                                                    </p>
                                                                    <p
                                                                        className={`${base}__courses__wrapper__info__field`}
                                                                    >
                                                                        Fecha:{' '}
                                                                        {
                                                                            field.date
                                                                        }
                                                                    </p>
                                                                </div>
                                                            </>
                                                        );
                                                    }
                                                )}
                                            </div>
                                        </>
                                    );
                                }
                            )}
                        </div>
                    </div>
                ) : null}
            </div>
        </main>
    );
}

export default Profile;
