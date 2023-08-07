import React from 'react';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message/Message";
import back from '../../assets/back.png';
function QuizMaker() {
    const base = 'quizMaker';
    const refQuestion = useRef();
    const refAnswer = useRef();
    const [textAnswer, setTextAnswer] = useState(true);
    const [textQuestion, setTextQuestion] = useState(true);
    const [selectedFile, setSelectedFile] = useState(null);
    const [srcImg, setSrcImg] = useState('#');
    const [questionCount, setquestionCount] = useState(1);
    const [optionCount, setOptionCount] = useState(1);

    const [message, setMessage] = useState({ status: false, message: "" });
    const [loader, setLoader] = useState(false);

    const [data, setData] = useState({
        name: '',
        cheatsheet: [],
        totalPoints: '',
        questions: [],
    });
    const [question, setQuestion] = useState({
        question: '',
        value: '',
        option1: '',
        option2: '',
    });
    const navigate = useNavigate();
    const goTo = (event) => {
        event.stopPropagation();
        navigate(`/admin`);
    };

    const setExam = (key, value) => {
        let temp = { ...data };
        temp[key] = value;
        setData(temp);
    };

    const setQuestioInfo = (key, value) => {
        let temp = { ...data };
        temp[key] = value;
        setQuestion(temp);
    };

    const setOption = (key, value) => {
        let temp = { ...question };
        temp[`${key}${optionCount}`] = value;
        setQuestion(temp);
    };

    const sendOption = (event) => {
        event.preventDefault();
        let temp = optionCount + 1;
        if (refQuestion !== '') refQuestion.current.value = '';
        console.log(question);
        setOptionCount(temp);
    };

    const sendQuestion = (event) => {
        event.preventDefault();
        let temp = { ...data };
        temp['questions'].push(question);
        console.log(data);
        setData(temp);
        setquestionCount(questionCount + 1);
    };

    const changeFormat = (event, type) => {
        event.preventDefault();
        if (type === 'a') {
            if (textAnswer === true) setTextAnswer(false);
            else setTextAnswer(true);
        }
        if (type === 'q') {
            if (textQuestion === true) setTextQuestion(false);
            else setTextQuestion(true);
        }
    };

    const onFileChange = (event, type) => {
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
                if (type === 'a') setOption('option', response.url);
                if (type === 'q') setQuestioInfo('question', response.url);
            })
            .catch((err) => console.log('Error: ', err));
    };

    const submitExam = async (event) => {
        setLoader(true);
        event.preventDefault();
        let temp = { ...data };

            fetch('url', {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify(temp),
            })
                .then((res) => res.json())
                .then((res) => {
                    if (res.message === 'Succesful!') {
                        setMessage({ status: true, message: 'Succesful' });
                        setTimeout(() => {
                            navigate('/admin');
                        }, 1500);
                    } else {
                        setMessage({ status: true, message: res.message });
                        setTimeout(() => {
                            setMessage({ status: false, message: '' });
                            setLoader(false);
                            navigate('/quizMaker');
                        }, 1500);
                    }
                })
                .catch((res) => {
                    setMessage({ status: true, message: res.message });
                    setTimeout(() => {
                        setMessage({ status: false, message: '' });
                        setLoader(false);
                        navigate('/admin');
                    }, 1500);
                });
    };

    return (
        <main className={`${base}__root`}>
            {loader ? <Loader /> : null}
            {message.status ? <Message message={message.message} /> : null}
            <div className={`${base}__wrapper`}>
                <div className={`${base}__wrapper__header`}>
                    <h1 className={`${base}__wrapper__header__title`}>
                        Quiz Maker
                    </h1>
                    <div
                        onClick={(event) => goTo(event)}
                        className={`${base}__wrapper__header__back`}
                    >
                        <img
                            src={back}
                            alt="back"
                            className={`${base}__wrapper__header__back__logo`}
                        />
                    </div>
                </div>
                <form id="examForm" onSubmit={(event) => submitExam(event)}>
                    <label htmlFor="examName">Nombre Prueba:</label>
                    <input
                        type="text"
                        id="examName"
                        required
                        onInput={(event) => {
                            setExam('name', event.target.value);
                        }}
                    />
                    <br />

                    <label htmlFor="totalPoints">Puntos Totales:</label>
                    <input
                        type="text"
                        id="totalPoints"
                        required
                        onInput={(event) => {
                            setExam('totalPoints', event.target.value);
                        }}
                    />
                    <br />

                    <div id="questionFields">
                        <h2>Pregunta {questionCount}</h2>
                        <button
                            type="button"
                            id="changeFormatQuestion"
                            onClick={(event) => changeFormat(event, 'q')}
                        >
                            Cambiar Formato
                        </button>
                        <br />
                        {textQuestion === true ? (
                            <>
                                <label htmlFor={`question`}>Pregunta:</label>
                                <input
                                    type="text"
                                    id={`question`}
                                    onInput={(event) => {
                                        setQuestioInfo(
                                            'question',
                                            event.target.value
                                        );
                                    }}
                                />
                                <br />
                            </>
                        ) : (
                            <>
                                <div>
                                    <label htmlFor="photoq">Foto</label>
                                    <input
                                        type="file"
                                        id="photoq"
                                        accept="image/*"
                                        capture
                                        onChange={(event) =>
                                            onFileChange(event, 'q')
                                        }
                                    />
                                </div>
                                {selectedFile ? (
                                    <div>
                                        <img src={srcImg} alt="Your upload" />
                                    </div>
                                ) : null}
                                <label htmlFor="examName">
                                    Respuesta Correcta:
                                </label>
                                <input
                                    type="text"
                                    id="examName"
                                    ref={refAnswer}
                                />
                                <br />
                            </>
                        )}
                        <label htmlFor={`points`}>Puntos:</label>
                        <input
                            type="text"
                            id={`points`}
                            onInput={(event) => {
                                setQuestioInfo('value', event.target.value);
                            }}
                        />
                        <br />
                        <button
                            type="button"
                            id="changeFormatAsnwer"
                            onClick={(event) => changeFormat(event, 'a')}
                        >
                            Cambiar Formato
                        </button>
                        <br />
                        {textAnswer === true ? (
                            <>
                                <label htmlFor={`question`}>Respuesta:</label>
                                <input
                                    type="text"
                                    ref={refQuestion}
                                    id={`question`}
                                    onInput={(event) =>
                                        setOption('option', event.target.value)
                                    }
                                />
                                <br />
                            </>
                        ) : (
                            <>
                                <div>
                                    <label htmlFor="photoq">Foto</label>
                                    <input
                                        type="file"
                                        id="photoq"
                                        accept="image/*"
                                        capture
                                        onChange={(event) =>
                                            onFileChange(event, 'a')
                                        }
                                    />
                                </div>
                                {selectedFile ? (
                                    <div>
                                        <img src={srcImg} alt="Your upload" />
                                    </div>
                                ) : null}
                                <label htmlFor="examName">
                                    Respuesta Correcta:
                                </label>
                                <input
                                    type="text"
                                    id="examName"
                                    ref={refAnswer}
                                />
                                <br />
                            </>
                        )}

                        <button
                            type="button"
                            id="addOption"
                            onClick={(event) => sendOption(event)}
                        >
                            Agregar Respuesta
                        </button>
                    </div>
                    <br />
                    <button
                        type="button"
                        id="addQuestion"
                        onClick={(event) => sendQuestion(event)}
                    >
                        Agregar Pregunta
                    </button>
                    <br />
                    <button type="submit" id="submitExam">
                        Enviar Prueba
                    </button>
                </form>
            </div>
        </main>
    );
}
export default QuizMaker;
