import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/question';
import { QuizService } from 'src/app/quiz.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {
questions:Array<Question>
  displayedColumns: string[] = [
    'categoryId',
    'id',
    'name',

    'actions'
  ];
  constructor(private quizService: QuizService) { }

  ngOnInit() {
this.questions = this.quizService.getQuestions()
  }

}
