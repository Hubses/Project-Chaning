import { TestBed, inject } from '@angular/core/testing';

import { ChainingService } from './chaining.service';

describe('ChainingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChainingService]
    });
  });

  it('should ...', inject([ChainingService], (service: ChainingService) => {
    expect(service).toBeTruthy();
  }));
});
