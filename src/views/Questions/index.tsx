import { FC, useEffect, useState } from 'react';
import api from '../../lib/api';
import { QuestionForm } from '../../components/QuestionForm';
import './index.scss';
interface ITest2Props {}

export const Questions: FC<ITest2Props> = (props) => {
    const [questions, setQuestions] = useState([]);

    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const fetchQuestions = async () => {
            const questions = await api.questions.get();
            setQuestions(questions);
        };

        fetchQuestions();
    }, []);

    const reloadQuestions = () => {
        const fetchQuestions = async () => {
            const questions = await api.questions.get();

            setQuestions(questions);
            console.log(questions);
        };

        fetchQuestions();
    };

    return (
        <div className="questions-view">
            <div>
                <QuestionForm setQuestions={reloadQuestions} />
            </div>
            <div>
                <h1>Preguntas Existentes</h1>

                <table className="question-table">
                    <thead>
                        <tr className="question-row">
                            <th>Question</th>
                            <th>Difficulty</th>
                            <th>Course</th>
                        </tr>
                    </thead>
                    <tbody>
                        {questions.map((question, i) => {
                            return (
                                <tr className="question-row" key={i}>
                                    <td>{question.text}</td>
                                    <td>{question.difficulty}</td>
                                    <td>{question.course.code}</td>
                                    <td>
                                        <button
                                            onClick={async () => {
                                                console.log(question.url);

                                                window.open(
                                                    question.url,
                                                    '_blank'
                                                );
                                            }}
                                        >
                                            Imagen
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            onClick={async () => {
                                                await api.questions.delete(
                                                    question.id
                                                );
                                                reloadQuestions();
                                            }}
                                        >
                                            X
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
