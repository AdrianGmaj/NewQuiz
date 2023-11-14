import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Question } from '../question';
import { PlayerAnswer } from '../PlayerAnswer';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.scss']
})
export class QuizCardComponent implements OnInit {

  selectedAnswer: number = -1
  @Input()
  quizCard: Question

  @Output()
  playerAnswer: EventEmitter<PlayerAnswer> = new EventEmitter<PlayerAnswer>()








  constructor() { }

  ngOnInit() {
  }

  selectAnswer(id: number): void {


    if (id == this.selectedAnswer) {
      this.selectedAnswer = -1
    } else {
      this.selectedAnswer = id;
    }



  }

  confirmAnswer() {
    let answer=this.quizCard.answers.find((answer)=>answer.id == this.selectedAnswer)
    this.playerAnswer.emit({ 
      answerId: this.selectedAnswer, 
      questions: this.quizCard, 
      correct: answer.correct 
    })
    this.selectedAnswer = -1

  }

}
