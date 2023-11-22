import { Component, OnInit } from '@angular/core';
import { CategoriesService, Category } from 'src/app/categories/categories.service';

@Component({
  selector: 'app-kategorie',
  templateUrl: './kategorie.component.html',
  styleUrls: ['./kategorie.component.css']
})
export class KategorieComponent implements OnInit {
  categories:Array<Category>
  constructor(private categoriesService: CategoriesService) { }
  ngOnInit() {
    this.categories = this.categoriesService.getCategories()
      }
}
