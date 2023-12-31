import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './admin/not-found/not-found.component';
import { AdminGuardService } from '../auth/admin-guard.service';

const routes: Routes = [
  {
    path: 'admin', component: AdminComponent, 
    children: [
      {
        path: '',
        loadChildren: () => import('./admin/categories/categories.module').then(m => m.CategoriesModule)
      },
      {
        path: 'categories',
        loadChildren: () => import('./admin/categories/categories.module').then(m => m.CategoriesModule)
      },
      {
        path: 'questions',
        loadChildren: () => import('./admin/questions/questions.module').then(m => m.QuestionsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
