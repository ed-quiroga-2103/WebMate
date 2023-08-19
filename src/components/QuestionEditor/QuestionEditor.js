import { useState, useEffect } from 'react';
import Latex from 'react-latex';
import QuestionsTable from '../../components/QuestionsTable/QuestionsTable';
import questions from '../../api/questions';
import Modal from 'react-modal';
import QuestionsTest from '../../views/QuestionsTest/QuestionsTest';
import { useNavigate } from 'react-router-dom';

const defaultEq = '$$M = (3x\\times 4) \\div (5-3x)$$';

const QuestionEditor = ({ isEditing, question }) => {
    const [options, setOptions] = useState([]);

    const [editing, setEditing] = useState(-1);

    const [questionField, setQuestionField] = useState('');
    const [questionLines, setQuestionLines] = useState([]);

    const [equations, setEquations] = useState([]);

    const [equationsComponents, setEquationComponents] = useState();
    const [optionComponents, setOptionComponents] = useState();

    const [previewModal, setPreviewModal] = useState(false);

    const [finalQuestion, setFinalQuestion] = useState(undefined);

    useEffect(() => {
        setFinalQuestion({
            header: questionLines,
            options,
            equations: equations.map((eq) => `$$${eq}$$`),
        });
    }, [options, equations, questionLines]);

    const appendOption = (option) => {
        setOptions([...options, option]);
    };

    const handleQuestionField = (value) => {
        setQuestionField(value);
    };

    useEffect(() => {
        const lines = questionField.split('\n');
        setQuestionLines(lines);
    }, [questionField]);

    const getCourseDropdown = () => {
        return (
            <>
                <select>
                    <option disabled selected value>
                        Seleccione una opcion
                    </option>

                    <option value="actual value 1">
                        Probabilidad y Estadistica
                    </option>
                    <option value="actual value 2">Mate General</option>
                </select>
            </>
        );
    };

    const getDifficultyDropdown = () => {
        return (
            <>
                <select>
                    <option disabled selected value>
                        Seleccione una opcion
                    </option>

                    <option value="actual value 1">Facil</option>
                    <option value="actual value 1">Intermedio</option>
                    <option value="actual value 1">Dificil</option>
                </select>
            </>
        );
    };

    const getTopicDropdown = () => {
        return (
            <>
                <select>
                    <option disabled selected value>
                        Seleccione una opcion
                    </option>

                    <option value="actual value 1">
                        Distribucion Binomial
                    </option>
                    <option value="actual value 1">Distribucion Normal</option>
                    <option value="actual value 1">Rectas de Regresion</option>
                </select>
            </>
        );
    };

    const updateEquation = (value, i) => {
        const newEquations = [];
        for (let index = 0; index < equations.length; index++) {
            if (i === index) {
                newEquations.push(value);
            } else {
                newEquations.push(equations[index]);
            }
        }

        setEquations(newEquations);
    };

    const updateOption = (value, i) => {
        const newOptions = [];
        for (let index = 0; index < options.length; index++) {
            if (i === index) {
                newOptions.push(value);
            } else {
                newOptions.push(options[index]);
            }
        }

        setOptions(newOptions);
    };

    const removeEquation = (i) => {
        const copy = equations;
        copy.splice(i, 1);
        setEquations(copy);
        setEquationComponents(renderEquations(copy));
    };

    const removeOption = (i) => {
        const copy = options;
        copy.splice(i, 1);
        setOptions(options);
    };

    const renderEquations = (input) =>
        input.map((equation, i) =>
            editing !== i ? (
                <div className="equation">
                    <span>{equation}</span>
                    <div>
                        <button onClick={() => setEditing(i)}>Editar</button>
                        <button onClick={() => removeEquation(i)}>X</button>
                    </div>
                </div>
            ) : (
                <div className="edit-equation">
                    <div>
                        <textarea
                            value={equation}
                            onChange={(event) => {
                                updateEquation(event.target.value, i);
                            }}
                        ></textarea>
                        <div>
                            <button onClick={() => setEditing(-1)}>
                                Completar
                            </button>
                        </div>
                    </div>
                </div>
            )
        );

    const renderOptions = (input) => {
        return input.map((option, i) => (
            <div className="option-card">
                <div style={{ width: '50%' }}>
                    <textarea
                        onChange={(event) => {
                            updateOption(event.target.value, i);
                        }}
                        style={{ width: '80%' }}
                    ></textarea>
                </div>
                <div style={{ width: '50%' }}>
                    <Latex>{option}</Latex>
                </div>
                <input
                    type="checkbox"
                    id="demoCheckbox"
                    name="checkbox"
                    value="1"
                />
                <button onClick={() => removeOption(i)}>X</button>
            </div>
        ));
    };

    useEffect(() => {
        console.log('Equations changed');
        setEquationComponents(renderEquations(equations));
    }, [equations, editing]);

    useEffect(() => {
        console.log('Options changed', options);
        setOptionComponents(renderOptions(options));
    }, [options]);

    return (
        <div className="question-editor">
            <Modal
                isOpen={previewModal}
                onRequestClose={() => setPreviewModal(false)}
                contentLabel="Question Modal"
                style={{
                    content: { margin: 0, padding: 0, height: 'fit-content' },
                    overlay: { marginTop: '100px' },
                }}
            >
                <QuestionsTest question={finalQuestion}></QuestionsTest>
            </Modal>
            <div className="editor-container">
                <h2 className="editor-title">Editor de Preguntas</h2>
                <div className="question-data-card">
                    <h3>Datos Generales</h3>
                    <div className="content-grid">
                        <div className="cell">Curso</div>
                        {getCourseDropdown()}
                        <div className="cell">Dificultad</div>
                        {getDifficultyDropdown()}
                        <div className="cell">Tema</div>
                        {getTopicDropdown()}
                    </div>
                </div>
                <div className="question-data-card">
                    <div className="option-bar">
                        <h3>Datos de la Pregunta</h3>
                        <button
                            onClick={() => {
                                setPreviewModal(true);
                            }}
                        >
                            Vista Previa
                        </button>
                    </div>
                    <div className="question-grid">
                        <div>Enunciado</div>
                        <div className="option-bar">
                            <div>Ecuaciones</div>
                            <button
                                onClick={() =>
                                    setEquations([...equations, 'Y=mx+b'])
                                }
                            >
                                +
                            </button>
                        </div>
                        <textarea
                            value={questionField}
                            onChange={(event) => {
                                handleQuestionField(event.target.value);
                            }}
                        ></textarea>
                        <div className="eq-container">
                            <div>{equationsComponents}</div>
                        </div>
                    </div>
                </div>

                <div className="question-data-card">
                    <div className="option-bar">
                        <div>
                            <h3>Opciones</h3>
                        </div>
                        <button
                            onClick={() => {
                                appendOption('');
                            }}
                        >
                            +
                        </button>
                    </div>

                    <div className="options-container">{optionComponents}</div>
                    <div className="button-bar">
                        <button>Cancelar</button>
                        <button>Confirmar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionEditor;
