import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  categories: Array<Category> = [
    {
      id: 1,
      title: 'polityka',
      image: '/assets/categories/polityka.png'
    },
    {
      id: 2,
      title: 'sport',
      image: '/assets/categories/sport.png'
    },
    {
      id: 3,
      title: 'muzyka',
      image: '/assets/categories/muzyka.png'
    },
    {
      id: 4,
      title: 'frontend',
      image: '/assets/categories/frontend.png'
    },
    {
      id: 5,
      title: 'esc',
      image: '/assets/categories/esc.png'
    }

  ]


  constructor( private http: HttpClient) { }

  getCategories() {
    return this.categories
  }
  editCategory(id:number, value:Category):Observable<Category>{
    return this.http.patch<Category>(`api/categories/${id}`,value)
  }
  getCategoryById(id: string): Observable<Category> {
    return this.http.get<Category>(`api/categories/${id}`)
  }

}

export interface Category {
  id: number;
  title: string;
  image: string;

}