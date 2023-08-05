import React from 'react';
import { useNavigate } from 'react-router-dom';
import back from '../../assets/back.png';
import grades from '../../assets/grades.json';

const headers = grades[0];
const gradesJSON = grades.slice(1).map((row) => {
    const temp = {};
    headers.map((header, index) => {
        temp[header] = row[index];
    });
    return temp;
});
function Record() {
    const base = 'record';
    const navigate = useNavigate();
    const goTo = (event) => {
        event.stopPropagation();
        navigate(`/admin`);
    };
    return (
        <main className={`${base}__root`}>
            <div className={`${base}__wrapper`}>
                <div className={`${base}__wrapper__header`}>
                    <h1 className={`${base}__wrapper__header__title`}>
                        Registro de Notas
                    </h1>
                    <div
                        onClick={(event) => goTo(event)}
                        className={`${base}__wrapper__header__back`}
                    >
                        <img
                            src={back}
                            alt="back"
                            className={`${base}__wrapper__header__back__logo`}
                        />
                    </div>
                </div>
                <h2 className={`${base}__wrapper__subtitle`}>
                    Probabilidad y Estadistica - Grupo 1
                </h2>
                <div className={`${base}__wrapper__list`}>
                    <table className={`${base}__wrapper__table`}>
                        <tbody className={`${base}__table`}>
                            <tr className={`${base}__table__row`}>
                                {headers.map((header, index) => {
                                    return (
                                        <th
                                            className={`${base}__table__header`}
                                            key={`h${index}`}
                                        >
                                            {header}
                                        </th>
                                    );
                                })}
                            </tr>
                            {gradesJSON.map((student, index) => (
                                <tr
                                    className={`${base}__row`}
                                    key={`g${index}`}
                                >
                                    {headers.map((header) => (
                                        <td
                                            className={`${base}__table__element `}
                                            key={header}
                                        >
                                            {student[header]}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}

export default Record;
