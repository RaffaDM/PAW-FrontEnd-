import { TestBed } from '@angular/core/testing';

import { AuthGuardPromoterGuard } from './auth-guard-promoter.guard';

describe('AuthGuardPromoterGuard', () => {
  let guard: AuthGuardPromoterGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGuardPromoterGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
