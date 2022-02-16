import { Graph3D } from '../../components/Graph/Graph3D';
import { FC, useEffect, useState } from 'react';
import './index.scss';
import { TagBar } from '../../components/Tagbar';
import { text } from 'd3';
interface ITestProps {}

interface IFieldRowProps {
    handleEnter: () => void;
    ind: number;
    row: string;
    globalData: { id: number; text: string }[];
    setGlobalData: React.Dispatch<
        React.SetStateAction<{ id: number; text: string }[]>
    >;
    indicator: boolean;
    setIndicator: any;
}

export const FieldRow: FC<IFieldRowProps> = ({
    handleEnter,
    ind,
    row,
    globalData,
    setGlobalData,
    indicator,
    setIndicator,
}) => {
    const [data, setData] = useState('');
    const [values, setValues] = useState([{ id: '0', text: 'Holder' }]);

    const [filteredValues, setFilteredValues] = useState([]);

    const handleDataChange = (e) => {
        let tempData = globalData;

        tempData[ind] = {
            id: tempData[ind].id,
            text: e.target.value,
        };

        setIndicator(!indicator);
        setGlobalData(tempData);
        setData(e.target.value);
    };

    useEffect(() => {
        const filtered = [{ id: -1, text: '...' }];

        for (const option of globalData) {
            if (option.id !== ind) {
                filtered.push(option);
            }
        }

        setFilteredValues(filtered);
        return;
    }, [indicator]);

    return (
        <>
            <tr key={`${ind}-${row}`}>
                <td>
                    <input
                        value={data}
                        onChange={handleDataChange}
                        onKeyUp={(e) => e.key === 'Enter' && handleEnter()}
                        size={10}
                    />
                </td>
                <td className="dropdownCont">
                    <TagBar tags={values} handleDelete={(i) => {}} />
                    <Dropdown
                        values={filteredValues}
                        tags={values}
                        setTags={setValues}
                    />
                </td>
            </tr>
        </>
    );
};

interface IDropdownProps {
    values: { id: number; text: string }[];
    tags: { id: string; text: string }[];
    setTags: any;
}

export const Dropdown: FC<IDropdownProps> = (props) => {
    return (
        <div>
            <select
                value={'...'}
                onChange={(e) => {
                    console.log(e.target.value);
                    console.log(props.tags);
                    props.setTags([
                        ...props.tags,
                        {
                            id: `${props.tags.length}`,
                            text: e.target.value,
                        },
                    ]);
                }}
            >
                {props.values.map((value, ind) => (
                    <option key={ind}>{value.text}</option>
                ))}
            </select>
        </div>
    );
};

export const Test: FC<ITestProps> = (props) => {
    const [rows, setRows] = useState([]);

    const [data, setData] = useState([{ id: 0, text: '' }]);

    const [indicator, setIndicator] = useState(false);

    useEffect(() => {
        setRows(['a']);
        return;
    }, []);

    return (
        <div className="">
            <table>
                <thead>
                    <tr>
                        <th>header1</th>
                        <th>header2</th>
                        <th>
                            <button
                                onClick={() => {
                                    setRows([...rows, '']);
                                    setData([
                                        ...data,
                                        { id: data.length, text: '' },
                                    ]);
                                }}
                            >
                                button
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, ind) => (
                        <FieldRow
                            row={row}
                            ind={ind}
                            handleEnter={() => {}}
                            globalData={data}
                            setGlobalData={setData}
                            indicator={indicator}
                            setIndicator={setIndicator}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

// Notes
// document.body.style.overflow = 'hidden';
