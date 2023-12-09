import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { CategoryResponse } from './CategoryResponse';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  // categories: Array<Category> = [
  //   {
  //     id: 1,
  //     title: 'polityka',
  //     image: '/assets/categories/polityka.png'
  //   },
  //   {
  //     id: 2,
  //     title: 'sport',
  //     image: '/assets/categories/sport.png'
  //   },
  //   {
  //     id: 3,
  //     title: 'muzyka',
  //     image: '/assets/categories/muzyka.png'
  //   },
  //   {
  //     id: 4,
  //     title: 'frontend',
  //     image: '/assets/categories/frontend.png'
  //   },
  //   {
  //     id: 5,
  //     title: 'esc',
  //     image: '/assets/categories/esc.png'
  //   }

  // ]


  constructor(private http: HttpClient) { }

  getCategories():Observable<Array<CategoryResponse>> {
    return this.http.get<Array<CategoryResponse>>(`/api/categories`)
  }

  editCategory(id: number, value: Category): Observable<CategoryResponse> {
    return this.http.patch<CategoryResponse>(`api/categories/${id}`, value)
  }
  getCategoryById(id: string): Observable<Category> {
    return this.http.get<Category>(`api/categories/${id}`)
  }

  addCategory(value: Category): Observable<CategoryResponse> {
    return this.http.post<CategoryResponse>('/api/categories', value)
  }

}

export interface Category {

  title: string;
  image: string;

}