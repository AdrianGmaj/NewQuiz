/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { QuestionsResolveService } from './questions-resolve.service';

describe('Service: QuestionsResolve', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionsResolveService]
    });
  });

  it('should ...', inject([QuestionsResolveService], (service: QuestionsResolveService) => {
    expect(service).toBeTruthy();
  }));
});
