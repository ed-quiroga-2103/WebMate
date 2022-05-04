import './index.scss';
import api from '../../lib/api';
import Navbar from '../../components/Navbar/Navbar';
import ScrollToTop from '../ScrollToTop';
import Sidebar from '../../components/Sidebar';

import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { FC, useEffect, useState } from 'react';
import { QuizSection, QuizWrapper } from './QuizElements';

interface IQuizViewProps {}

export const QuizView: FC<IQuizViewProps> = (props) => {
    const { id, subjectId } = useParams();

    const [quiz, setQuiz] = useState(undefined);

    if (subjectId) {
        console.log('Subject quiz');
    } else {
        console.log('Not subject quiz');
    }

    const [searchParams, _] = useSearchParams();

    const type = searchParams.get('type');

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [answers, setAnswers] = useState({});

    const [result, setResult] = useState(undefined);

    useEffect(() => {
        const fetchQuiz = async () => {
            let response;
            if (subjectId) {
                response = await api.quices.generateSubject(id, subjectId);
            } else {
                if (type === 'D') {
                    response = await api.quices.generateDiagnostic(id);
                } else {
                    response = await api.quices.generate(id, 'NA');
                }
            }

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

    const navigate = useNavigate();

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

            // navigate(`/courses/${id}`);
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
                    <div className="quizWrapper">
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
                                    className="buttonXXS"
                                    onClick={handlePrev}
                                >
                                    Anterior
                                </button>
                            </span>
                            <span>
                                <button
                                    className="buttonXXS"
                                    onClick={handleNext}
                                >
                                    Siguiente
                                </button>
                            </span>
                        </div>
                        <div className="option-container">
                            <span>
                                <button
                                    className="buttonXXS"
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
                            <h2
                                style={{
                                    color: '#f9f9f9',
                                    textAlign: 'center',
                                }}
                            >
                                Esperando los resultados...
                            </h2>
                        )}
                    </div>
                </QuizWrapper>
            </QuizSection>
        </>
    );
};
