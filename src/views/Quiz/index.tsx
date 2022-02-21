import { FC, useEffect, useState } from 'react';
import './index.scss';
import { useParams } from 'react-router-dom';
import api from '../../lib/api';

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

    return (
        <div>
            <h1>{quiz ? quiz.questions[currentQuestion].text : ''}</h1>

            <div className="question-image">
                <img width={250} src="" />
            </div>
            {quiz
                ? quiz.questions[currentQuestion].options.map((option, i) => {
                      return (
                          <div className="option-container" key={i}>
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
                                          quiz.questions[currentQuestion].id,
                                          option.value
                                      );
                                  }}
                              >
                                  Responder
                              </button>
                          </div>
                      );
                  })
                : ''}

            <div className="option-container">
                <span>
                    <button onClick={handlePrev}>Anterior</button>
                    <button onClick={handleNext}>Siguiente</button>
                </span>
            </div>
            <div className="option-container">
                <span>
                    <button onClick={handleFinalize}>Finalizar</button>
                </span>
            </div>

            {result ? (
                <div>
                    <span>Aprobado? {result.approved ? 'Sí' : 'No'}</span>
                    <br />
                    <span>
                        Porcentaje:{' '}
                        {result.percentage ? result.percentage : '?'}
                    </span>
                </div>
            ) : (
                'Esperando los resultados...'
            )}
        </div>
    );
};
