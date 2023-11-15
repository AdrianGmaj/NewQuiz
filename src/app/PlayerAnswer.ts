import { Question } from "./question";

export interface PlayerAnswer {
    question: Question;
    answerId: number;
    correct:boolean;
}
