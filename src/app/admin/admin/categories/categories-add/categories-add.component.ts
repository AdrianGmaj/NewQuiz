import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-categories-add',
  templateUrl: './categories-add.component.html',
  styleUrls: ['./categories-add.component.scss']
})
export class CategoriesAddComponent implements OnInit {
  categoryAddForm = new FormGroup({
    id: new FormControl('',
      [Validators.required,],
    ),
    title: new FormControl('',
      [Validators.required]),
    image: new FormControl('',
      [Validators.required]),

  })
  constructor() { }

  ngOnInit() {
  }

}
