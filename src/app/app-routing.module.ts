import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowcaseComponent } from './showcase/showcase.component';
import { PlaygroundComponent } from './playground/playground.component';
import { ScorePageComponent } from './score-page/score-page.component';
import { CategoriesComponent } from './categories/categories.component';
import { LogInComponent } from './log-in/log-in/log-in.component';
import { AdminComponent } from './admin/admin/admin.component';
import { PlaygroundQuestionsResolveService } from './playground/playground-questions-resolve.service';
import { AdminGuardService } from './auth/admin-guard.service';

const routes: Routes = [
  {
    path: '', component: ShowcaseComponent
  },
  { path: 'categories', component: CategoriesComponent },
  {
    path: 'playground/:id',
    component: PlaygroundComponent,
    resolve: {
      questions: PlaygroundQuestionsResolveService
    }
  },
  { path: 'score', component: ScorePageComponent },
  { path: 'log-in', component: LogInComponent },
  { path: 'admin', component: AdminComponent,canActivate: [AdminGuardService], },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    enableTracing: true

  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
