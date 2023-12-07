import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionAddComponent } from './question-add/question-add.component';

const routes: Routes = [
  {path: '', component: QuestionListComponent},
  {path: 'add', component: QuestionAddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionsRoutingModule { }
