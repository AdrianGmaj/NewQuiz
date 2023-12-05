import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CreateQuestionDTO, Question, UpdateQuestionDTO} from "./dto/question";

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  constructor(private http: HttpClient) {
  }

  add(dto: CreateQuestionDTO) {
    return this.http.post<Question>('/api/questions', dto);
  }

  findAll() {
    return this.http.get<Array<Question>>('/api/questions');
  }

  findById(id: number) {
    return this.http.get<Question>(`/api/questions/${id}`);
  }

  update(id: number, dto: UpdateQuestionDTO) {
    return this.http.patch(`/api/questions/${id}`, dto);
  }
}
