import QuestionsTable from '../../components/QuestionsTable/QuestionsTable';
import questions from '../../api/questions';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import QuestionsTest from '../QuestionsTest/QuestionsTest';
import { useNavigate } from 'react-router-dom';

function QuestionAdmin() {
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);

    const onViewModalClose = () => setIsViewModalOpen(false);
    const navigate = useNavigate();

    const [questionList, setQuestions] = useState([]);
    useEffect(() => {
        const fetchQuestions = async () => {
            const response = await questions.get();
            setQuestions(response);
        };

        fetchQuestions();

        return;
    },[]);

    return (
        <div className="question-admin">
            <Modal
                isOpen={isViewModalOpen}
                onRequestClose={onViewModalClose}
                contentLabel="Question Modal"
                style={{
                    content: { margin: 0, padding: 0, height: 'fit-content' },
                    overlay: { marginTop: '100px' },
                }}
            >
                <QuestionsTest></QuestionsTest>
                <div>
                    <button onClick={() => setIsViewModalOpen(false)}>
                        Cerrar
                    </button>
                </div>
            </Modal>
            <div className="container">
                <h1>Administrador de Preguntas</h1>
            </div>

            <div className="container">
                <div className="row header">
                    <h3>Listado de Preguntas</h3>
                    <button
                        className="pushed-element"
                        onClick={() => navigate('/questionEditor')}
                    >
                        Nueva pregunta
                    </button>
                </div>
                <div className="container">
                    <QuestionsTable
                        questions={questionList}
                        openModal={(question) => {
                            setIsViewModalOpen(true);
                        }}
                    ></QuestionsTable>
                </div>
            </div>
        </div>
    );
}

export default QuestionAdmin;
