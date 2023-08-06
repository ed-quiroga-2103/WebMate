import { useEffect, useState } from 'react';
import Latex from 'react-latex';

const QuestionsTest = () => {
    const [data, setData] = useState('This is some test data');
    const [parsedData, setParsedData] = useState([]);

    const [equations, setEquations] = useState('');
    const [parsedEquations, setParsedEquations] = useState([]);

    const [images, setImages] = useState('');
    const [parsedImages, setParsedImages] = useState([]);

    const defaultEq = '$$M = (3x\\times 4) \\div (5-3x)$$';
    const defaultImg = 'https://source.unsplash.com/user/c_v_r';

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
            } else {
                lines.push(<span>{line}</span>);
            }
        });

        return lines;
    };

    return (
        <div className="test-area">
            <div className="latex-test-area">
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
            </div>
        </div>
    );
};

export default QuestionsTest;
