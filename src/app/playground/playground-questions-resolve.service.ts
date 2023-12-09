import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Question } from '../question';
import { Observable, map } from 'rxjs';
import { QuestionsService } from '../questions.service';

@Injectable({
  providedIn: 'root'
})
export class PlaygroundQuestionsResolveService implements Resolve<Array<Question>>{

  constructor(private questionsService: QuestionsService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Question[]> {
    const categoryId = route.params['id'];
    return this.questionsService.findAll().pipe(
      map((allQuestions) => {
        return allQuestions.filter((question) => question.categoryId == categoryId)
      })
    )

  }

}
