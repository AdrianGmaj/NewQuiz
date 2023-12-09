import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from 'src/app/question';
import { QuestionsService } from 'src/app/questions.service';
import { QuizService } from 'src/app/quiz.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  questions$: Observable<Array<Question>>
  displayedColumns: string[] = [
    'categoryId',
    'id',
    'name',

    'actions'
  ];
  constructor(
    private questionService: QuestionsService) { }

  ngOnInit() {

    this.questions$ = this.questionService.findAll()
  }

}
