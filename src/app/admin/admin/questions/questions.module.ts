import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { MatTableModule } from '@angular/material/table';
import { QuestionListComponent } from './question-list/question-list.component';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [QuestionListComponent
  ],
  imports: [
    CommonModule,
    QuestionsRoutingModule,
    MatTableModule,
    MatDividerModule
  ]
})
export class QuestionsModule { }
