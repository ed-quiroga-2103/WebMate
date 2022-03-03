import { FC, useEffect, useState } from 'react';
import api from '../../lib/api';
import { QuestionForm } from '../../components/QuestionForm';
import { QuestionSection, QuestionWrapper } from './QuestionElements';
import './index.scss';
import ScrollToTop from '../ScrollToTop';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar';
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

    const [isOpen, setisOpen] = useState(false);
    const toggle = () => {
        setisOpen(!isOpen);
    };
    return (
        <>
            <ScrollToTop />
            <Navbar toggle={toggle} on="partner" />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <QuestionSection>
                <QuestionWrapper>
                    <div className="questions-view">
                        <div>
                            <QuestionForm setQuestions={reloadQuestions} />
                        </div>
                        <div>
                            <h1 className="h1Questions">
                                Preguntas Existentes
                            </h1>

                            <table className="question-table">
                                <thead className="question-head">
                                    <tr className="question-row">
                                        <th>Pregunta</th>
                                        <th>Dificultad</th>
                                        <th>Curso</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {questions.map((question, i) => {
                                        return (
                                            <tr
                                                className="question-row"
                                                key={i}
                                            >
                                                <td>{question.text}</td>
                                                <td>{question.difficulty}</td>
                                                <td>{question.course.code}</td>
                                                <td>
                                                    <button
                                                        onClick={async () => {
                                                            console.log(
                                                                question.url
                                                            );

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
                                                        className="buttonXS"
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
                </QuestionWrapper>
            </QuestionSection>
        </>
    );
};
