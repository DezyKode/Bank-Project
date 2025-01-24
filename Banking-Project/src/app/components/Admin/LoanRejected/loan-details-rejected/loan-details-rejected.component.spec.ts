import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDetailsRejectedComponent } from './loan-details-rejected.component';

describe('LoanDetailsRejectedComponent', () => {
  let component: LoanDetailsRejectedComponent;
  let fixture: ComponentFixture<LoanDetailsRejectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoanDetailsRejectedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanDetailsRejectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
