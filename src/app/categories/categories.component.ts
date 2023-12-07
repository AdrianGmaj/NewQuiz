import { Component, OnInit } from '@angular/core';
import { CategoriesService, Category } from './categories.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoryResponse } from './CategoryResponse';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories$:Observable< Array<CategoryResponse>>
  constructor(private categoriesService: CategoriesService,
    private router:Router) { }


  ngOnInit() {
    this.categories$ = this.categoriesService.getCategories()
  }

  startQuiz($event){
    this.router.navigateByUrl(`/playground/${$event}`)

  }
}
