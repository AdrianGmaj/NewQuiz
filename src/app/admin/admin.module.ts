import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { AdminComponent } from './admin/admin.component';
import { CategoriesModule } from './admin/categories/categories.module';






@NgModule({
  declarations: [AdminComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTabsModule,
    CategoriesModule



  ]
})
export class AdminModule { }
