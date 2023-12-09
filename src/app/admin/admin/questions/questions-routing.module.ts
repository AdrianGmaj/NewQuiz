import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionAddComponent } from './question-add/question-add.component';
import { QuestionEditComponent } from './question-edit/question-edit.component';
import { QuestionsResolveService } from './questions-resolve.service';
import { QuestionsAllCategoryResolveService } from './questions-all-category-resolve.service';

const routes: Routes = [
  { path: '', component: QuestionListComponent },
  {
    path: 'add', component: QuestionAddComponent,
    resolve: {
      categories: QuestionsAllCategoryResolveService
    }
  },
  {
    path: 'edit/:questionId', component: QuestionEditComponent,
    data: { lol: 'statyczne dane' }, // dostajemy odrazu w polu data
    resolve: { // dopisze nam pola do data gdy dane wróca z serwera
      questionById: QuestionsResolveService,
      categories: QuestionsAllCategoryResolveService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionsRoutingModule { }
