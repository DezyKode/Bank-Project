import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanOffersAllComponent } from './loan-offers-all.component';

describe('LoanOffersAllComponent', () => {
  let component: LoanOffersAllComponent;
  let fixture: ComponentFixture<LoanOffersAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoanOffersAllComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanOffersAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
