import { Component, OnInit } from '@angular/core';
import { Observable, filter, map } from 'rxjs';
import { CategoryResponse } from 'src/app/categories/CategoryResponse';
import { CategoriesService } from 'src/app/categories/categories.service';
import { Question } from 'src/app/question';
import { QuestionsService } from 'src/app/questions.service';
import { QuizService } from 'src/app/quiz.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {
  categories$:Observable< Array<CategoryResponse>>
  questions$: Observable<Array<Question>>
  displayedColumns: string[] = [
    'categoryId',
    'id',
    'name',

    'actions'
  ];
  constructor(
    private questionService: QuestionsService,
    private categoriesService: CategoriesService) { }

  ngOnInit() {

    this.questions$ = this.questionService.findAll()
    this.categories$ = this.categoriesService.getCategories()
  }
  delete(id) {
    this.questionService.delete(id).subscribe(() => {
        this.questions$ = this.questionService.findAll()
      })

  }

  selectedCategory(categoryId){
    console.log(categoryId)
    this.questions$ = this.questionService.findAll().pipe(
      map((data)=>data.filter((item)=> item.categoryId === categoryId))
    )
    }
}

