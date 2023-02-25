import React from 'react';
import moment from 'moment/moment';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import quizApi from '../../api/quiz';
import quizData from '../../assets/quiz1.json'; //QUIROGA: quiz, info de base de datos
import { useTimer } from 'react-timer-hook';
import Loader from '../../components/Loader/Loader';

function Quiz() {
    const base = 'quiz';
    const navigate = useNavigate();
    const [index, setIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const opt1 = useRef();
    const opt2 = useRef();
    const opt3 = useRef();
    const opt4 = useRef();
    const bar = useRef();

    const queryParams = new URLSearchParams(window.location.search);
    const course = queryParams.get('course');
    const subject = queryParams.get('subject');

    const [quiz, setQuiz] = useState(undefined);

    const { minutes, seconds } = useTimer({
        expiryTimestamp: moment().add(10, 'minutes'),
    });

    useEffect(() => {
        const fetchQuiz = async () => {
            if (subject) {
                const subjectQuiz = await quizApi.generateSubject(
                    course,
                    subject,
                    4
                );
                setQuiz(subjectQuiz);
            } else {
                const diagnosticQuiz = await quizApi.generateDiagnostic(
                    course,
                    0,
                    2,
                    2
                );
                console.log(diagnosticQuiz);

                setQuiz(diagnosticQuiz);
            }
        };
        fetchQuiz();
    }, []);

    const checkIfMarked = (i) => {
        if (!quiz) {
            return;
        }
        if (answers[i] !== undefined) {
            if (answers[i] === 'A') opt1.current.checked = true;
            if (answers[i] === 'B') opt2.current.checked = true;
            if (answers[i] === 'C') opt3.current.checked = true;
            if (answers[i] === 'D') opt4.current.checked = true;
        } else {
            opt1.current.checked = false;
            opt2.current.checked = false;
            if (opt3.current !== null) opt3.current.checked = false;
            if (opt4.current !== null) opt4.current.checked = false;
        }
    };
    const answerChecked = () => {
        if (!quiz) {
            return;
        }
        if (opt1.current.checked) {
            answers[index] = 'A';
            setAnswers(answers);
            return true;
        } else {
            if (opt2.current.checked) {
                answers[index] = 'B';
                setAnswers(answers);
                return true;
            } else {
                if (opt3.current.checked) {
                    answers[index] = 'C';
                    setAnswers(answers);
                    return true;
                } else {
                    if (opt4.current.checked) {
                        answers[index] = 'D';
                        setAnswers(answers);
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        }
    };
    const finish = () => {
        const flag = answerChecked();
        if (flag) {
            navigate(`/course?id=${course}`);
        }
    };
    const goNext = () => {
        const flag = answerChecked();
        if (flag) {
            bar.current.style.width =
                ((100 / quiz.questions.length) * (index + 1)).toFixed(2) + '%';
            setIndex(index + 1);
        }
    };
    const goBack = () => {
        bar.current.style.width =
            ((100 / quiz.questions.length) * (index - 1)).toFixed(2) + '%';
        setIndex(index - 1);
    };

    useEffect(() => {
        checkIfMarked(index);
    }, [index]);

    if (!quiz) {
        return <Loader />;
    }

    return (
        <div className={`${base}__root`}>
            <div className={`${base}__wrapper`}>
                <div className={`${base}__header`}>
                    <h1 className={`${base}__header__title`}>
                        {quizData.name} - {minutes}:
                        {seconds < 10 ? `0${seconds}` : seconds}
                    </h1>
                </div>
                <div className={`${base}__question`}>
                    <div className={`${base}__question__wrapper`}>
                        <h2 className={`${base}__question__title`}>
                            Pregunta {index + 1}/{quiz.questions.length} -{' '}
                            {quizData.questions[0].value}
                            pts
                        </h2>
                        <div className={`${base}__question__progressBar`}>
                            <p>
                                Progreso:
                                {(
                                    (100 / quiz.questions.length) *
                                    index
                                ).toFixed(2) + '%'}
                            </p>
                            <div
                                className={`${base}__question__progressBar__bar`}
                            >
                                <div
                                    ref={bar}
                                    className={`${base}__question__progressBar__bar__progress`}
                                ></div>
                            </div>
                        </div>
                    </div>
                    <img
                        src={quizData.questions[0].question}
                        alt="question"
                        className={`${base}__question__image`}
                    />
                </div>
                <div className={`${base}__options`}>
                    <label
                        htmlFor="option1"
                        className={`${base}__options__container`}
                    >
                        <input
                            ref={opt1}
                            type="radio"
                            name="myRadioField"
                            id="option1"
                            className={`${base}__options__container__radio`}
                        />
                        <img
                            src={quizData.questions[0].option1}
                            alt="question"
                            className={`${base}__options__container__image`}
                        />
                    </label>

                    <label
                        htmlFor="option2"
                        className={`${base}__options__container`}
                    >
                        <input
                            ref={opt2}
                            type="radio"
                            name="myRadioField"
                            id="option2"
                            className={`${base}__options__container__radio`}
                        />
                        <img
                            src={quizData.questions[0].option2}
                            alt="question"
                            className={`${base}__options__container__image`}
                        />
                    </label>
                    {quiz.questions &&
                    quiz.questions[index].options[2] != null ? (
                        <>
                            <label
                                htmlFor="option3"
                                className={`${base}__options__container`}
                            >
                                <input
                                    ref={opt3}
                                    type="radio"
                                    name="myRadioField"
                                    id="option3"
                                    className={`${base}__options__container__radio`}
                                />
                                <img
                                    src={quizData.questions[0].option3}
                                    alt="question"
                                    className={`${base}__options__container__image`}
                                />
                            </label>
                        </>
                    ) : null}
                    {quiz.questions &&
                    quiz.questions[index].options[3] != null ? (
                        <>
                            <label
                                htmlFor="option4"
                                className={`${base}__options__container`}
                            >
                                <input
                                    ref={opt4}
                                    type="radio"
                                    name="myRadioField"
                                    id="option4"
                                    className={`${base}__options__container__radio`}
                                />
                                <img
                                    src={quizData.questions[0].option4}
                                    alt="question"
                                    className={`${base}__options__container__image`}
                                />
                            </label>
                        </>
                    ) : null}
                </div>
                <div className={`${base}__buttons`}>
                    {index === 0 ? null : (
                        <button
                            className={`${base}__buttons__button`}
                            onClick={() => {
                                goBack();
                            }}
                        >
                            Anterior
                        </button>
                    )}

                    {index === quiz.questions.length - 1 ? (
                        <button
                            className={`${base}__buttons__button`}
                            onClick={() => {
                                finish();
                            }}
                        >
                            Finalizar
                        </button>
                    ) : (
                        <button
                            className={`${base}__buttons__button`}
                            onClick={() => {
                                goNext();
                            }}
                        >
                            Siguiente
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Quiz;
