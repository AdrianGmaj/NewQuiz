import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomGeneratorService {

  constructor() { }

  getRandom(max: number): number {
    return Math.floor(Math.random() * max);
  }

}
