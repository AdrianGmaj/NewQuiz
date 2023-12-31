import { Injectable } from '@angular/core';
import { Question } from './question';
import { QuizService } from './quiz.service';
import { PlayerAnswer } from './PlayerAnswer';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private answers: Array<PlayerAnswer> = []
  constructor(private quizService: QuizService) { }

  addAnswers(answer: PlayerAnswer) {
    this.answers.push(answer);
    console.log(this.answers)
  }



  newQuestion(): Question {
    let randomQuestion = this.quizService.getRandomQuestionByCategory()

    while (this.isQuestionRepeat(randomQuestion)) {
      randomQuestion = this.quizService.getRandomQuestionByCategory()
    }
    return randomQuestion

  }

  isQuestionRepeat(randomQuestion:Question):boolean {
    return this.answers.map((answer) => answer.question).includes(randomQuestion)
  }

  endOfTheGame(): boolean {
    return this.answers.length == this.getMaxQuestions()
  }

  getMaxQuestions(): number {
    return Math.min(this.quizService.getLength(), 10)
  }

  getAnswers(): Array<PlayerAnswer> {
    return this.answers
  }
  reset() {
    this.answers = []
  }
}
