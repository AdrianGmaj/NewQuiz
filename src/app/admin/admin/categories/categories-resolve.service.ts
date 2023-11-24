import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { CategoriesService, Category } from 'src/app/categories/categories.service';



@Injectable({
  providedIn: 'root'
})
export class CategoriesResolveService implements Resolve<Category> {

  constructor(private categoriesService: CategoriesService) { }
  resolve(route: ActivatedRouteSnapshot) {
    console.log('>>', route.params);
    const { categoryId } = route.params;
    return this.categoriesService.getCategoryById(categoryId)
  }

}



