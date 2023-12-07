import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { MatTableModule } from '@angular/material/table';
import { QuestionListComponent } from './question-list/question-list.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionAddComponent } from './question-add/question-add.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [QuestionListComponent,
    QuestionAddComponent
  ],
  imports: [
    CommonModule,
    QuestionsRoutingModule,
    MatTableModule,
    MatDividerModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule
 
  ]
})
export class QuestionsModule { }
