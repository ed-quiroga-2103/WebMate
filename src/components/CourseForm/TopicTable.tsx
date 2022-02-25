import { FC, useEffect, useRef, useState } from 'react';
import './index.scss';
import { FieldRow } from './FieldRow';
import './index.scss';
interface ITopicTableProps {
    data: { id: number; text: string; tags: any[] }[];
    setData: any;
    submitting;
}

export const TopicTable: FC<ITopicTableProps> = ({
    data,
    setData,
    submitting,
}) => {
    const [indicator, setIndicator] = useState(false);

    const [topics, setTopics] = useState([]);

    const handleDelete = (i) => {
        const result = [];

        for (let index = 0; index < data.length; index++) {
            const element = data[index];

            if (index !== i) {
                console.log(element);
                result.push(element);
            }
        }

        setData(result);
    };

    return (
        <div className="bigWrapper">
            <table className="topics-table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Dependencias</th>
                        <th className="shrink">
                            <button
                                className="buttonXS"
                                onClick={() => {
                                    setData([
                                        ...data,
                                        { id: data.length, text: '', tags: [] },
                                    ]);
                                }}
                            >
                                Add Topic
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((_, ind) => (
                        <FieldRow
                            key={ind}
                            ind={ind}
                            handleEnter={() => {}}
                            globalData={data}
                            setGlobalData={setData}
                            handleGlobalDelete={handleDelete}
                            indicator={indicator}
                            setIndicator={setIndicator}
                            submit={submitting}
                            topics={topics}
                            setTopics={setTopics}
                            name={data[ind].text}
                            setName={(name, ind) => {
                                const copy = data;
                                copy[ind].text = name;

                                setData(copy);
                            }}
                            tags={data[ind].tags}
                            setTags={(tags, ind) => {
                                const copy = data;

                                copy[ind].tags = tags;

                                console.log(copy[ind]);

                                setData(copy);
                            }}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};
