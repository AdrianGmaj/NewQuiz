/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RandomGeneratorService } from './randomGenerator.service';

describe('Service: RandomGenerator', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RandomGeneratorService]
    });
  });

  it('should ...', inject([RandomGeneratorService], (service: RandomGeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
