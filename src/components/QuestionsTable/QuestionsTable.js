const QuestionsTable = ({ questions }) => {
    return (
        <table className="questions-table">
            <tr>
                <th>Tema</th>
                <th>Curso</th>
                <th>Dificultad</th>
                <th>Fn</th>
            </tr>
            {questions.map((question) => (
                <tr>
                    <td>{question.subject.name}</td>
                    <td>{question.course.name}</td>
                    <td>
                        {question.difficulty.charAt(0).toUpperCase() +
                            question.difficulty.slice(1)}
                    </td>
                    <td>
                        <button>Ver</button>
                        <button>Edit</button>
                    </td>
                </tr>
            ))}
        </table>
    );
};

export default QuestionsTable;
