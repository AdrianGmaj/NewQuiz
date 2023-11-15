import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowcaseComponent } from './showcase/showcase.component';
import { PlaygroundComponent } from './playground/playground.component';
import { ScorePageComponent } from './score-page/score-page.component';
import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [
  {
    path: '', component: ShowcaseComponent
  },
  {path:'categories', component: CategoriesComponent},
  {
    path: 'playground/:id',
    component: PlaygroundComponent
  },
  { path: 'score', component: ScorePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',

  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
