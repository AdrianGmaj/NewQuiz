import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Question } from 'src/app/question';
import { QuestionsService } from 'src/app/questions.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionsResolveService  implements Resolve<Question>{

  constructor(private questionService: QuestionsService) { }

  resolve(route: ActivatedRouteSnapshot):Observable<Question> {
    console.log(route.params)
    const questionId  = route.params['questionId'];
    //let {questionId} = route.params;
    return this.questionService.findById(questionId);
  }

}
