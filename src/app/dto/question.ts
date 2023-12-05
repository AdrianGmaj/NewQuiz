export interface Question {
  id: number;
  categoryId: number;
  description: string;
  answers: Array<Answer>
}

export interface Answer {
  id: number;
  label: string;
  correct: boolean;
}

export interface CreateQuestionDTO {
  categoryId: number;
  description: string;
  answers: Array<CreateAnswerDTO>
}

export interface CreateAnswerDTO {
  label: string;
  correct: boolean;
}

export interface UpdateQuestionDTO {
  categoryId: number;
  description: string;
  answers: Array<Answer>
}
