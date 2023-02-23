import { FC, useState } from 'react';
import { WithContext as ReactTags } from 'react-tag-input';
import './index.scss';

interface ITagBarProps {
    tags;
    handleDelete: (i) => any;
}

export const TagBar: FC<ITagBarProps> = ({ tags, handleDelete }) => {
    const KeyCodes = {
        comma: 188,
        enter: 13,
    };

    const delimiters = [KeyCodes.comma, KeyCodes.enter];

    return (
        <div className="ReactTags">
            <ReactTags
                tags={tags}
                delimiters={delimiters}
                handleDelete={handleDelete}
                inputFieldPosition="bottom"
                readOnly={true}
                autocomplete
            />
        </div>
    );
};
