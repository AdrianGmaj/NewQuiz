import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoriesEditComponent } from './categories-edit/categories-edit.component';
import { CategoriesResolveService } from './categories-resolve.service';
import { CategoriesAddComponent } from './categories-add/categories-add.component';

// import { CategoriesResolveService } from 'src/app/services/categories/categories-resolve.service';

const routes: Routes = [
  {path: '', component: CategoriesListComponent},
  {path: 'addCategory', component:CategoriesAddComponent},
  {
    path:'edit/:categoryId', component: CategoriesEditComponent,
    resolve:{
      categoriesById: CategoriesResolveService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
