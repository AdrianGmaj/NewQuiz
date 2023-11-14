import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { QuizCardComponent } from './quiz-card/quiz-card.component';
import { PlaygroundComponent } from './playground/playground.component';
import { AppRoutingModule } from './app-routing.module';
import { ScorePageComponent } from './score-page/score-page.component';

@NgModule({
  declarations: [				
    AppComponent,
      ShowcaseComponent,
      QuizCardComponent,
      PlaygroundComponent,
      ScorePageComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
