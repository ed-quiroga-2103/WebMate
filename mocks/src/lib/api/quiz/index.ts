import generateQuiz from './generateQuiz';
import answerQuiz from './answerQuiz';
import generateSubjectQuiz from './generateSubjectQuiz';
import generateDiagnosticQuiz from './generateDiagnosticQuiz';

export default {
    generate: generateQuiz,
    validate: answerQuiz,
    generateSubject: generateSubjectQuiz,
    generateDiagnostic: generateDiagnosticQuiz,
};
