import { Component, OnInit } from '@angular/core';
import { CategoriesService, Category } from 'src/app/categories/categories.service';


@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {

  categories: Array<Category>


  displayedColumns: string[] = [
    
    'id',
    'name',
    'img',
    'actions'
  ];

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.categories = this.categoriesService.getCategories()
  }


}
