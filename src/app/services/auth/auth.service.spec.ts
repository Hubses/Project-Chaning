import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService]
    });
  });

  it('should ...', inject([AuthService], service => {
    expect(service).toBeTruthy();
  }));
});
