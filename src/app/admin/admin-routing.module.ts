import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path: 'admin', component: AdminComponent,
    children: [
      {
        path: "",
        loadChildren: () => import('./admin/categories/categories.module').then(m => m.CategoriesModule),
      },
      {
        path: 'categories',
        loadChildren: () => import('./admin/categories/categories.module').then(m => m.CategoriesModule)
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
