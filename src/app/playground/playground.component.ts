import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Question } from '../question';
import { GameService } from '../game.service';
import { PlayerAnswer } from '../PlayerAnswer';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

  question: Question
  categoryId: number

  constructor(private gameService: GameService,
    private router: Router,
    private acitvatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.categoryId = parseInt(this.acitvatedRoute.snapshot.paramMap.get('id'))

    console.log(this.categoryId)
    this.question = this.gameService.newQuestion(this.categoryId);

  }
  onPlayerAnswer($event: PlayerAnswer) {
    console.log($event)

    this.gameService.addAnswers($event)

    if (this.gameService.endOfTheGame()) {
      console.log('koniec gry')
      this.router.navigateByUrl('score')
    } else {
      this.question = this.gameService.newQuestion(this.categoryId)
    }
  }



}
