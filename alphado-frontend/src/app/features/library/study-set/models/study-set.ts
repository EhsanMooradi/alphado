import {QuestionAndAnswer} from "./question-and-answer";

export interface StudySet {
    id: number;
    title: string;
    creator: string;
    questionsAndAnswers: QuestionAndAnswer[];
}
