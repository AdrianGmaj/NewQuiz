import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoriesService, Category } from 'src/app/categories/categories.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionsAllCategoryResolveService implements Resolve<Array<Category>> {

  constructor(private categoriesService: CategoriesService) { }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Category[]> {
    return this.categoriesService.getCategories()
  }

}
