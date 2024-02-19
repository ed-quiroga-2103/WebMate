import { useEffect, useState } from 'react';
import Latex from 'react-latex';
import { useTimer } from 'react-timer-hook';
import moment from 'moment/moment';

const questionData = {
    courseId: 'asdfasdf',
    course: {
        name: 'Mate General',
    },
    header: ['Cual opcion es equivalente a la siguiente ecuacion?', '$eq[0]'],
    options: [
        '$$X=ny \\times c$$',
        'Otra opcion',
        'Opcion con texto',
        'This is a test $$A \\times B$$ Some other test',
    ],
    equations: ['$$Y=mx \\times b$$'],
    imgs: [],
};

const QuestionsTest = ({ question }) => {
    const [data, setData] = useState('This is some test data');
    const [parsedData, setParsedData] = useState([]);

    const [promptedQuestions] = useState(question || questionData);

    const [equations, setEquations] = useState('');
    const [parsedEquations, setParsedEquations] = useState([]);

    const [images, setImages] = useState('');
    const [parsedImages, setParsedImages] = useState([]);

    const defaultEq = '$$M = (3x\\times 4) \\div (5-3x)$$';
    const defaultImg = 'https://source.unsplash.com/user/c_v_r';

    const [selected, setSelected] = useState(-1);

    const { minutes, seconds, start } = useTimer({
        expiryTimestamp: moment().add(10, 'minutes'),
        autoStart: false,
    });

    const a = [
        '\\[E=mc^2\\]',
        '$$M = (3x\\times 4) \\div (5-3x)$$',
        '$$M = (3x\\times 5)$$',
        '$$M = (5-3x)$$',
        '$$M = 3x\\div (5-3x)$$',
    ];

    const getEquationIndex = (expression) => {
        const validation = expression.match(/\$eq\[\d+\]/g);

        if (validation) {
            const index = validation[0].match(/\d+/g)[0];
            return index;
        }

        return undefined;
    };

    const getImageIndex = (expression) => {
        const validation = expression.match(/\$img\[\d+\]/g);

        if (validation) {
            const index = validation[0].match(/\d+/g)[0];
            return index;
        }

        return undefined;
    };

    useEffect(() => {
        const splittedData = data.split('\n');

        setParsedData(splittedData);
    }, [data]);

    useEffect(() => {
        const splittedData = equations.split('\n');
        setParsedEquations(splittedData.map((line) => `$$${line}$$`));
    }, [equations]);

    useEffect(() => {
        const splittedData = images.split('\n');
        setParsedImages(splittedData);
    }, [images]);

    const renderQuestion = (question) => {
        const lines = [];

        question.forEach((line) => {
            const eqIndex = getEquationIndex(line);
            const imgIndex = getImageIndex(line);



            if (eqIndex) {
                lines.push(
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignContent: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Latex displayMode={true}>
                            {parsedEquations[eqIndex] || defaultEq}
                        </Latex>
                    </div>
                );
            } else if (imgIndex) {
                lines.push(
                    <img
                        src={parsedImages[imgIndex] || defaultImg}
                        alt="question"
                        className="question-image"
                    />
                );
            }
            else {
                lines.push(<span>{line}</span>);
            }

        });

        return lines;
    };

    const renderOptions = (items = [1, 2, 3, 4, 5]) => {
        const itemsToRender = [];

        for (let i = 0; i < items.length; i += 1) {
            const item = items[i];

            itemsToRender.push(
                <div
                    className={i === selected ? 'item-selected' : 'item'}
                    onClick={() => {
                        setSelected(i);
                        start();
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignContent: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Latex displayMode={false}>{item}</Latex>
                    </div>
                </div>
            );
        }

        return itemsToRender;
    };

    const renderHeader = () => {
        const lines = [];
        const regex = new RegExp('\$.+\$', 'g')
        for (const line of promptedQuestions.header) {
            console.log(line, regex.test(line))
            if (line.substr(0, 3) === '$eq') {
                const ind = getEquationIndex(line);
                lines.push(
                    <>
                        <Latex>{promptedQuestions.equations[ind]}</Latex>
                    </>
                );
            } else if (line.substr(0,1) === '$') {
                lines.push(<Latex displayMode={true}>
                    {line}
                </Latex>)
            } else {
                lines.push(<span>{line}</span>);
            }
        }
        return <div className="header-container">{lines}</div>;
    };

    return (
        <div className="question">
            {/* <div className="latex-test-area">
                <span>Latex & Image testing</span>
                <textarea
                    defaultValue={data}
                    onChange={(event) => setData(event.target.value)}
                />
                <div className="question-container">
                    {renderQuestion(parsedData)}
                </div>
            </div>
            <div className="latex-test-area">
                <span>Equations</span>
                <textarea
                    defaultValue={equations}
                    onChange={(event) => setEquations(event.target.value)}
                />
                <span>Images</span>
                <textarea
                    defaultValue={images}
                    onChange={(event) => setImages(event.target.value)}
                />
            </div> */}

            <div className="container">
                <div className="timer">
                    <h1 className="clock">
                        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                    </h1>
                </div>
                <div className="header">{renderHeader()}</div>
                <div className="options">
                    {renderOptions(promptedQuestions.options)}
                </div>
                <div className='button-bar'>
                    <button>
                        Anterior
                    </button>
                    <button>
                        Siguiente
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuestionsTest;
