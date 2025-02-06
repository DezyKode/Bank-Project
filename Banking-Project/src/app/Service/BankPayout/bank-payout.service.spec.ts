import { TestBed } from '@angular/core/testing';

import { BankPayoutService } from './bank-payout.service';

describe('BankPayoutService', () => {
  let service: BankPayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankPayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
