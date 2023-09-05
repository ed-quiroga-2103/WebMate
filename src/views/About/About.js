import { React } from 'react';
import next from '../../assets/next.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import Message from '../../components/Message/Message';
function About() {
    const base = 'about';
    const [message, setMessage] = useState({ status: false, message: '' });
    const [loader, setLoader] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [srcImg, setSrcImg] = useState('#');
    const navigate = useNavigate();
    const [comment, setComment] = useState({
        description: '',
        idPhoto: 'as',
    });
    const inputHandler = (key, value) => {
        let temp = { ...comment };
        temp[key] = value;
        setComment(temp);
    };

    const onFileChange = (event) => {
        const fileX = event.target.files[0];
        if (fileX) {
            setSrcImg(window.URL.createObjectURL(fileX));
        }
        setSelectedFile(event.target.files[0]);
        let file = new FormData();
        file.append('file', event.target.files[0]);
        file.append('upload_preset', 'zigps2rs');
        fetch('https://api.cloudinary.com/v1_1/daidw64zz/image/upload', {
            method: 'POST',
            body: file,
        })
            .then((response) => response.json())
            .then(async (response) => {
                let temp = { ...comment };
                temp['idPhoto'] = response.url;
                setComment(temp);
            })
            .catch((err) => console.log('Error: ', err));
    };

    const submitInfo = async (event) => {
        setLoader(true);
        event.preventDefault();
        let temp = { ...comment };
        console.log(temp);

        setLoader(false);
        navigate('/about');
        window.location.reload()
    };

    return (
        <div className={`${base}__root`}>
            {loader ? <Loader /> : null}
            {message.status ? <Message message={message.message} /> : null}
            <div className={`${base}__body`}>
                <div className={`${base}__body__titleContainer`}>
                    <h1 className={`${base}__body__titleContainer__title`}>
                        Mate App
                    </h1>
                </div>
                <div className={`${base}__body__info`}>
                    <div className={`${base}__body__info__col1`}>
                        <p className={`${base}__body__info__col1__mainText`}>
                            Mate App, es una aplicacion que te permitira
                            consultar de forma mas sencilla la materia de tus
                            cursos. De una forma bastante accesible podras
                            acceder a practicas, quices, lecturas y tareas, asi
                            como podras tambien realizar tus evaluaciones en un
                            ambiente especial para los cursos de matematica.
                            Esta iniciativa fue dada por el profesor XX y
                            realizada por estudiantes del ITCR de forma que
                            conocemos de primera mano las necesidades
                            principales para poder llevar tu curso de la mejor
                            manera. Mate App, es una aplicacion que te permitira
                            consultar de forma mas sencilla la materia de tus
                            cursos. De una forma bastante accesible podras
                            acceder a practicas, quices, lecturas y tareas.
                        </p>
                    </div>
                    <div className={`${base}__body__info__col2`}>
                        <h2 className={`${base}__body__info__col2__subtitle`}>
                            Dudas o consultas? Escribenos
                        </h2>
                        <form onSubmit={(event) => submitInfo(event)} className={`${base}__body__form`}>  
                            <div className={`${base}__body__form__wrapper`}>
                                <label
                                    htmlFor="input-comment"
                                    className={`${base}__label`}
                                >
                                    Descripcion del bug
                                </label>
                                <input 
                                    className={`${base}__input`}
                                    type="text"
                                    id="input-comment"
                                    required
                                    placeholder="Escribe aqui tu observacion"
                                    onInput={(event) => {
                                        inputHandler(
                                            'description',
                                            event.target.value
                                        );
                                    }}
                                />
                            </div>

                            <div
                                className={`${base}__body__form__wrapper`}
                            >
                                <label
                                    htmlFor="input-id-photo"
                                    className={`${base}__label`}
                                >
                                    Foto
                                </label>
                                <input
                                    className={`${base}__input--file`}
                                    type="file"
                                    id="input-id-photo"
                                    accept="image/*"
                                    required
                                    capture
                                    onChange={(event) => onFileChange(event)}
                                />
                            </div>
                            {selectedFile ? (
                                <div className={`${base}__preview`}>
                                    <img
                                        className={`${base}__preview__img`}
                                        src={srcImg}
                                        alt="Your upload"
                                    />
                                </div>
                            ) : null}

                            <div className={`${base}__btn-container`}>
                                <button
                                    type="submit"
                                    className={`${base}__btn-container__btn`}
                                >
                                    Enviar
                                    <img
                                        className={`${base}__btn-container__img`}
                                        src={next}
                                        alt="Submit Information"
                                    />
                                </button>
                            </div>
                        </form>
                        <p className={`${base}__body__info__col2__info`}>
                            Escuela de Matemtica ITCR
                        </p>
                        <p className={`${base}__body__info__col2__info`}>
                            Tel: 86263988
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
