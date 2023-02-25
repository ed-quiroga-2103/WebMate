import answerQuiz from './answerQuiz';
import generateSubjectQuiz from './generateSubjectQuiz';
import generateDiagnosticQuiz from './generateDiagnosticQuiz';

const quiz = {
    validate: answerQuiz,
    generateSubject: generateSubjectQuiz,
    generateDiagnostic: generateDiagnosticQuiz,
};

export default quiz;
