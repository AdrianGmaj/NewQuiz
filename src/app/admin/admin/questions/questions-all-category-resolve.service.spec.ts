/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { QuestionsAllCategoryResolveService } from './questions-all-category-resolve.service';

describe('Service: QuestionsAllCategoryResolve', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionsAllCategoryResolveService]
    });
  });

  it('should ...', inject([QuestionsAllCategoryResolveService], (service: QuestionsAllCategoryResolveService) => {
    expect(service).toBeTruthy();
  }));
});
