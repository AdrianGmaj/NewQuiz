import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoryResponse } from 'src/app/categories/CategoryResponse';
import { CategoriesService } from 'src/app/categories/categories.service';
import { CreateQuestionDTO } from 'src/app/dto/question';
import { QuestionsService } from 'src/app/questions.service';

@Component({
  selector: 'app-question-add',
  templateUrl: './question-add.component.html',
  styleUrls: ['./question-add.component.scss']
})
export class QuestionAddComponent implements OnInit {
  categories$: Observable<Array<CategoryResponse>>
  categories:Array<CategoryResponse>
  questionAddForm = new FormGroup({

    categoryId: new FormControl('',
      [Validators.required]),
    description: new FormControl('',
      [Validators.required]),
    a1: new FormControl('',
      [Validators.required]),
    a2: new FormControl('',
      [Validators.required]),
    a3: new FormControl('',
      [Validators.required]),
    a4: new FormControl('',
      [Validators.required]),
    c1: new FormControl(false),
    c2: new FormControl(false),
    c3: new FormControl(false),
    c4: new FormControl(false),

  })
  constructor(private questionService: QuestionsService,
    private categoryService: CategoriesService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.categories$ = this.categoryService.getCategories()
    this.categories = this.route.snapshot.data['categories']
  }
  questionAdd(value) {
    let request: CreateQuestionDTO = {
      categoryId: value.categoryId,
      description: value.description,
      answers: [
        {
          label: value.a1,
          correct: value.c1
        },
        {
          label: value.a2,
          correct: value.c2
        },
        {
          label: value.a3,
          correct: value.c3
        },
        {
          label: value.a4,
          correct: value.c4
        },

      ]
    }
    this.questionService.add(request).subscribe({
      next: response => this.router.navigateByUrl('admin/questions'),
      error: err => console.log(err)
    })

  }

}
