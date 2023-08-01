import React from 'react';
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
    return (
        <main className={`${base}__root`}>
            <div className={`${base}__wrapper`}>
                <h1 className={`${base}__wrapper__title`}>Registro de Notas</h1>
                <table className={`${base}__wrapper__list`}>
                    <tbody className={`${base}__table`}>
                        <tr className={`${base}__table__row`}>
                            {headers.map((header, index) => {
                                return <th className={`${base}__table__header`} key={`h${index}`}>{header}</th>;
                            })}
                        </tr>
                            {gradesJSON.map((student, index) => (
                                <tr className={`${base}__row`} key={`g${index}`}>
                                    {headers.map((header) => (
                                        <td className={`${base}__table__element `}key={header}>{student[header]}</td>
                                    ))}
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
}

export default Record;
