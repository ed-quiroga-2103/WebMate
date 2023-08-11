import StudentsTable from '../../components/StudentsTable/StudentsTable';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import QuestionsTest from '../QuestionsTest/QuestionsTest';
import users from '../../api/users';
import QRCode from 'qrcode';
import { v4 as uuidv4 } from 'uuid';
import NewStudentModal from '../../components/NewStudentModal/NewStudentModal';

function Students() {
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);

    const onViewModalClose = () => setIsViewModalOpen(false);

    const [questionList, setQuestions] = useState([]);
    useEffect(() => {
        const fetchQuestions = async () => {
            const response = await users.get();
            setQuestions(response);
        };

        fetchQuestions();

        return;
    });

    return (
        <div className="students-admin">
            <Modal
                isOpen={isViewModalOpen}
                onRequestClose={onViewModalClose}
                contentLabel="Question Modal"
                style={{
                    content: {
                        margin: 0,
                        padding: 0,
                        height: 'fit-content',
                        inset: undefined,
                        width: 'fit-content',
                    },
                    overlay: {
                        marginTop: '100px',
                        display: 'flex',
                        justifyContent: 'center',
                    },
                }}
            >
                <NewStudentModal onClose={() => setIsViewModalOpen(false)} />
            </Modal>
            <div className="container">
                <h1>Administrador de Preguntas</h1>
            </div>

            <div className="container">
                <div className="row header">
                    <h3>Listado de Preguntas</h3>
                    <button
                        className="pushed-element"
                        onClick={() => setIsViewModalOpen(true)}
                    >
                        Nueva pregunta
                    </button>
                </div>
                <div className="container">
                    <StudentsTable
                        students={questionList}
                        openModal={(question) => {
                            setIsViewModalOpen(true);
                        }}
                    ></StudentsTable>
                </div>
            </div>
        </div>
    );
}

export default Students;
