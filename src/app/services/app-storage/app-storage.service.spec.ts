import { TestBed, inject } from '@angular/core/testing';

import { AppStorageService } from './app-storage.service';

describe('AppStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppStorageService]
    });
  });

  it('should ...', inject([AppStorageService], (service: AppStorageService) => {
    expect(service).toBeTruthy();
  }));
});
