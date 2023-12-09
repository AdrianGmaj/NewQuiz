import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoryResponse } from 'src/app/categories/CategoryResponse';
import { CategoriesService } from 'src/app/categories/categories.service';
import { UpdateQuestionDTO } from 'src/app/dto/question';
import { Question } from 'src/app/question';
import { QuestionsService } from 'src/app/questions.service';

@Component({
  selector: 'app-question-edit',
  templateUrl: './question-edit.component.html',
  styleUrls: ['./question-edit.component.scss']
})
export class QuestionEditComponent implements OnInit {
  categories: Array<CategoryResponse>
  questionEditForm: FormGroup
  questionId: string
  questionById: UpdateQuestionDTO
  constructor(private categoriesService: CategoriesService,
    private router: Router,
    private route: ActivatedRoute,
    private questionServices: QuestionsService
  ) { }

  ngOnInit() {

    this.questionId = this.route.snapshot.paramMap.get('questionId')
      ;


    let lol = this.route.snapshot.data['lol']
    let question = this.route.snapshot.data['questionById']
    this.categories = this.route.snapshot.data['categories']




    const questionById: Question = question

    this.questionEditForm = new FormGroup({

      categoryId: new FormControl(questionById.categoryId),
      description: new FormControl(questionById.description),

      aId1: new FormControl(questionById.answers[0].id),
      aId2: new FormControl(questionById.answers[1].id),
      aId3: new FormControl(questionById.answers[2].id),
      aId4: new FormControl(questionById.answers[3].id),
      a1: new FormControl(questionById.answers[0].label),
      a2: new FormControl(questionById.answers[1].label),
      a3: new FormControl(questionById.answers[2].label),
      a4: new FormControl(questionById.answers[3].label),
      c1: new FormControl(questionById.answers[0].correct),
      c2: new FormControl(questionById.answers[1].correct),
      c3: new FormControl(questionById.answers[2].correct),
      c4: new FormControl(questionById.answers[3].correct),

    })

  }

  questionEdit(id: any, value: FormData) {
    console.log(value)

    const request: UpdateQuestionDTO = {
      categoryId: value.categoryId,
      description: value.description,
      answers: [
        {
          id: value.aId1,
          label: value.a1,
          correct: value.c1
        },
        {
          id: value.aId2,
          label: value.a2,
          correct: value.c2
        },
        {
          id: value.aId3,
          label: value.a3,
          correct: value.c3
        },
        {
          id: value.aId4,
          label: value.a4,
          correct: value.c4
        },

      ]
    };

    this.questionServices.update(id, request).subscribe((response) =>
      this.router.navigateByUrl('/admin/questions'))
  }

}

interface FormData {
  categoryId: number;
  description: string;
  aId1: number;
  aId2: number;
  aId3: number;
  aId4: number;
  a1: string;
  a2: string;
  a3: string;
  a4: string;
  c1: boolean;
  c2: boolean;
  c3: boolean;
  c4: boolean;
}

