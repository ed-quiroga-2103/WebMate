import QuestionsTable from '../../components/QuestionsTable/QuestionsTable';
import questions from '../../api/questions';
import { useEffect, useState } from 'react';
function QuestionAdmin() {
    const [questionList, setQuestions] = useState([]);
    useEffect(() => {
        const fetchQuestions = async () => {
            const response = await questions.get();
            setQuestions(response);
        };

        fetchQuestions();

        return;
    });

    return (
        <div className="question-admin">
            <div className="container">
                <h1>Administrador de Preguntas</h1>
            </div>

            <div className="container">
                <div className="row header">
                    <h3>Listado de Preguntas</h3>
                    <button className="pushed-element">Nueva pregunta</button>
                </div>
                <div className="container">
                    <QuestionsTable questions={questionList}></QuestionsTable>
                </div>
            </div>
        </div>
    );
}

export default QuestionAdmin;
