import { TestBed } from '@angular/core/testing';

import { NumberApiCallService } from './number-api-call.service';

describe('NumberApiCallService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NumberApiCallService = TestBed.get(NumberApiCallService);
    expect(service).toBeTruthy();
  });
});
