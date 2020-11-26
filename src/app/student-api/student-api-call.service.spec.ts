import { TestBed } from '@angular/core/testing';

import { StudentApiCallService } from './student-api-call.service';

describe('StudentApiCallService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentApiCallService = TestBed.get(StudentApiCallService);
    expect(service).toBeTruthy();
  });
});
