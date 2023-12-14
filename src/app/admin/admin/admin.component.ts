import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { CategoriesService, Category } from 'src/app/categories/categories.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private categoriesService: CategoriesService,
    private auth:AuthService,
    private router: Router) { }

  ngOnInit() {

  }
logout(){
  this.auth.signOut().subscribe(()=>{
    this.router.navigateByUrl('log-in')
  })


}
}
