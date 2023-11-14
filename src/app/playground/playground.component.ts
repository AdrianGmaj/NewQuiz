import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Question } from '../question';
import { GameService } from '../game.service';
import { PlayerAnswer } from '../PlayerAnswer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

  question: Question

  constructor(private gameService: GameService,
    private router: Router) { }

  ngOnInit() {

    this.question = this.gameService.newQuestion()
  }
  onPlayerAnswer($event: PlayerAnswer) {
    console.log($event)
  
    this.gameService.addAnswers($event)

    if(this.gameService.endOfTheGame()){
      console.log('koniec gry')
this.router.navigateByUrl('score')
    }else{
      this.question = this.gameService.newQuestion()
    }
  }



}
