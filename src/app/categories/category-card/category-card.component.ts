import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from '../categories.service';
import { Router } from '@angular/router';
import { CategoryResponse } from '../CategoryResponse';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent implements OnInit {
  @Input()
  categoryCard: CategoryResponse
  constructor(private router:Router) { }


  @Output()
  Start: EventEmitter<number> = new EventEmitter<number>()

  ngOnInit() {
  }

  startQuiz(id: number) {
    this.Start.emit(id)
  }
}
