import { TestBed } from '@angular/core/testing';

import { ElegibilityServiceService } from './elegibility-service.service';

describe('ElegibilityServiceService', () => {
  let service: ElegibilityServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElegibilityServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
