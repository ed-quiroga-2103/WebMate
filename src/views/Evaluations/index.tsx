import { useState } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar';
import ScrollToTop from '../ScrollToTop';
import { EvaluationsSection, EvaluationsWrapper } from './EvaluationsElements';
import './index.scss';

function Evaluations({ list }: { list: any }) {
    const questions = list[0][1];
    const [isOpen, setisOpen] = useState(false);
    const toggle = () => {
        setisOpen(!isOpen);
    };

    let answers: any = [];
    let oneAnswer = false;
    let answer = false;

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [firstQ, setFirstQ] = useState(false);
    const [lastQ, setLastQ] = useState(false);

    const handleAnswerOptionClick = (
        event: any,
        isCorrect: boolean,
        current: number
    ) => {
        event.preventDefault();

        oneAnswer = true;
        answer = false;
        if (isCorrect) {
            answer = true;
        }
        answers[current] = answer;
        console.log(answers);
    };

    const next = () => {
        if (oneAnswer) {
            const nextQuestion = currentQuestion + 1;
            oneAnswer = false;
            if (nextQuestion < questions.length) {
                if (nextQuestion === questions.length - 1) {
                    setLastQ(true);
                }
                setFirstQ(true);
                setCurrentQuestion(nextQuestion);
                if (answer) {
                    answer = false;
                }
            } else {
                if (answer) {
                    answer = false;
                }
                console.log(answers);
                for (var element in answers) {
                    if (element) {
                        setScore(score + 1);
                    }
                }
                setShowScore(true);
                console.log(answers);
            }
        } else {
            alert('Seleccione una respuesta primero');
        }
    };

    const previous = () => {
        const nextQuestion = currentQuestion - 1;
        setLastQ(false);
        if (nextQuestion === 0) {
            setFirstQ(false);
        }
        if (nextQuestion > 0) {
            setCurrentQuestion(nextQuestion);
        } else {
            setCurrentQuestion(0);
        }
    };

    return (
        <>
            <ScrollToTop />
            <Navbar toggle={toggle} on="partner" />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <EvaluationsSection>
                <EvaluationsWrapper>
                    <div className="quiz-section">
                        {showScore ? (
                            <div className="score-section">
                                Obtuviste {score} puntos de {questions.length}
                            </div>
                        ) : (
                            <>
                                <div className="containerQuestion">
                                    <div className="question-section">
                                        <div className="question-count">
                                            <span>
                                                Pregunta {currentQuestion + 1}
                                            </span>
                                            /{questions.length}
                                        </div>
                                        <div className="question-text">
                                            {
                                                questions[currentQuestion]
                                                    .questionText
                                            }
                                        </div>
                                    </div>
                                    <div className="answer-section">
                                        {questions[
                                            currentQuestion
                                        ].answerOptions.map(
                                            (answerOption: any) => (
                                                <button
                                                    className="buttonOption"
                                                    onClick={(evt) => {
                                                        handleAnswerOptionClick(
                                                            evt,
                                                            answerOption.isCorrect,
                                                            currentQuestion
                                                        );
                                                    }}
                                                >
                                                    <span className="mathDisplay">
                                                        {
                                                            answerOption.answerText
                                                        }
                                                    </span>
                                                </button>
                                            )
                                        )}
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                    {showScore ? (
                        <>
                            <div className="buttonBack">
                                <a className="a" href="/home">
                                    <button className="buttonSelect">
                                        Volver
                                    </button>
                                </a>
                            </div>
                        </>
                    ) : (
                        <>
                            {firstQ ? (
                                <>
                                    {lastQ ? (
                                        <div className="buttonsWrapper">
                                            <button
                                                className="buttonSelect"
                                                onClick={() => next()}
                                            >
                                                Finalizar
                                            </button>
                                            <button
                                                className="buttonSelect"
                                                onClick={() => previous()}
                                            >
                                                Anterior
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="buttonsWrapper">
                                            <button
                                                className="buttonSelect"
                                                onClick={() => next()}
                                            >
                                                Siguiente
                                            </button>
                                            <button
                                                className="buttonSelect"
                                                onClick={() => previous()}
                                            >
                                                Anterior
                                            </button>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <div className="buttonBack">
                                    <button
                                        className="buttonSelect"
                                        onClick={() => next()}
                                    >
                                        Siguiente
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </EvaluationsWrapper>
            </EvaluationsSection>
            <Footer />
        </>
    );
}

export default Evaluations;
