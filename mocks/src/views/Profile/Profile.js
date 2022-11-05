import edit from "../../assets/pencil.png";
import profilePic from "../../assets/profile.jpg"
import cursos from "../../assets/cursos.json"
function Profile() {
    const base = "profile";
    //const currentUser = JSON.parse(window.localStorage.getItem("user"));
    //Id photo {currentUser.idPhoto.substring(61)}
    const currentUser = {
        "idPhoto": profilePic.jpg,
        "fullName": "Josue Araya G.",
        "email": "guitarruner@estudiantec.ac.cr",
        "carnet": "2017103205",
        "carrer": "Ingeniería en Computadores",
        "currenCourse": "Matemática Discreta"

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
                            <p className={`${base}__info__name__id`}>
                                ID Foto: 11
                            </p>
                        </div>
                        <div className={`${base}__info__other`}>
                            <h2 className={`${base}__info__other__title`}>
                                Tu información
                                <img
                                    src={edit}
                                    className={`${base}__info__other__container__edit`}
                                    alt="edit"
                                />
                            </h2>
                            <div className={`${base}__info__other__container`}>
                                <p className={`${base}__info__other__container__email`}>
                                    Email: {currentUser.email}
                                </p>
                            </div>
                            <div className={`${base}__info__other__container`}>
                                <p className={`${base}__info__other__container__email`}>
                                    Carrera: {currentUser.carrer}
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
                    <h1 className={`${base}__info__name__fullName`}>
                        Tus cursos
                    </h1>
                    <div className={`${base}__courses__wrapper`}>
                        {cursos.map((course, i) => {
                            return (<>
                                <div key={i} className={`${base}__courses__wrapper__course`}>
                                    <p className={`${base}__courses__wrapper__course__field`} >{course.name}</p>
                                    <p className={`${base}__courses__wrapper__course__field`} >{course.grade}</p>
                                </div>
                                <>
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
                                </>
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