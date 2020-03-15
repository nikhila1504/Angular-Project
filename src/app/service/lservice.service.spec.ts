import { TestBed } from '@angular/core/testing';

import { LserviceService } from './lservice.service';

describe('LserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LserviceService = TestBed.get(LserviceService);
    expect(service).toBeTruthy();
  });
});
