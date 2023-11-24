import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormGroup, FormControl } from '@angular/forms'

import { Observable } from 'rxjs';
import { CategoriesService, Category } from 'src/app/categories/categories.service';


@Component({
  selector: 'app-categories-edit',
  templateUrl: './categories-edit.component.html',
  styleUrls: ['./categories-edit.component.css']
})
export class CategoriesEditComponent implements OnInit {
  categoryEditForm: FormGroup
  categoryId: string;
  category: Category

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoriesService: CategoriesService
  ) { }

  ngOnInit() {
    this.categoryId = this.route.snapshot.paramMap.get('categoryId');

    this.route.data.subscribe((response) => {

      console.log('>> data:', response);
      const categoryById: Category = response['categoriesById'];

      console.log('>> data:', categoryById);

      this.categoryEditForm = new FormGroup({
        id: new FormControl(categoryById.id),
        title: new FormControl(categoryById.title),
        image: new FormControl(categoryById.image),
     
      })


    })

  }
  editCategory(id, value) {
    this.categoriesService.editCategory(id, value).subscribe((response) =>
      this.router.navigateByUrl('/admin/categories'))
  }
}
