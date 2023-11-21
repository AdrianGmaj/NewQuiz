import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { QuizCardComponent } from './quiz-card/quiz-card.component';
import { PlaygroundComponent } from './playground/playground.component';
import { AppRoutingModule } from './app-routing.module';
import { ScorePageComponent } from './score-page/score-page.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryCardComponent } from './categories/category-card/category-card.component';
import { LogInModule } from './log-in/log-in.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ShowcaseComponent,
    QuizCardComponent,
    PlaygroundComponent,
    ScorePageComponent,
    CategoriesComponent,
    CategoryCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LogInModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
