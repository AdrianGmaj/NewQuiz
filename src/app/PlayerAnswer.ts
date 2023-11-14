import { Question } from "./question";

export interface PlayerAnswer {
    questions: Question;
    answerId: number;
    correct:boolean;
}
