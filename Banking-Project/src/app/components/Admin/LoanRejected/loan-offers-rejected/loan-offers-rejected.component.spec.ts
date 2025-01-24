import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanOffersRejectedComponent } from './loan-offers-rejected.component';

describe('LoanOffersRejectedComponent', () => {
  let component: LoanOffersRejectedComponent;
  let fixture: ComponentFixture<LoanOffersRejectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoanOffersRejectedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanOffersRejectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
