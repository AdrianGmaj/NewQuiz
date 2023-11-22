import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {MatTabsModule} from '@angular/material/tabs';
import { AdminComponent } from './admin/admin.component';
import { KategorieComponent } from './admin/kategorie/kategorie.component';



@NgModule({
  declarations: [AdminComponent,
    KategorieComponent
 ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTabsModule,

  ]
})
export class AdminModule { }
