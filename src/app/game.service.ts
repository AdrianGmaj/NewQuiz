import { Injectable } from '@angular/core';
import { Question } from './question';
import { QuizService } from './quiz.service';
import { PlayerAnswer } from './PlayerAnswer';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  answers: Array<PlayerAnswer> = []
  constructor(private quizService: QuizService) { }

  addAnswers(answer: PlayerAnswer) {
    this.answers.push(answer);
    console.log(this.answers)
  }



  newQuestion(): Question {

    let randomIndex = this.getRandomInt(this.quizService.getLength())
    return this.quizService.getQuestions().at(randomIndex)

  }
  private getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  endOfTheGame(): boolean {
    return this.answers.length == 8
  }

  getAnswers():Array<PlayerAnswer>{
    return this.answers
  }
  reset(){
    this.answers =[]
  }
}
