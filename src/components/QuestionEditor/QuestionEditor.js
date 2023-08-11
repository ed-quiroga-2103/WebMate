import { useState, useEffect } from 'react';

const QuestionEditor = ({ isEditing, question }) => {
    const [options, setOptions] = useState([]);

    const [editing, setEditing] = useState(-1);

    const [questionField, setQuestionField] = useState('');
    const [questionLines, setQuestionLines] = useState([]);

    const [equations, setEquations] = useState([]);

    const [equationsComponents, setEquationComponents] = useState();

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

                    <option value="actual value 1">Facil</option>
                    <option value="actual value 1">Intermedio</option>
                    <option value="actual value 1">Dificil</option>
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

    useEffect(() => {
        console.log('Equations changed');
        setEquationComponents(renderEquations(equations));
    }, [equations, editing]);

    const removeEquation = (i) => {
        const copy = equations;
        copy.splice(i, 1);
        setEquations(copy);
        setEquationComponents(renderEquations(copy));
    };

    return (
        <div className="question-editor">
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
                    <h3>Datos de la Pregunta</h3>
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
                                appendOption('This is an option');
                            }}
                        >
                            +
                        </button>
                    </div>

                    <div className="options-container">
                        {options.map((option) => (
                            <div className="option-card">
                                <div>Option</div>
                                <div>Preview</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionEditor;
