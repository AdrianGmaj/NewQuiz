/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlaygroundQuestionsResolveService } from './playground-questions-resolve.service';

describe('Service: PlaygroundQuestionsResolve', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlaygroundQuestionsResolveService]
    });
  });

  it('should ...', inject([PlaygroundQuestionsResolveService], (service: PlaygroundQuestionsResolveService) => {
    expect(service).toBeTruthy();
  }));
});
