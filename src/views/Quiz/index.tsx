import { FC, useEffect, useState } from 'react';
import './index.scss';
import { useParams } from 'react-router-dom';
import api from '../../lib/api';
import ScrollToTop from '../ScrollToTop';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar';
import { QuizSection, QuizWrapper } from './QuizElements';

interface IQuizViewProps {}

export const QuizView: FC<IQuizViewProps> = (props) => {
    const { id } = useParams();
    const [quiz, setQuiz] = useState(undefined);

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [answers, setAnswers] = useState({});

    const [result, setResult] = useState(undefined);

    useEffect(() => {
        const fetchQuiz = async () => {
            const response = await api.quices.generate(id);

            setQuiz(response);
        };

        fetchQuiz();

        return;
    }, []);

    const handleNext = () => {
        setCurrentQuestion(
            currentQuestion + 1 === quiz.questions.length
                ? currentQuestion
                : currentQuestion + 1
        );
    };

    const handleAnswer = (questionId, value) => {
        const answer = {};
        answer[questionId] = value;

        Object.assign(answers, answer);

        setAnswers(answers);
    };

    const handlePrev = () => {
        setCurrentQuestion(
            currentQuestion === 0 ? currentQuestion : currentQuestion - 1
        );
    };

    const handleFinalize = () => {
        const answersRes = [];
        for (const [questionId, value] of Object.entries(answers)) {
            answersRes.push({
                questionId,
                value,
            });
        }

        const validate = async () => {
            const response = await api.quices.validate(answersRes, quiz.id);

            setResult(response);
            console.log(result);
        };

        validate();
    };

    const [isOpen, setisOpen] = useState(false);
    const toggle = () => {
        setisOpen(!isOpen);
    };
    return (
        <>
            <ScrollToTop />
            <Navbar toggle={toggle} on="partner" />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <QuizSection>
                <QuizWrapper>
                    <div>
                        <h1>
                            {quiz ? quiz.questions[currentQuestion].text : ''}
                        </h1>

                        <div className="question-image">
                            <img width={250} src="" />
                        </div>
                        {quiz
                            ? quiz.questions[currentQuestion].options.map(
                                  (option, i) => {
                                      return (
                                          <div
                                              className="option-container"
                                              key={i}
                                          >
                                              <div
                                                  style={{
                                                      marginRight: 100,
                                                      marginLeft: 50,
                                                  }}
                                              >
                                                  {option.value}
                                              </div>
                                              <button
                                                  onClick={() => {
                                                      handleAnswer(
                                                          quiz.questions[
                                                              currentQuestion
                                                          ].id,
                                                          option.value
                                                      );
                                                  }}
                                              >
                                                  Responder
                                              </button>
                                          </div>
                                      );
                                  }
                              )
                            : ''}

                        <div className="option-container">
                            <span>
                                <button
                                    className="buttonXS"
                                    onClick={handlePrev}
                                >
                                    Anterior
                                </button>
                                <button
                                    className="buttonXS"
                                    onClick={handleNext}
                                >
                                    Siguiente
                                </button>
                            </span>
                        </div>
                        <div className="option-container">
                            <span>
                                <button
                                    className="buttonXS"
                                    onClick={handleFinalize}
                                >
                                    Finalizar
                                </button>
                            </span>
                        </div>

                        {result ? (
                            <div>
                                <span>
                                    Aprobado? {result.approved ? 'Sí' : 'No'}
                                </span>
                                <br />
                                <span>
                                    Porcentaje:{' '}
                                    {result.percentage
                                        ? result.percentage
                                        : '?'}
                                </span>
                            </div>
                        ) : (
                            <h2 style={{ color: '#f9f9f9' }}>
                                Esperando los resultados...
                            </h2>
                        )}
                    </div>
                </QuizWrapper>
            </QuizSection>
        </>
    );
};
