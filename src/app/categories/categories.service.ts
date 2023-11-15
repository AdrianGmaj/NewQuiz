import { Injectable } from '@angular/core';

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

  ]

  constructor() { }

  getCategories(){
    return this.categories
  }

}

export interface Category {
  id: number;
  title: string;
  image: string;

}