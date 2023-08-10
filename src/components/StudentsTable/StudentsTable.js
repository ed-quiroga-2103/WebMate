const QuestionsTable = ({ students, openModal }) => {
    return (
        <table className="questions-table">
            <tr>
                <th>Nombre Completo</th>
                <th>Correo Electronico</th>
                <th>Carnet</th>
                <th>Nota Promedio</th>
                <th>Acciones</th>
            </tr>
            {students.map((student) => (
                <tr>
                    <td>
                        {student.name} {student.lastName}
                    </td>
                    <td>{student.email}</td>
                    <td>{student.dni}</td>
                    <td>{student.averageGrade || 0}</td>
                    <td>
                        <button>...</button>
                    </td>
                </tr>
            ))}
        </table>
    );
};

export default QuestionsTable;
