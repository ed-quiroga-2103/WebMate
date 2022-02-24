import { FC, useState } from 'react';
import { TopicTable } from './TopicTable';
import formatCourseRequest from '../../utils/formatters/formatCourseRequest';
import api from '../../lib/api';
import './index.scss';

interface ICourseFormProps {}

export const CourseForm: FC<ICourseFormProps> = (props) => {
    const [data, setData] = useState([{ id: 0, text: '', tags: [] }]);
    const [submitting, setSubmitting] = useState(false);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [code, setCode] = useState('');

    const handleSubmit = () => {
        setSubmitting(true);

        setTimeout(async () => {
            setSubmitting(false);
            const formatted = formatCourseRequest(
                name,
                code,
                description,
                data
            );

            const response = await api.courses.post(formatted);

            console.log(response);
        }, 500);
    };
    return (
        <div>
            <div className="top-table">
                <div className="course-row">
                    <div className="name">Nombre</div>

                    <input
                        type="text"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                </div>
                <div className="course-row">
                    <div className="name">Código</div>

                    <input
                        type="text"
                        value={code}
                        onChange={(e) => {
                            setCode(e.target.value);
                        }}
                    />
                </div>
            </div>
            <div className="course-row">
                <div className="name">Descripción</div>

                <textarea
                    value={description}
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}
                />
            </div>

            <TopicTable data={data} setData={setData} submitting={submitting} />
            <div className="buttonWrapper">
                <button
                    className="buttonM"
                    onClick={handleSubmit}
                    disabled={submitting}
                >
                    Confirmar
                </button>
            </div>
        </div>
    );
};
