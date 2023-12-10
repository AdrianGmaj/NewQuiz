import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryResponse } from 'src/app/categories/CategoryResponse';
import { CategoriesService, Category } from 'src/app/categories/categories.service';


@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {

  categories$:Observable< Array<CategoryResponse>>


  displayedColumns: string[] = [
    
    'id',
    'name',
    'img',
    'actions'
  ];

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.categories$ = this.categoriesService.getCategories()
  }

  delete(id){
    this.categoriesService.deleteCategory(id).subscribe(()=>{
      this.categories$ = this.categoriesService.getCategories()
    })
  }

}
