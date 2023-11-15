import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Question } from '../question';
import { PlayerAnswer } from '../PlayerAnswer';
import { RandomGeneratorService } from '../randomGenerator.service';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.scss']
})
export class QuizCardComponent implements OnInit {
  colors = [
    "#7dd87d",
    "#ffdd18",
    "#01bfd2",
   
  ]
  bcgColor: string = ''
  selectedAnswer: number = -1
  @Input()
  quizCard: Question

  @Output()
  playerAnswer: EventEmitter<PlayerAnswer> = new EventEmitter<PlayerAnswer>()








  constructor(private random: RandomGeneratorService) { }

  ngOnInit() {
    this.bcgColor = this.randomColor()
  }

  selectAnswer(id: number): void {


    if (id == this.selectedAnswer) {
      this.selectedAnswer = -1
    } else {
      this.selectedAnswer = id;
    }



  }

  confirmAnswer() {
    let answer = this.quizCard.answers.find((answer) => answer.id == this.selectedAnswer)
    this.playerAnswer.emit({
      answerId: this.selectedAnswer,
      question: this.quizCard,
      correct: answer.correct
    })
    this.selectedAnswer = -1
    this.bcgColor = this.randomColor()


  }

  randomColor(): string {
    let index = this.random.getRandom(this.colors.length)
    return this.colors[index]

  }

}
