export interface QuestionFilters {
    code: string;
    tags: string[];
}

export interface QuestionData {
    text: string;
    course: string;
    difficulty: string;
    tags: string[];
    options: {
        isCorrect: boolean;
        value: string;
    }[];
}

export interface Question {
    id: string;
    text: string;
    tags: string[];
    url: string;
    difficulty: string;
    options: {
        isCorrect: boolean;
        value: string;
    }[];
    courseId: string;
}
