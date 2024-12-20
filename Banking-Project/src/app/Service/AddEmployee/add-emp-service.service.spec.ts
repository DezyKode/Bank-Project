import { TestBed } from '@angular/core/testing';

import { AddEmpServiceService } from './add-emp-service.service';

describe('AddEmpServiceService', () => {
  let service: AddEmpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddEmpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
