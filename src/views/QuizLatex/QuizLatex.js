import React from 'react';
import moment from 'moment/moment';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import quizApi from '../../api/quiz';
import quizData from '../../assets/quiz1.json'; //QUIROGA: quiz, info de base de datos
import { useTimer } from 'react-timer-hook';
import Loader from '../../components/Loader/Loader';
import Latex from 'react-latex';

export function QuizLatex() {
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

    const questionData = {
        data: [
            'Si Pedro tenia 10 manzanas, y la ecuacion que describe las manzanas de David es igual a: ',
            '$eq[0]',
            'Cuantas manzanas tiene David si la variable X representa las manzanas de Pedro?',
            '$img[0]',
        ],
        equations: ['$$M = (3x\\times 4) \\div (5-3x)$$'],
        images: [
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX///8ODg4AAAAICAjh4eF9fX0zMzNOTk7X19cqKiphYWGsrKwKCgr7+/vm5uZ0dHS8vLzu7u5DQ0OdnZ3Nzc1TU1OTk5O/v7+GhoZJSUl5eXlYWFi2trZmZmbx8fEmJiZubm45OTkeHh4YGBjIyMijo6Ourq6YmJiDg4OqYIa4AAAEDUlEQVR4nO3cWWOiMBQFYLmIomLdWxds1S76/3/hAC4VSpxOPc690vM985AjCTcJkVqNiIiIiIiIiIiIiIiIiIiIiIiIiIiIiOiXCTtBoN2GGxr3JPGi3Yyb6bdEIs/zX7UbciNhQ8RLSUO7KbexO+RLEja123ILz41jviThXLs1N1CXz4CevGs3B68uvneWMNRuD9xzLmAk2u3Ba5110UoOwyAXsIKdNCwEbGk3CK5RSNjXbhBavxCwehOaVtVH4bgQsHorp16+UlTvMVNLl0snvgy02wOXKxW+1LXbg9c5n3FXMWCyKjwbg9Xroon2adlbwadoZnHYuJBh5ergwUL8dHdtMdZuyM2s5HUYxM/azaDvCePRNAge4wsDrt4Jmpuk067b0/jOKsfgvSmf2nG35JqnbL9b/CiK9pfN3/57O3/qLY33WdnTAMtC68OdSG4Ct79sVPZTmDNuSH79sC8P0fZU4LudRjHeKaT9ncVuuyTffhIqs04y2Ab9pTguyTK2jA/Isbvx6Y3cc1+RXfShHeKSUWnn+0cy1Y7hFly+Pd+OaHbKCgqYRHzUjlJuiwqYRDRZGp9wAZPHjcHC+Ix4yBwDvlgsGU1gH11qhynTBwa0WS1yrwSvC2jzQfoOu4Wy085SDnYLZaIdpRysUvgWy0RqApvNmCz1aS1EBWxrR3H4gCW0ug2+BCWUlXYSF9SEzewL4QfQLfQ32klcULXC6GymhlsYitm3GT1UQqPVHrZwijztIE4bzKRUZtpBnEDFwubCN4NK2NMO4lT5GQ0soeFeCko41A7iBBqHhg98+6iJt9mKv678rG1R+Zk36p2T3dOmI9gmhsXXFSnYXqLV3eBaHbfhbfVpikto9f02qlzYHYk7XEKjj1Pky0Ob/2QbIF/h2zz3BdrH2EfsaKcpMwXeRE9G2nFKvCET2tzOAB41SSMaPKC4gt5ET2RqbXaD7aZZRmtLKWw39QzuD0OfplnCWDtSAW59cUxobSDWZuBnjb2KgTx86dl84f0KnLl5staOU6IDnbk9accpgzueaPXMAvAmmisVB7CRaPb7ZrhdRaPn92A10fDHv0CHo+RBO4jbIyKiuVVFTuv6iFY3FA8A/dTqpvDR1Yf2Zasd4W+uPPJt+LjCUfeqyVskd/A1gvCam2i31p+7Yn5q9C9PX/z4vb4stJv+Xc6z+5GffUXBFdD+U+akXRIx+zbEZjZptuTL9xTuLmDJwegk1Co+zjcH/d7Xv+Wb/b+MQ6fwZYxh8fOI8TqXUUy+cbroYSL7ypgOvXnZTCxcHbpr2n/bhtcTTmGQfSdi03N+3bLbn6/TS5rbe8yX6Q6s/lWLiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIfq8/tzAurNL1lJsAAAAASUVORK5CYII=',
        ],

        options: [
            {
                data: ['Tiene ', '$eq[0]', 'manzanas'],
                equations: ['$$M=5$$'],
                images: [],
            },
            {
                data: ['Tiene ', '$eq[0]', 'manzanas'],
                equations: ['$$M=3$$'],
                images: [],
            },
            {
                data: ['Tiene ', '$eq[0]', 'manzanas'],
                equations: ['$$M=1$$'],
                images: [],
            },
            {
                data: ['Tiene ', '$eq[0]', 'manzanas'],
                equations: ['$$M=50$$'],
                images: [],
            },
        ],
    };

    const getEquationIndex = (expression) => {
        const validation = expression.match(/\$eq\[\d+\]/g);

        if (validation) {
            const index = validation[0].match(/\d+/g)[0];
            return index;
        }

        return undefined;
    };

    const getImageIndex = (expression) => {
        const validation = expression.match(/\$img\[\d+\]/g);

        if (validation) {
            const index = validation[0].match(/\d+/g)[0];
            return index;
        }

        return undefined;
    };

    const renderQuestion = (question) => {
        const lines = [];

        question.data.forEach((line) => {
            const eqIndex = getEquationIndex(line);
            const imgIndex = getImageIndex(line);

            if (eqIndex) {
                lines.push(
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignContent: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <span
                            style={{
                                justifyContent: 'center',
                                alignContent: 'center',
                                display: 'flex',
                                marginTop: 'auto',
                                marginBottom: 'auto',
                                marginRight: '10px',
                            }}
                        >
                            A:
                        </span>
                        <Latex displayMode={true}>
                            {question.equations[eqIndex]}
                        </Latex>
                    </div>
                );
            } else if (imgIndex) {
                lines.push(
                    <img src={question.images[imgIndex]} alt="question" />
                );
            } else {
                lines.push(<span>{line}</span>);
            }
        });

        return lines;
    };

    const renderOption = (option) => {
        const lines = [];

        option.data.forEach((line, index) => {
            const eqIndex = getEquationIndex(line);
            const imgIndex = getImageIndex(line);

            if (eqIndex) {
                lines.push(
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignContent: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <span
                            style={{
                                justifyContent: 'center',
                                alignContent: 'center',
                                display: 'flex',
                                marginTop: 'auto',
                                marginBottom: 'auto',
                                marginRight: '10px',
                            }}
                        ></span>
                        <Latex displayMode={true}>
                            {option.equations[eqIndex]}
                        </Latex>
                    </div>
                );
            } else if (imgIndex) {
                lines.push(<img src={option.images[imgIndex]} alt="option" />);
            } else {
                lines.push(
                    <span style={{ marginLeft: index > 1 ? '5px' : '0px' }}>
                        {line}
                    </span>
                );
            }
        });

        return lines;
    };

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
                    {/* <img
                        src={quizData.questions[0].question}
                        alt="question"
                        className={`${base}__question__image`}
                    /> */}
                    <div className="question-container">
                        {renderQuestion(questionData)}
                    </div>
                </div>
                <div className={`${base}__options`}>
                    {questionData.options.map((option) => (
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
                            <div className="option-container">
                                {renderOption(option)}
                            </div>
                        </label>
                    ))}
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

export default QuizLatex;
