import { TestBed, inject } from '@angular/core/testing';

import { MessageValidatorService } from './message-validator.service';

describe('MessageValidatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageValidatorService]
    });
  });

  it('should be created', inject([MessageValidatorService], (service: MessageValidatorService) => {
    expect(service).toBeTruthy();
  }));
});
