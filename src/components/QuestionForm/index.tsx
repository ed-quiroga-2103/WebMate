import { FC, useEffect, useRef, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './index.scss';
import api from '../../lib/api';
import { WithContext as ReactTags } from 'react-tag-input';
import { QUESTION_DIFFICULTIES } from '../../assets/constants';

interface IQuestionFormProps {
    setQuestions: () => any;
}
export const QuestionForm: FC<IQuestionFormProps> = (props) => {
    const [options, setOptions] = useState([]);
    const [optionValue, setOptionValue] = useState('');
    const [optionIsCorrect, setOptionIsCorrect] = useState(false);

    const [submitting, setSubmitting] = useState(false);

    const [deleted, setDeleted] = useState(false);

    const [question, setQuestion] = useState('');

    const [table, setTable] = useState<JSX.Element[]>();
    const [reload, setReload] = useState(false);

    const [courses, setCourses] = useState([{ code: '...' }]);
    const [selectedCourse, setSelectedCourse] = useState('...');

    const [selectedDifficulty, setSelectedDifficulty] = useState(
        QUESTION_DIFFICULTIES[0]
    );

    const [tags, setTags] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            const data = await api.courses.get();

            setCourses([...courses, ...data]);
        };

        fetchCourses();
    }, []);

    const handleOptionDelete = (index) => {
        options.splice(index, 1);

        setOptions(options);

        setDeleted(!deleted);
        console.log(options);
    };

    const handleSubmit = async () => {
        var imagedata = (document.querySelector('input[type="file"]') as any)
            .files[0];

        const questionRes = await api.questions.post({
            tags: tags.map((tag) => tag.text),
            text: question,
            difficulty: selectedDifficulty,
            course: selectedCourse,
            options,
        });

        if (imagedata) {
            api.questions.upload(imagedata, questionRes.id);
        }

        props.setQuestions();
    };

    useEffect(() => {
        const something = options.map((option, i) => {
            return (
                <tr key={i} className="option-row">
                    <td>{option.value}</td>
                    <td>{option.isCorrect.toString()}</td>
                    <td>
                        <button
                            type="button"
                            onClick={() => {
                                console.log(i);
                                handleOptionDelete(i);
                            }}
                        >
                            X
                        </button>
                    </td>
                </tr>
            );
        });
        setTable(something);
        return;
    }, [deleted, options]);

    return (
        <div>
            <h1 className="h1Questions">Creación de Preguntas</h1>
            <Formik initialValues={{ question: '' }} onSubmit={() => {}}>
                {({}) => (
                    <Form
                        className="question-form"
                        onSubmit={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <div className="question-field">
                            <Field
                                className="question-field"
                                type="text"
                                name="email"
                                onChange={(e) => {
                                    setQuestion(e.target.value);
                                }}
                                value={question}
                                style={{ width: '100%', marginRight: '10px' }}
                            />
                            <input type="file"></input>
                        </div>

                        <div className="question-field">
                            <select
                                style={{ width: '50%', marginRight: '10px' }}
                                className="question-field"
                                id="course-dropdown"
                                defaultValue={selectedCourse}
                                onChange={(e) => {
                                    setSelectedCourse(e.target.value);
                                }}
                            >
                                {courses.map((value, i) => {
                                    return (
                                        <option key={i}>{value.code}</option>
                                    );
                                })}
                            </select>

                            <select
                                style={{ width: '50%' }}
                                defaultValue={selectedDifficulty}
                                onChange={(e) => {
                                    setSelectedDifficulty(e.target.value);
                                }}
                                className="question-field"
                                id="diff-dropdown"
                            >
                                {QUESTION_DIFFICULTIES.map((value, i) => {
                                    return <option key={i}>{value}</option>;
                                })}
                            </select>
                        </div>
                        <div className="question-field">
                            <span>
                                <div className="flex-container">
                                    <div className="h1Questions">Opción</div>
                                    <input
                                        value={optionValue}
                                        id="optionInput"
                                        type="text"
                                        onChange={(e) => {
                                            setOptionValue(e.target.value);
                                        }}
                                    />
                                </div>
                                <div className="h1Questions">Es correcta?</div>

                                <input
                                    checked={optionIsCorrect}
                                    id="correctInput"
                                    type="checkbox"
                                    onChange={(e) => {
                                        setOptionIsCorrect(e.target.checked);
                                    }}
                                />
                                <button
                                    className="buttonS"
                                    type="button"
                                    onClick={() => {
                                        setOptions([
                                            ...options,
                                            {
                                                value: optionValue,
                                                isCorrect: optionIsCorrect,
                                            },
                                        ]);

                                        setOptionValue('');
                                        setOptionIsCorrect(false);
                                    }}
                                >
                                    Agregar Opción
                                </button>
                            </span>
                        </div>

                        <table className="option-table">
                            <tbody>
                                <tr className="option-row">
                                    <th className="thQuestions">Opción</th>
                                    <th className="thQuestions">
                                        Es correcta?
                                    </th>
                                </tr>
                                {table}
                                <tr className="blank-row">
                                    <td colSpan={3}> </td>
                                </tr>
                            </tbody>
                        </table>
                        <div>
                            <span className="tag-row">
                                <Tags tags={tags} setTags={setTags} />
                            </span>
                        </div>
                        <button
                            className="buttonS"
                            type="button"
                            onClick={() => {
                                handleSubmit();
                            }}
                            disabled={submitting}
                        >
                            Enviar
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

interface ITagsProps {
    tags: { id: string; text: string }[];
    setTags: (tags) => any;
}

export const Tags: FC<ITagsProps> = ({ tags, setTags }) => {
    const inputRef = useRef<JSX.IntrinsicElements['input']>();

    const [value, setValue] = useState('');

    const handleDelete = (i) => {
        setTags(tags.filter((tag, index) => index !== i));
    };

    const handleAddition = () => {
        if (value === '') return;

        setTags([...tags, { id: value, text: value }]);

        const input = document.getElementById('tag-input') as any;

        input.value = '';

        setValue('');
    };

    return (
        <>
            <div className="tag-row ">
                <div className="h1Questions">Tags</div>
                <input
                    type="text"
                    id="tag-input"
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleAddition();
                        }
                    }}
                />
            </div>
            <div className="tag-line">
                {tags.map((tag, i) => {
                    return (
                        <div key={i} className="tag">
                            {tag.text}{' '}
                            <button
                                type="button"
                                onClick={() => {
                                    handleDelete(i);
                                }}
                            >
                                x
                            </button>
                        </div>
                    );
                })}
            </div>
            <button className="buttonS" type="button" onClick={handleAddition}>
                Agregar
            </button>
        </>
    );
};
