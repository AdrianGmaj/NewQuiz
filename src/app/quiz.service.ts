import { Injectable } from '@angular/core';
import { Question } from './question';
import { RandomGeneratorService } from './randomGenerator.service';
import { QuestionsService } from './questions.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private questions: Array<Question> = [

  ]



  constructor(private random: RandomGeneratorService,
    private questionService: QuestionsService) { }

  // getQuestions(): Array<Question> {
  //   return this.questions
  // }

  setQuestions(value: Array<Question>) {
    this.questions = value
  }

  getQuestions(): Observable<Array<Question>> {
    return this.questionService.findAll()
  }


  getRandomQuestionByCategory(): Question {

    let randomIndex = this.random.getRandom(this.getLength())

    return this.questions.at(randomIndex)

  }

  getLength(): number {
    return this.questions.length
  }



}


