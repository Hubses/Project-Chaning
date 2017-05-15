import { TestBed, inject } from '@angular/core/testing';

import { ProjectGeneratorService } from './project-generator.service';

describe('ProjectGeneratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectGeneratorService]
    });
  });

  it('should ...', inject([ProjectGeneratorService], (service: ProjectGeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
