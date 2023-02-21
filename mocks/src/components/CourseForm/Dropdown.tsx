import { FC } from 'react';

interface IDropdownProps {
    values: { id: number; text: string }[];
    tags: { id: string; text: string }[];
    setTags: any;
    reload: any;
}

export const Dropdown: FC<IDropdownProps> = (props) => {
    return (
        <div>
            <select
                className="course-row-dropdown "
                value={'...'}
                onChange={(e) => {
                    props.setTags(e);
                }}
            >
                {props.values.map((value, ind) => (
                    <option key={ind}>{value.text}</option>
                ))}
            </select>
        </div>
    );
};
