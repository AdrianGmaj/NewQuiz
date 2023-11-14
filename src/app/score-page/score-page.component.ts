import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { PlayerAnswer } from '../PlayerAnswer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-score-page',
  templateUrl: './score-page.component.html',
  styleUrls: ['./score-page.component.scss']
})
export class ScorePageComponent implements OnInit {
  answers: Array<PlayerAnswer>
  correctAnswers
  constructor(private gameService: GameService,
    private router: Router) { }

  ngOnInit() {
    this.answers = this.gameService.getAnswers()
    console.log(this.answers)

    this.correctAnswers = this.answers.filter((answer) => answer.correct == true)
    console.log(this.correctAnswers)
  }

  backToStart() {
    this.router.navigateByUrl('')
    this.gameService.reset()
  }

}
