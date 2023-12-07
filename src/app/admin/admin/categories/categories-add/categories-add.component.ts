import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/categories/categories.service';


@Component({
  selector: 'app-categories-add',
  templateUrl: './categories-add.component.html',
  styleUrls: ['./categories-add.component.scss']
})
export class CategoriesAddComponent implements OnInit {
  categoryAddForm = new FormGroup({
 
    title: new FormControl('',
      [Validators.required]),
    image: new FormControl('',
      [Validators.required]),

  })
  constructor( private categoryService: CategoriesService,
    private router:Router) { }

  ngOnInit() {
  }
categoryAdd(value){
  this.categoryService.addCategory(value).subscribe(response=>{
    this.router.navigateByUrl('/admin/categories')
  })

}
}
