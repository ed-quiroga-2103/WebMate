import { FC, useState, useRef, useEffect } from 'react';
import { Dropdown } from './Dropdown';
interface IFieldRowProps {
    handleEnter: () => void;
    ind: number;
    globalData: { id: number; text: string; tags: any[] }[];
    setGlobalData: React.Dispatch<
        React.SetStateAction<{ id: number; text: string }[]>
    >;
    indicator: boolean;
    setIndicator: any;
    submit: boolean;
    topics: any[];
    setTopics: any;
    name: string;
    setName: (name, i) => any;
    tags: any[];
    setTags: (tags, i) => any;
    handleGlobalDelete: any;
}

export const FieldRow: FC<IFieldRowProps> = ({
    handleEnter,
    ind,

    submit,

    globalData,

    indicator,
    setIndicator,
    name,
    setName,
    tags,
    setTags,
    handleGlobalDelete,
}) => {
    const [filteredValues, setFilteredValues] = useState([]);

    const [localName, setLocalName] = useState('');

    const [localTags, setLocalTags] = useState([]);

    const handleGlobalDeleteLocally = () => {
        handleGlobalDelete(ind);
        setIndicator(!indicator);
    };

    const handleDataChange = (e) => {
        setLocalName(e.target.value);
        setIndicator(!indicator);
        setName(e.target.value, ind);
    };

    const handleTagAdd = (e) => {
        setTags(
            [
                ...localTags,
                {
                    id: `${localTags.length}`,
                    text: e.target.value,
                },
            ],
            ind
        );
        setLocalTags([
            ...localTags,
            {
                id: `${localTags.length}`,
                text: e.target.value,
            },
        ]);

        setIndicator(!indicator);
    };

    useEffect(() => {
        const tempFiltered = [];

        for (const data of globalData) {
            let shouldContinue = false;
            for (const tag of localTags) {
                if (tag.text === data.text) {
                    shouldContinue = true;
                }
            }

            if (shouldContinue) continue;

            if (data.text === localName) {
                continue;
            } else {
                tempFiltered.push(data);
            }
        }

        setFilteredValues([{ id: -1, text: '...' }, ...tempFiltered]);
        return;
    }, [tags, indicator]);

    const reloadDropdown = () => {
        const tempFiltered = [];

        for (const data of globalData) {
            let shouldContinue = false;
            for (const tag of localTags) {
                if (tag.text === data.text) {
                    shouldContinue = true;
                }
            }

            if (shouldContinue) continue;
            if (data.text === localName) {
                continue;
            } else {
                tempFiltered.push(data);
            }
        }

        setFilteredValues([{ id: -1, text: '...' }, ...tempFiltered]);
        return;
    };

    const handleDelete = (i) => {
        setLocalTags(localTags.filter((tag, index) => index !== i));
    };

    return (
        <>
            <tr key={ind}>
                <td>
                    <input
                        value={localName}
                        onChange={handleDataChange}
                        onKeyUp={(e) => e.key === 'Enter' && handleEnter()}
                        size={10}
                    />
                </td>
                <td>
                    {localTags.map((tag, i) => {
                        return (
                            <>
                                <div className="tag" key={i}>
                                    {tag.text}
                                    <button
                                        onClick={() => {
                                            handleDelete(i);
                                        }}
                                    >
                                        X
                                    </button>
                                </div>
                            </>
                        );
                    })}

                    <Dropdown
                        values={filteredValues}
                        tags={localTags}
                        setTags={handleTagAdd}
                        reload={reloadDropdown}
                    />
                </td>
                <td>
                    <button
                        onClick={() => {
                            handleGlobalDelete(ind);
                        }}
                    >
                        X
                    </button>
                </td>
            </tr>
        </>
    );
};
