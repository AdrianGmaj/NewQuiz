import { Component, OnInit } from '@angular/core';
import { CategoriesService, Category } from 'src/app/categories/categories.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
categories:Array<Category>
  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
this.categories = this.categoriesService.getCategories()
  }

}
