import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormGroup, FormControl } from '@angular/forms'

import { Observable } from 'rxjs';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { CategoryResponse } from 'src/app/services/categories/categoryResponse';

@Component({
  selector: 'app-categories-edit',
  templateUrl: './categories-edit.component.html',
  styleUrls: ['./categories-edit.component.css']
})
export class CategoriesEditComponent implements OnInit {
  categoryEditForm: FormGroup
  categoryId: string;
  category: CategoryResponse

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoriesService: CategoriesService
  ) { }

  ngOnInit() {
    this.categoryId = this.route.snapshot.paramMap.get('categoryId');

    this.route.data.subscribe((response) => {

      console.log('>> data:', response);
      const categoryById: CategoryResponse = response['categoriesById'];

      console.log('>> data:', categoryById);

      this.categoryEditForm = new FormGroup({
        name: new FormControl(categoryById.name),
        thumbnail: new FormControl(categoryById.thumbnail),
        image: new FormControl(categoryById.image),
        active: new FormControl(categoryById.active),
      })


    })

  }
  editCategory(id, value) {
    this.categoriesService.editCategory(id, value).subscribe((response) =>
      this.router.navigateByUrl('/admin/categories'))
  }
}
