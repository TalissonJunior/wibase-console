import { TestBed, async, inject } from '@angular/core/testing';

import { LoggedInUsersGuard } from './logged-in-users.guard';

describe('LoggedInUsersGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoggedInUsersGuard]
    });
  });

  it('should ...', inject([LoggedInUsersGuard], (guard: LoggedInUsersGuard) => {
    expect(guard).toBeTruthy();
  }));
});
