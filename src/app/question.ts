import { Answer } from "./answer";

export interface Question {
    id: number;
    categoryId?:number;
    description: string;
    answers: Array<Answer>
}
