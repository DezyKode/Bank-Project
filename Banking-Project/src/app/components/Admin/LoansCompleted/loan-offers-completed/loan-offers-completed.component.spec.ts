import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanOffersCompletedComponent } from './loan-offers-completed.component';

describe('LoanOffersCompletedComponent', () => {
  let component: LoanOffersCompletedComponent;
  let fixture: ComponentFixture<LoanOffersCompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoanOffersCompletedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanOffersCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
