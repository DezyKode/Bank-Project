import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDetailsCompletedComponent } from './loan-details-completed.component';

describe('LoanDetailsCompletedComponent', () => {
  let component: LoanDetailsCompletedComponent;
  let fixture: ComponentFixture<LoanDetailsCompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoanDetailsCompletedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanDetailsCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
